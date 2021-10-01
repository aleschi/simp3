class Api::V1::IndicateursController < ApplicationController
  def index
  	indicateur = Indicateur.all.order(created_at: :desc)
    render json: indicateur
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

  private

  def indicateur_params
    params.require(:indicateur).permit(:name, :description)
  end

  def indicateur
    @indicateur ||= Indicateur.find(params[:id])
  end
end
