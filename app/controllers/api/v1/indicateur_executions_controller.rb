class Api::V1::IndicateurExecutionsController < ApplicationController
  def index

  	indicateur_n = Indicateur.where('name = ?', Indicateur.first.name)
  	indicateur = Indicateur.all.order(created_at: :desc)
    ministere = Ministere.all.order(created_at: :desc)
    service_executant = ServiceExecutant.all.order(created_at: :desc)

    bloc = OrganisationFinanciere.all.order(created_at: :desc)
    type_service = TypeService.all.order(created_at: :desc)
    indicateur_execution = indicateur_n.first.indicateur_executions.all.order(created_at: :desc)
 	@service_executant_n_arr = indicateur_execution.pluck(:service_executant_id).uniq!
 	service_executant_n = ServiceExecutant.where(id: @service_executant_n_arr)

    response = {data1: indicateur.as_json(:include => :indicateur_executions), data2: ministere.as_json(:include => :service_executants), data3: service_executant.as_json(:include => :ministere), data4: bloc, data5: type_service, data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant => {:include => :ministere}]), data7: indicateur_n.as_json, data8: service_executant_n }
    render json: response
  end

  def new
  end

  def create
  end

  def search 
  	indicateur_n = Indicateur.where('name = ?', params[:search_indicateur].to_s)
  	indicateur = Indicateur.all.order(created_at: :desc)
    ministere = Ministere.all.order(created_at: :desc)
    service_executant = ServiceExecutant.all.order(created_at: :desc)
    bloc = OrganisationFinanciere.all.order(created_at: :desc)
    type_service = TypeService.all.order(created_at: :desc)
    indicateur_execution = indicateur_n.first.indicateur_executions.all.order(created_at: :desc)
 
    response = {data1: indicateur.as_json(:include => :indicateur_executions), data2: ministere, data3: service_executant, data4: bloc, data5: type_service, data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant]), data7: indicateur_n.as_json }
    

  	render json: response
  end 

end
