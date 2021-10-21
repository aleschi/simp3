class Api::V1::IndicateurExecutionsController < ApplicationController
  protect_from_forgery with: :null_session
  def index

  	indicateur_n = Indicateur.where('name = ?', Indicateur.first.name)
  	indicateur_name = Indicateur.all.order(name: :asc).first.name
  	indicateur = Indicateur.all.order(name: :asc)
    ministere = Ministere.all.order(name: :asc)
    service_executant = ServiceExecutant.all.order(libelle: :asc)

    bloc = OrganisationFinanciere.all.order(name: :asc)
    type_service = TypeService.all.order(name: :asc)
    indicateur_execution = indicateur_n.first.indicateur_executions.all.order(date: :asc)
 	  @service_executant_n_arr = indicateur_execution.pluck(:service_executant_id).uniq
 	  service_executant_n = ServiceExecutant.where(id: @service_executant_n_arr)
    search_service_executants = service_executant_n.pluck(:id).uniq
    if !service_executant_n.nil?
      csp = service_executant_n.where('type_structure = ?', 'CSP').count
      sfact = service_executant_n.where('type_structure = ?', 'SFACT').count
      cgf = service_executant_n.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 
    se_color = Hash.new
    indicateur_execution.each do |ex|
      if !indicateur_n.first.seuil_1.nil? && !indicateur_n.first.seuil_2.nil? 
        if ex.valeur <= indicateur_n.first.seuil_1
          se_color[ex.service_executant_id] = "vert"
        elsif ex.valeur > indicateur_n.first.seuil_1 && ex.valeur <= indicateur_n.first.seuil_2
          se_color[ex.service_executant_id] = "jaune"
        elsif ex.valeur > indicateur_n.first.seuil_2
          se_color[ex.service_executant_id] = "jaune"
        end
      else
        se_color[ex.service_executant_id] = "noir"
      end
    end 
    response = {data1: indicateur.as_json(:include => :indicateur_executions), data2: ministere.as_json(:include => :service_executants), data3: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), data4: bloc.as_json(:include => :service_executants), data5: type_service.as_json(:include => :service_executants), data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), data7: indicateur_n.as_json, data8: service_executant_n, indicateur_name: indicateur_name, csp: csp, sfact: sfact, cgf: cgf, search_service_executants: search_service_executants,se_color: se_color }
    render json: response
  end

  def carto_perf

    indicateur_n = Indicateur.where('name = ?', Indicateur.first.name)
    indicateur_name = Indicateur.all.order(name: :asc).first.name
    indicateur = Indicateur.all.order(name: :asc)
    ministere = Ministere.all.order(name: :asc)
    service_executant = ServiceExecutant.all.order(libelle: :asc)
    bloc = OrganisationFinanciere.all.order(name: :asc)
    type_service = TypeService.all.order(name: :asc)

    indicateur_execution = indicateur_n.first.indicateur_executions.where('date >= ? AND date <= ?', Date.today.at_beginning_of_month, Date.today.at_end_of_month)
    @service_executant_n_arr = indicateur_execution.pluck(:service_executant_id).uniq
    service_executant_n = ServiceExecutant.where(id: @service_executant_n_arr)
    search_service_executants = service_executant_n.pluck(:id).uniq
    if !service_executant_n.nil?
      csp = service_executant_n.where('type_structure = ?', 'CSP').count
      sfact = service_executant_n.where('type_structure = ?', 'SFACT').count
      cgf = service_executant_n.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 
    se_color = Hash.new
    indicateur_execution.each do |ex|
      if !indicateur_n.first.seuil_1.nil? && !indicateur_n.first.seuil_2.nil? 
        if ex.valeur <= indicateur_n.first.seuil_1
          se_color[ex.service_executant_id] = "vert"
        elsif ex.valeur > indicateur_n.first.seuil_1 && ex.valeur <= indicateur_n.first.seuil_2
          se_color[ex.service_executant_id] = "jaune"
        elsif ex.valeur > indicateur_n.first.seuil_2
          se_color[ex.service_executant_id] = "jaune"
        end
      else
        se_color[ex.service_executant_id] = "noir"
      end
    end 

    response = {data1: indicateur.as_json(:include => :indicateur_executions), data2: ministere.as_json(:include => :service_executants), data3: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), data4: bloc.as_json(:include => :service_executants), data5: type_service.as_json(:include => :service_executants), data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), data7: indicateur_n.as_json, data8: service_executant_n, indicateur_name: indicateur_name, csp: csp, sfact: sfact, cgf: cgf, search_service_executants: search_service_executants, se_color: se_color }
    render json: response
  end

  def new
  end

  def create
  end

  def search 
  	indicateur_n = Indicateur.where('name = ?', params[:search_indicateur].to_s)
  	indicateur_name = params[:search_indicateur].to_s

  	indicateur = Indicateur.all.order(name: :asc)
    ministere = Ministere.all.order(name: :asc)
    service_executant = ServiceExecutant.all.order(libelle: :asc)
    bloc = OrganisationFinanciere.all.order(name: :asc)
    type_service = TypeService.all.order(name: :asc)

    if params[:search_service_executants].length != 0
      search_service_executants = params[:search_service_executants]
      service_executant_n = ServiceExecutant.where(id: search_service_executants)
    elsif params[:search_ministeres].length != 0
      ministeres_id = params[:search_ministeres]
      service_executant_n = ServiceExecutant.where(ministere_id: ministeres_id)
      search_service_executants = service_executant_n.pluck(:id).uniq
    elsif params[:search_blocs].length != 0
      blocs_id = params[:search_blocs]
      service_executant_n = ServiceExecutant.where(organisation_financiere_id: blocs_id)
      search_service_executants = service_executant_n.pluck(:id).uniq
    elsif params[:search_type_services].length != 0
      types_id = params[:search_type_services]
      service_executant_n = ServiceExecutant.where(type_service_id: types_id)
      search_service_executants = service_executant_n.pluck(:id).uniq 
    end

    if params[:effectif] && params[:effectif].length != 0 
      service_executant_n = service_executant_n.where('effectif <= ?', params[:effectif].to_i)
    end 
    if params[:type_structure] && params[:type_structure].length != 0 && params[:type_structure] != "ALL"
      service_executant_n = service_executant_n.where('type_structure = ?', params[:type_structure].to_s)
    end 
    if !service_executant_n.nil?
      csp = service_executant_n.where('type_structure = ?', 'CSP').count
      sfact = service_executant_n.where('type_structure = ?', 'SFACT').count
      cgf = service_executant_n.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 

    indicateur_execution = indicateur_n.first.indicateur_executions.where(service_executant_id: search_service_executants).order(date: :asc)
 
    response = {data1: indicateur.as_json(:include => :indicateur_executions), data2: ministere.as_json(:include => :service_executants), data3: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), data4: bloc.as_json(:include => :service_executants), data5: type_service.as_json(:include => :service_executants), data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), data7: indicateur_n.as_json, data8: service_executant_n, search_indicateur: params[:search_indicateur].to_s, indicateur_name: indicateur_name, search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], search_type_services: params[:search_type_services], effectif: params[:effectif], type_structure: params[:type_structure], csp: csp, sfact: sfact, cgf: cgf,}
    render json: response
  end 

  def import
    IndicateurExecution.import(params[:file])
    render json: { message: 'ind ajouté!' }
  end 

end
