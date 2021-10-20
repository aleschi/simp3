class Api::V1::IndicateursController < ApplicationController
  protect_from_forgery with: :null_session
  def index
  	indicateur = Indicateur.all.order(created_at: :desc)
    ministere = Ministere.all.order(created_at: :desc)
    service_executant = ServiceExecutant.all.order(created_at: :desc)
    bloc = OrganisationFinanciere.all.order(created_at: :desc)
    type_service = TypeService.all.order(created_at: :desc)
    indicateur_execution = IndicateurExecution.all.order(created_at: :desc)
    response = {data1: indicateur.as_json(:include => :indicateur_executions), data2: ministere, data3: service_executant, data4: bloc, data5: type_service, data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant])}
    render json: response
  end

  def new
  end

  def create
  	indicateur = Indicateur.create!(indicateur_params)
    if indicateur
      render json: indicateur
    else
      render json: indicateur.errors
    end
  end

  def destroy
  	indicateur&.destroy #&. avoids nil errors when calling a method
    render json: { message: 'indicateur deleted!' }
  end

  def import
    Indicateur.import(params[:file])
    indicateur = Indicateur.all
    render json: indicateur
  end

  private

  def indicateur_params
    params.require(:indicateur).permit(:name, :description, :unite, :calcul, :remarque)
  end

  def indicateur
    @indicateur ||= Indicateur.find(params[:id])
  end
end
