class Api::V1::ServiceExecutantsController < ApplicationController
  def index
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
end
