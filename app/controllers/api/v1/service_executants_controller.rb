class Api::V1::ServiceExecutantsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session
  def index
    autoCompleteResults = ServiceExecutant.all.order(libelle: :asc)
    service_executant = ServiceExecutant.where(id: ServiceExecutant.first.id)

    if !autoCompleteResults.nil?
      csp = autoCompleteResults.where('type_structure = ?', 'CSP').count
      sfact = autoCompleteResults.where('type_structure = ?', 'SFACT').count
      cgf = autoCompleteResults.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 
    service_executants = ServiceExecutant.all.order(libelle: :asc)
    ministeres = Ministere.all.order(name: :asc)
    blocs = OrganisationFinanciere.all.order(name: :asc)
    type_services = TypeService.all.order(name: :asc)

    date = Indicateur.first.indicateur_executions.order(date: :asc).last.date #derniere date ajoutée

    #calcul moyenne de l'execution sur chaque se 
    
    se_color = Hash.new
    se_id = Performance.where(date: date).order(service_executant_id: :asc).pluck(:service_executant_id)
    valeur_id = Performance.where(date: date).order(service_executant_id: :asc).pluck(:valeur)
    #autoCompleteResults.each do |se|
    se_id.each_with_index do |se,i|
      #if se.performances.where(date: date).count > 0 
        #if se.performances.where(date: date).first.valeur >= 40 
        if valeur_id[i] >= 40 
          se_color[se] = "vert"
        #elsif se.performances.where(date: date).first.valeur >= 30
        elsif valeur_id[i] >= 30 
          se_color[se] = "jaune"
        #elsif se.performances.where(date: date).first.valeur > 0
        elsif valeur_id[i] > 0 
          se_color[se] = "rouge"
        else 
          se_color[se] = "noir"
        end
      #else
      #  se_color[se.id] = "noir"
      #end
    end 

    response = {autoCompleteResults: autoCompleteResults, service_executant: service_executant, csp: csp, sfact: sfact, cgf: cgf,service_executants: service_executants, ministeres: ministeres, blocs: blocs, type_services: type_services, se_color: se_color, date: date}
    render json: response
  end

  def new
  end

  def create
  end

  def search #page carto se
    if params[:search_service_executants].length != 0
      search_service_executants = params[:search_service_executants]
      autoCompleteResults = ServiceExecutant.where(id: search_service_executants)
    elsif params[:search_ministeres].length != 0 
      ministeres_id = params[:search_ministeres]
      autoCompleteResults = ServiceExecutant.where(ministere_id: ministeres_id)
    elsif params[:search_blocs].length != 0 
      blocs_id = params[:search_blocs]
      autoCompleteResults = ServiceExecutant.where(organisation_financiere_id: blocs_id)
    elsif params[:search_type_services].length != 0
      types_id = params[:search_type_services]
      autoCompleteResults = ServiceExecutant.where(type_service_id: types_id)
    else
      autoCompleteResults = ServiceExecutant.all
    end 
    if params[:effectif] && params[:effectif].length != 0
      autoCompleteResults = autoCompleteResults.where('effectif <= ?', params[:effectif].to_i)
    end
    if params[:type_structure] && params[:type_structure].length != 0 && params[:type_structure] != "ALL"
      autoCompleteResults = autoCompleteResults.where('type_structure = ?', params[:type_structure].to_s)
    end 
    if !autoCompleteResults.nil?
      csp = autoCompleteResults.where('type_structure = ?', 'CSP').count
      sfact = autoCompleteResults.where('type_structure = ?', 'SFACT').count
      cgf = autoCompleteResults.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 

    se_color = Hash.new
   

    se_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).order(service_executant_id: :asc).pluck(:service_executant_id)
    valeur_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).order(service_executant_id: :asc).pluck(:valeur)
   
    se_id.each_with_index do |se,i|     
        if valeur_id[i] >= 40 
          se_color[se] = "vert"
     
        elsif valeur_id[i] >= 30 
          se_color[se] = "jaune"
      
        elsif valeur_id[i] > 0 
          se_color[se] = "rouge"
        else 
          se_color[se] = "noir"
        end
    end 

    response = {autoCompleteResults: autoCompleteResults, csp: csp, sfact: sfact, cgf: cgf, effectif: params[:effectif], type_structure: params[:type_structure], search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], search_type_services: params[:search_type_services], se_color: se_color}
    render json: response
  end 

  def search_date #page carto se date
    if params[:search_service_executants] && params[:search_service_executants].length != 0
     autoCompleteResults = ServiceExecutant.where(id: params[:search_service_executants])     
    elsif params[:search_ministeres] && params[:search_ministeres].length != 0 
      autoCompleteResults = ServiceExecutant.where(ministere_id: params[:search_ministeres])
    elsif params[:search_blocs] && params[:search_blocs].length != 0 
      autoCompleteResults = ServiceExecutant.where(organisation_financiere_id: params[:search_blocs])
    elsif params[:search_type_services] && params[:search_type_services].length != 0
      autoCompleteResults = ServiceExecutant.where(type_service_id: params[:search_type_services])
    else
      autoCompleteResults = ServiceExecutant.all
    end 
    if params[:effectif] && params[:effectif].length != 0
      autoCompleteResults = autoCompleteResults.where('effectif <= ?', params[:effectif].to_i)
    end
    if params[:type_structure] && params[:type_structure].length != 0 && params[:type_structure] != "ALL"
      autoCompleteResults = autoCompleteResults.where('type_structure = ?', params[:type_structure].to_s)
    end 
    if !autoCompleteResults.nil?
      csp = autoCompleteResults.where('type_structure = ?', 'CSP').count
      sfact = autoCompleteResults.where('type_structure = ?', 'SFACT').count
      cgf = autoCompleteResults.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 
  
    se_color = Hash.new
   

    se_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).order(service_executant_id: :asc).pluck(:service_executant_id)
    valeur_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).order(service_executant_id: :asc).pluck(:valeur)
   
    se_id.each_with_index do |se,i|     
        if valeur_id[i] >= 40 
          se_color[se] = "vert"
     
        elsif valeur_id[i] >= 30 
          se_color[se] = "jaune"
      
        elsif valeur_id[i] > 0 
          se_color[se] = "rouge"
        else 
          se_color[se] = "noir"
        end

    end 

    response = {autoCompleteResults: autoCompleteResults, csp: csp, sfact: sfact, cgf: cgf, effectif: params[:effectif], type_structure: params[:type_structure], search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], search_type_services: params[:search_type_services], se_color: se_color}
    render json: response
  end 


  def search_marker
    service_executant = ServiceExecutant.where(id: params[:q])

    indicateur_executions = service_executant.first.indicateur_executions.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).order(indicateur_id: :asc)
    performance = service_executant.first.performances.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).first.valeur
    response = {service_executant: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), performance: performance}
    render json: response
  end


  def import
    ServiceExecutant.import(params[:file])
    render json: { message: 'se ajouté!' }
  end 
end
