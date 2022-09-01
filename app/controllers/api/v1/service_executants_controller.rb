class Api::V1::ServiceExecutantsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def show 
    service_executants = ServiceExecutant.all.order(code: :asc)
    response = {service_executants: service_executants.as_json(:include => [:ministere]),}
    render json: response
  end 

  def liste_se
    if !params[:service_executants].nil? && !params[:service_executants].blank?
      service_executants = ServiceExecutant.where("lower(libelle) like ?", "%#{params[:service_executants].downcase}%" ).order(code: :asc)
    else 
      service_executants = ServiceExecutant.all.order(code: :asc)
    end 
    response = {service_executants: service_executants.as_json(:include => [:ministere])}
    render json: response
  end 

  def index
    autoCompleteResults = ServiceExecutant.all.order(libelle: :asc)
    service_executant = ServiceExecutant.where(id: ServiceExecutant.first.id)

    if !autoCompleteResults.nil?
      csp = autoCompleteResults.where('type_structure = ?', 'CSP').count
      sfact = autoCompleteResults.where('type_structure = ?', 'SFACT').count
      cgf = autoCompleteResults.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 
    service_executants = ServiceExecutant.all.order(libelle: :asc)
    ministeres = Ministere.all.order(name: :asc)
    blocs = OrganisationFinanciere.all.order(name: :asc)
   
    regions = ServiceExecutant.all.order(region: :asc).pluck(:region).uniq!

    date = Indicateur.first.indicateur_executions.order(date: :asc).last.date #derniere date ajoutée

    #calcul moyenne de l'execution sur chaque se 
    
    se_color = Hash.new
    se_id = Performance.where(date: date).order(service_executant_id: :asc).pluck(:service_executant_id)
    valeur_id = Performance.where(date: date).order(service_executant_id: :asc).pluck(:valeur)
    #autoCompleteResults.each do |se|
    se_id.each_with_index do |se,i|
      #if se.performances.where(date: date).count > 0 
        #if se.performances.where(date: date).first.valeur >= 40 
        if valeur_id[i] >= 80 
          se_color[se] = "vert"
        #elsif se.performances.where(date: date).first.valeur >= 30
        elsif valeur_id[i] >= 60
          se_color[se] = "jaune"
        #elsif se.performances.where(date: date).first.valeur > 0
        elsif valeur_id[i] > 0 
          se_color[se] = "rouge"
        end
      #else
      #  se_color[se.id] = "noir"
      #end
    end 

    response = {autoCompleteResults: autoCompleteResults, service_executant: service_executant, csp: csp, sfact: sfact, cgf: cgf,service_executants: service_executants, ministeres: ministeres, blocs: blocs, se_color: se_color, date: date, regions: regions}
    render json: response
  end

  def new
  end

  def create
  end

  def search #page carto se
    if params[:search_service_executants].length != 0
      search_service_executants = params[:search_service_executants]
      autoCompleteResults = ServiceExecutant.where(id: search_service_executants)
    elsif params[:search_ministeres].length != 0 
      ministeres_id = params[:search_ministeres]
      autoCompleteResults = ServiceExecutant.where(ministere_id: ministeres_id)
    elsif params[:search_blocs].length != 0 
      blocs_id = params[:search_blocs]
      autoCompleteResults = ServiceExecutant.where(organisation_financiere_id: blocs_id)
    else
      autoCompleteResults = ServiceExecutant.all
    end 

    if params[:region] && params[:region].length > 0 && params[:region] != "ALL"
      autoCompleteResults = autoCompleteResults.where(region: params[:region])
      zoom = 7
      result = Geocoder.search(params[:region],params: {language: :fr})
      lat = result[0].geometry['location']['lat']
      lng = result[0].geometry['location']['lng']
    else
      zoom = 5
      lat = 48.52
      lng = 2.19
    end 

    if params[:effectif] && params[:effectif].length != 0
      if params[:effectif].to_i == 5
        autoCompleteResults = autoCompleteResults.where('effectif < ?', params[:effectif].to_i)
      elsif params[:effectif].to_i == 10
        autoCompleteResults = autoCompleteResults.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 5)
      elsif params[:effectif].to_i == 50
        autoCompleteResults = autoCompleteResults.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 10)
      elsif params[:effectif].to_i == 100
        autoCompleteResults = autoCompleteResults.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 50)
      elsif params[:effectif].to_i == 101
        autoCompleteResults = autoCompleteResults.where('effectif >= ?',100)
      end 
    end
    if params[:type_structure] && params[:type_structure].length != 0 && params[:type_structure] != "ALL"
      autoCompleteResults = autoCompleteResults.where('type_structure = ?', params[:type_structure].to_s)
    end 
    if !autoCompleteResults.nil?
      csp = autoCompleteResults.where('type_structure = ?', 'CSP').count
      sfact = autoCompleteResults.where('type_structure = ?', 'SFACT').count
      cgf = autoCompleteResults.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 

    se_color = Hash.new
   

    se_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).order(service_executant_id: :asc).pluck(:service_executant_id)
    valeur_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).order(service_executant_id: :asc).pluck(:valeur)
   
    se_id.each_with_index do |se,i|     
        if valeur_id[i] >= 80 
          se_color[se] = "vert"
     
        elsif valeur_id[i] >= 60 
          se_color[se] = "jaune"
      
        elsif valeur_id[i] > 0 
          se_color[se] = "rouge"
        end
    end 

    response = {autoCompleteResults: autoCompleteResults, csp: csp, sfact: sfact, cgf: cgf, effectif: params[:effectif], type_structure: params[:type_structure], search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], 
      search_blocs: params[:search_blocs], se_color: se_color, region: params[:region], zoom: zoom, lat: lat, lng: lng}
    render json: response
  end 

  def search_date #page carto se date
    if params[:search_service_executants] && params[:search_service_executants].length != 0
     autoCompleteResults = ServiceExecutant.where(id: params[:search_service_executants])     
    elsif params[:search_ministeres] && params[:search_ministeres].length != 0 
      autoCompleteResults = ServiceExecutant.where(ministere_id: params[:search_ministeres])
    elsif params[:search_blocs] && params[:search_blocs].length != 0 
      autoCompleteResults = ServiceExecutant.where(organisation_financiere_id: params[:search_blocs])
    else
      autoCompleteResults = ServiceExecutant.all
    end 

    if params[:region] && params[:region].length > 0 && params[:region] != "ALL"
      autoCompleteResults = autoCompleteResults.where(region: params[:region])
    end

    if params[:effectif] && params[:effectif].length != 0
      if params[:effectif].to_i == 5
        autoCompleteResults = autoCompleteResults.where('effectif < ?', params[:effectif].to_i)
      elsif params[:effectif].to_i == 10
        autoCompleteResults = autoCompleteResults.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 5)
      elsif params[:effectif].to_i == 50
        autoCompleteResults = autoCompleteResults.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 10)
      elsif params[:effectif].to_i == 100
        autoCompleteResults = autoCompleteResults.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 50)
        elsif params[:effectif].to_i == 101
        autoCompleteResults = autoCompleteResults.where('effectif >= ?',100)
      end
    end
    if params[:type_structure] && params[:type_structure].length != 0 && params[:type_structure] != "ALL"
      autoCompleteResults = autoCompleteResults.where('type_structure = ?', params[:type_structure].to_s)
    end 
    if !autoCompleteResults.nil?
      csp = autoCompleteResults.where('type_structure = ?', 'CSP').count
      sfact = autoCompleteResults.where('type_structure = ?', 'SFACT').count
      cgf = autoCompleteResults.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 
  
    se_color = Hash.new
   

    se_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).order(service_executant_id: :asc).pluck(:service_executant_id)
    valeur_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).order(service_executant_id: :asc).pluck(:valeur)
   
    se_id.each_with_index do |se,i|     
        if valeur_id[i] >= 80 
          se_color[se] = "vert"
     
        elsif valeur_id[i] >= 60 
          se_color[se] = "jaune"
      
        elsif valeur_id[i] > 0 
          se_color[se] = "rouge"
        else 
          se_color[se] = "noir"
        end

    end 
    #si se deja affiché 
    service_executant = ServiceExecutant.where(id: params[:service_executant][0]['id'])
    indicateur_executions = service_executant.first.indicateur_executions.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).order(indicateur_id: :asc)
    performance = service_executant.first.performances.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).first.valeur

    response = {autoCompleteResults: autoCompleteResults, csp: csp, sfact: sfact, cgf: cgf, effectif: params[:effectif], type_structure: params[:type_structure], search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], se_color: se_color,
    service_executant: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), performance: performance}
    render json: response
  end 


  def search_marker
    service_executant = ServiceExecutant.where(id: params[:q])

    indicateur_executions = service_executant.first.indicateur_executions.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).order(indicateur_id: :asc)
    performance = service_executant.first.performances.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).first.valeur
    response = {service_executant: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), performance: performance}
    render json: response
  end

  def se_empty
    @ids = IndicateurExecution.all.pluck(:service_executant_id).uniq!
    @se_empty = ServiceExecutant.where.not(id: @ids)
    @se_empty.destroy_all
    @se = ServiceExecutant.all
    @count = 0
    while ServiceExecutant.where(region: nil).count > 0 && @count < 30
      ServiceExecutant.where(region: nil).all.each do |se|
        #if se.region.nil?
        @adress = Geocoder.search([se.latitude, se.longitude], params: {language: :fr})
        if !@adress[0].nil?
          @adress[0].address_components.each do |element|
            if element["types"][0]=="administrative_area_level_1"
              se.region = element["long_name"]
              if element["long_name"] == "Windward Islands"
                se.region = 'Îles du Vent'
              elsif element["long_name"] == "Canton de Mamoudzou-3"
                se.region = "Mayotte"
              elsif element["long_name"] == "Saint-Denis"
                se.region = "La Réunion"
              end
              se.save 
            end
          end
        else
          #ceux qui nont pas de region
          se.region = nil         
          se.save
        end
        #end
      end
      @count +=1
    end 
    @arr = ["Arrondissement de Cayenne","Fort-de-France","Grande-Terre","Miquelon-Langlade","Wallis","Province Sud", "Îles du Vent"]
    @arr2= ["Guyane","Martinique","Guadeloupe","Saint-Pierre-et-Miquelon","Wallis-Et-Futuna","Nouvelle-Calédonie","Polynésie Française"]
    @arr.each_with_index do |arr,i|
      if ServiceExecutant.where(region: arr).count > 0
        ServiceExecutant.where(region: arr).each do |se|
          se.region = @arr2[i]
          se.save
        end
      end
    end

    @se_regions_vide = ServiceExecutant.where(region: nil).pluck(:libelle)
    @se_lat_vide = ServiceExecutant.where(latitude: nil).pluck(:libelle)

    @regions = ServiceExecutant.all.pluck(:region).uniq
    response = {se_empty: @se_empty, se: @se, regions: @regions, se_regions_vide: @se_regions_vide, se_lat_vide: @se_lat_vide}
    render json: response
  end 


  def import
    ServiceExecutant.import(params[:file])
    render json: { message: 'se ajouté!' }
  end 

  def import_ministere
    Ministere.import(params[:file])
    render json: { message: 'ministere modifié!' }
  end 
end
