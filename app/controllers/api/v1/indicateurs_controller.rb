class Api::V1::IndicateursController < ApplicationController
  protect_from_forgery with: :null_session
  def index
  	indicateur = Indicateur.all.order(name: :asc)
   
    response = {data1: indicateur}
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
