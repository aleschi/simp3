class Api::V1::ServiceExecutantsController < ApplicationController
  def index
    autoCompleteResults = ServiceExecutant.all
    service_executant = ServiceExecutant.where(id: ServiceExecutant.first.id)
    response = {autoCompleteResults: autoCompleteResults, service_executant: service_executant}
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
    response = {service_executant: service_executant}
    render json: response
  end
end
