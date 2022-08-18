class HomeController < ApplicationController
  before_action :authenticate_user!
  
  def index
  
  end

  def check_user_status

  	if user_signed_in? 
  		if current_user.email == "admin@finances.gouv.fr"
  			admin = true
  		else
  			admin = false
  		end
  	response = {isLoggedIn: true, isAdmin: admin}    
    render json: response
  	else
  	response = {isLoggedIn: false, isAdmin: false}    
    render json: response
  	end

  end 

  def mentions_legales
  end 
  
  def accessibilite
  end

  def donnees_personnelles
  end

  def plan 
  end 

  def error_404
    if params[:path] && params[:path] == "500"
      render 'error_500'
    end 
  end 

  def error_500
      
  end 


end
