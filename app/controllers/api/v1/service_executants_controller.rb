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

    #calcul moyenne de l'execution sur chaque se 
    moyenne_seuil1 = Indicateur.sum(:seuil_1).round(2)
    moyenne_seuil2 = Indicateur.sum(:seuil_2).round(2)
    se_color = Hash.new

    autoCompleteResults.each do |se|
      #point = 0
      #total_ind = 0

      #se.indicateur_executions.where.not(valeur: nil).where('date >= ? AND date <= ?', Date.today.at_beginning_of_month, Date.today.at_end_of_month).each do |exec|
      #  if exec.valeur <= exec.indicateur.seuil_1
      #    point += 1
      #  elsif exec.valeur > exec.indicateur.seuil_1 && exec.valeur <= exec.indicateur.seuil_2
      #    point += 2
      #  elsif exec.valeur > exec.indicateur.seuil_2
      #    point += 3
      #  end
      #  total_ind += 1
      
      #end 

      #  valeur_noir = point / total_ind
      #  point += valeur_noir * se.indicateur_executions.where(valeur: nil).where('date >= ? AND date <= ?', Date.today.at_beginning_of_month, Date.today.at_end_of_month).count 
      #  if point <= 19
      #    se_color[se.id] = "vert"
      #  elsif point > 19 && point <= 27
      #    se_color[se.id] = "jaune"
      #  elsif point > 27
      #    se_color[se.id] = "rouge"
      #  end
      se_color[se.id] = "jaune"
    end 

    response = {autoCompleteResults: autoCompleteResults, service_executant: service_executant, csp: csp, sfact: sfact, cgf: cgf,service_executants: service_executants, ministeres: ministeres, blocs: blocs, type_services: type_services, se_color: se_color}
    render json: response
  end

  def new
  end

  def create
  end

  def search #page carto se
    if params[:search_service_executants] && params[:search_service_executants].length != 0
      autoCompleteList = ServiceExecutant.ransack(libelle_cont: params[:search_service_executants]).result(distinct: true)
      autoCompleteResults = ServiceExecutant.ransack(libelle_cont: params[:search_service_executants]).result(distinct: true)
      term = params[:search_service_executants]
    elsif params[:search_ministeres] && params[:search_ministeres].length != 0 
      autoCompleteList = Ministere.ransack(name_cont: params[:search_ministeres]).result(distinct: true)
      @arr_ministere = autoCompleteList.pluck(:id).uniq
      autoCompleteResults = ServiceExecutant.where(ministere_id: @arr_ministere)
      term = params[:search_ministeres]
    elsif params[:search_blocs] && params[:search_blocs].length != 0 
      autoCompleteList = OrganisationFinanciere.ransack(name_cont: params[:search_blocs]).result(distinct: true)
      @arr_bloc = autoCompleteList.pluck(:id).uniq
      autoCompleteResults = ServiceExecutant.where(organisation_financiere_id: @arr_bloc)
      term = params[:search_blocs]
    elsif params[:search_type_services] && params[:search_type_services].length != 0
      autoCompleteList = TypeService.ransack(name_cont: params[:search_type_services]).result(distinct: true)
      @arr_type = autoCompleteList.pluck(:id).uniq
      autoCompleteResults = ServiceExecutant.where(type_service_id: @arr_type)
      term = params[:search_type_services]
    else
      if params[:showSe] == true 
        autoCompleteList = ServiceExecutant.all.order(libelle: :asc)
      elsif params[:showMinistere] == true 
        autoCompleteList = Ministere.all.order(name: :asc)
      elsif params[:showType] == true 
        autoCompleteList = TypeService.all.order(name: :asc)
      elsif params[:showBloc] == true
        autoCompleteList = OrganisationFinanciere.all.order(name: :asc)
      else
        autoCompleteList = ServiceExecutant.all.order(libelle: :asc)
      end
      autoCompleteResults = ServiceExecutant.all
      term= ''
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

    response = {autoCompleteResults: autoCompleteResults, autoCompleteList: autoCompleteList, term: term, csp: csp, sfact: sfact, cgf: cgf, effectif: params[:effectif], type_structure: params[:type_structure], search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], search_type_services: params[:search_type_services]}
    render json: response
  end 

  def search_date #page carto se date
    if params[:search_service_executants] && params[:search_service_executants].length != 0
      autoCompleteList = ServiceExecutant.ransack(libelle_cont: params[:search_service_executants]).result(distinct: true)
      autoCompleteResults = ServiceExecutant.ransack(libelle_cont: params[:search_service_executants]).result(distinct: true)
      term = params[:search_service_executants]
    elsif params[:search_ministeres] && params[:search_ministeres].length != 0 
      autoCompleteList = Ministere.ransack(name_cont: params[:search_ministeres]).result(distinct: true)
      @arr_ministere = autoCompleteList.pluck(:id).uniq
      autoCompleteResults = ServiceExecutant.where(ministere_id: @arr_ministere)
      term = params[:search_ministeres]
    elsif params[:search_blocs] && params[:search_blocs].length != 0 
      autoCompleteList = OrganisationFinanciere.ransack(name_cont: params[:search_blocs]).result(distinct: true)
      @arr_bloc = autoCompleteList.pluck(:id).uniq
      autoCompleteResults = ServiceExecutant.where(organisation_financiere_id: @arr_bloc)
      term = params[:search_blocs]
    elsif params[:search_type_services] && params[:search_type_services].length != 0
      autoCompleteList = TypeService.ransack(name_cont: params[:search_type_services]).result(distinct: true)
      @arr_type = autoCompleteList.pluck(:id).uniq
      autoCompleteResults = ServiceExecutant.where(type_service_id: @arr_type)
      term = params[:search_type_services]
    else
      if params[:showSe] == true 
        autoCompleteList = ServiceExecutant.all.order(libelle: :asc)
      elsif params[:showMinistere] == true 
        autoCompleteList = Ministere.all.order(name: :asc)
      elsif params[:showType] == true 
        autoCompleteList = TypeService.all.order(name: :asc)
      elsif params[:showBloc] == true
        autoCompleteList = OrganisationFinanciere.all.order(name: :asc)
      else
        autoCompleteList = ServiceExecutant.all.order(libelle: :asc)
      end
      autoCompleteResults = ServiceExecutant.all
      term= ''
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
    #calcul moyenne de l'execution sur chaque se 
    se_color = Hash.new
    autoCompleteResults.each do |se|
        se_color[se.id] = "jaune"
    end 

    response = {autoCompleteResults: autoCompleteResults, autoCompleteList: autoCompleteList, term: term, csp: csp, sfact: sfact, cgf: cgf, effectif: params[:effectif], type_structure: params[:type_structure], search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], search_type_services: params[:search_type_services], se_color: se_color}
    render json: response
  end 

  def search_marker
    service_executant = ServiceExecutant.where(id: params[:q])

    indicateur_executions = service_executant.first.indicateur_executions.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).order(indicateur_id: :asc)
    response = {service_executant: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}])}
    render json: response
  end


  def import
    ServiceExecutant.import(params[:file])
    render json: { message: 'se ajouté!' }
  end 
end
