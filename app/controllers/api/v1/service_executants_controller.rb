class Api::V1::ServiceExecutantsController < ApplicationController
  def index
    autoCompleteResults = ServiceExecutant.all
    service_executant = ServiceExecutant.where(id: ServiceExecutant.first.id)
    if TypeService.where('name = ?','CSP').count > 0
      id_csp = TypeService.where('name = ?','CSP').first.id
      csp = autoCompleteResults.where(type_service_id: id_csp).count
    else 
      csp = 0
    end
    if TypeService.where('name = ?','SFACT').count > 0 
      id_sfact = TypeService.where('name = ?','SFACT').first.id
      sfact = autoCompleteResults.where(type_service_id: id_sfact).count
    else
      sfact = 0
    end 
    if TypeService.where('name = ?','cgf').count > 0 
      id_cgf = TypeService.where('name = ?','cgf').first.id
      cgf = autoCompleteResults.where(type_service_id: id_cgf).count
    else
      cgf = 0
    end 
    if TypeService.where('name = ?','comptable').count > 0 
      id_comptable = TypeService.where('name = ?','comptable').first.id
      comptable = autoCompleteResults.where(type_service_id: id_comptable).count
    else
      comptable = 0
    end
    response = {autoCompleteResults: autoCompleteResults, service_executant: service_executant.as_json(:include => :ministere), csp: csp, sfact: sfact, cgf: cgf, comptable: comptable}
    render json: response
  end

  def new
  end

  def create
  end

  def search 
  	autoCompleteResults = ServiceExecutant.ransack(libelle_cont: params[:q]).result(distinct: true)
    if TypeService.where('name = ?','CSP').count > 0
      id_csp = TypeService.where('name = ?','CSP').first.id
      csp = autoCompleteResults.where(type_service_id: id_csp).count
    else 
      csp = 0
    end
    if TypeService.where('name = ?','SFACT').count > 0 
      id_sfact = TypeService.where('name = ?','SFACT').first.id
      sfact = autoCompleteResults.where(type_service_id: id_sfact).count
    else
      sfact = 0
    end 
    if TypeService.where('name = ?','cgf').count > 0 
      id_cgf = TypeService.where('name = ?','cgf').first.id
      cgf = autoCompleteResults.where(type_service_id: id_cgf).count
    else
      cgf = 0
    end 
    if TypeService.where('name = ?','comptable').count > 0 
      id_comptable = TypeService.where('name = ?','comptable').first.id
      comptable = autoCompleteResults.where(type_service_id: id_comptable).count
    else
      comptable = 0
    end
  	response = {autoCompleteResults: autoCompleteResults, term: params[:q], csp: csp, sfact: sfact, cgf: cgf, comptable: comptable}
    render json: response
  end 

  def search_marker
    service_executant = ServiceExecutant.where(id: params[:q])
    indicateur_executions = service_executant.first.indicateur_executions.all 
    response = {service_executant: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}])}
    render json: response
  end
end
