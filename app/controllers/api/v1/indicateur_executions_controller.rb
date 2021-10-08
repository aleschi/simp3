class Api::V1::IndicateurExecutionsController < ApplicationController
  def index

  	indicateur_n = Indicateur.where('name = ?', Indicateur.first.name)
  	indicateur_name = 'IA1'
  	indicateur = Indicateur.all.order(created_at: :desc)
    ministere = Ministere.all.order(created_at: :desc)
    service_executant = ServiceExecutant.all.order(created_at: :desc)

    bloc = OrganisationFinanciere.all.order(created_at: :desc)
    type_service = TypeService.all.order(created_at: :desc)
    indicateur_execution = indicateur_n.first.indicateur_executions.all.order(date: :asc)
 	@service_executant_n_arr = indicateur_execution.pluck(:service_executant_id).uniq
 	service_executant_n = ServiceExecutant.where(id: @service_executant_n_arr)

    response = {data1: indicateur.as_json(:include => :indicateur_executions), data2: ministere.as_json(:include => :service_executants), data3: service_executant.as_json(:include => :ministere), data4: bloc, data5: type_service, data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant => {:include => :ministere}]), data7: indicateur_n.as_json, data8: service_executant_n, indicateur_name: indicateur_name }
    render json: response
  end

  def new
  end

  def create
  end

  def search 
  	indicateur_n = Indicateur.where('name = ?', params[:search_indicateur].to_s)
  	indicateur_name = params[:search_indicateur].to_s

  	indicateur = Indicateur.all.order(created_at: :desc)
    ministere = Ministere.all.order(created_at: :desc)
    service_executant = ServiceExecutant.all.order(created_at: :desc)
    bloc = OrganisationFinanciere.all.order(created_at: :desc)
    type_service = TypeService.all.order(created_at: :desc)

    search_service_executants = params[:search_service_executants]
    service_executant_n = ServiceExecutant.where(id: search_service_executants)

    indicateur_execution = indicateur_n.first.indicateur_executions.where(service_executant_id: params[:search_service_executants]).order(date: :asc)
 
    response = {data1: indicateur.as_json(:include => :indicateur_executions), data2: ministere.as_json(:include => :service_executants), data3: service_executant.as_json(:include => :ministere), data4: bloc, data5: type_service, data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant => {:include => :ministere}]), data7: indicateur_n.as_json, data8: service_executant_n, search_indicateur: params[:search_indicateur].to_s, indicateur_name: indicateur_name, search_service_executants: params[:search_service_executants]}
    render json: response
  end 

end
