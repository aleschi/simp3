class Api::V1::IndicateursController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session
  def index
    @indicateurs = Indicateur.all.order(name: :asc) 
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
