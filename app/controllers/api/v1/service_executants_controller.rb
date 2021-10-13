class Api::V1::ServiceExecutantsController < ApplicationController
  def index
    autoCompleteResults = ServiceExecutant.all
    service_executant = ServiceExecutant.where(id: ServiceExecutant.first.id)
    response = {autoCompleteResults: autoCompleteResults, service_executant: service_executant.as_json(:include => :ministere)}
    render json: response
  end

  def new
  end

  def create
  end

  def search 
  	autoCompleteResults = ServiceExecutant.ransack(libelle_cont: params[:q]).result(distinct: true)
  	response = {autoCompleteResults: autoCompleteResults, term: params[:q]}
    render json: response
  end 

  def search_marker
    service_executant = ServiceExecutant.where(id: params[:q])
    indicateur_executions = service_executant.first.indicateur_executions.all 
    response = {service_executant: service_executant.as_json(:include => :ministere), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => :ministere}])}
    render json: response
  end
end
