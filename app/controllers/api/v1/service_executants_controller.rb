class Api::V1::ServiceExecutantsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def show #page liste des se
    service_executants = ServiceExecutant.all.order(code: :asc)
    response = {service_executants: service_executants.as_json(:include => [:ministere]),}
    render json: response
  end 

  def liste_se #page liste des se
    if !params[:service_executants].nil? && !params[:service_executants].blank?
      service_executants = ServiceExecutant.where("lower(libelle) like ?", "%#{params[:service_executants].downcase}%" ).order(code: :asc)
    else 
      service_executants = ServiceExecutant.all.order(code: :asc)
    end 
    response = {service_executants: service_executants.as_json(:include => [:ministere])}
    render json: response
  end 

  def index #page carto perf globale 
    autoCompleteResults = ServiceExecutant.all.order(libelle: :asc)

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
    se_id = Performance.where(date: date).where.not(valeur: nil).order(service_executant_id: :asc).pluck(:service_executant_id)
    valeur_id = Performance.where(date: date).where.not(valeur: nil).order(service_executant_id: :asc).pluck(:valeur)

    se_id.each_with_index do |se,i|
        if valeur_id[i] >= 75 
          se_color[se] = "vert"
        elsif valeur_id[i] >= 50
          se_color[se] = "jaune"
        elsif valeur_id[i] >= 0 
          se_color[se] = "rouge"
        end
    end 

    response = {autoCompleteResults: autoCompleteResults, csp: csp, sfact: sfact, cgf: cgf,service_executants: service_executants, ministeres: ministeres, 
      blocs: blocs, se_color: se_color, date: date, regions: regions}
    render json: response
  end

  

  def search #page carto se performance globale
    if params[:search_service_executants].length != 0
      autoCompleteResults = ServiceExecutant.where(id: params[:search_service_executants])
    elsif params[:search_ministeres].length != 0 
      autoCompleteResults = ServiceExecutant.where(ministere_id: params[:search_ministeres])
    elsif params[:search_blocs].length != 0 
      autoCompleteResults = ServiceExecutant.where(organisation_financiere_id: params[:search_blocs])
    else
      autoCompleteResults = ServiceExecutant.all
    end 

    if params[:region] && params[:region].length > 0 && params[:region] != "ALL" && params[:region] !="Administration centrale"
      autoCompleteResults = autoCompleteResults.where(region: params[:region])
      zoom = 7
      result = Geocoder.search(params[:region],params: {language: :fr})
      lat = result[0].geometry['location']['lat']
      lng = result[0].geometry['location']['lng']
    else
      if params[:region] && params[:region] =="Administration centrale"
        autoCompleteResults = autoCompleteResults.where(region: params[:region])
      end
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

    if params[:eye_legend] && params[:eye_legend] != 'all'
      if params[:eye_legend] == "rouge" 
        se_id_perf = Performance.where('date >= ? AND date <= ? AND valeur >= ? AND valeur < ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month,0,50).pluck(:service_executant_id)

      elsif params[:eye_legend] == "vert" 
        se_id_perf = Performance.where('date >= ? AND date <= ? AND valeur >= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month,75).pluck(:service_executant_id)

      elsif params[:eye_legend] == "jaune" 
        se_id_perf = Performance.where('date >= ? AND date <= ? AND valeur >= ? AND valeur < ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month,50,75).pluck(:service_executant_id)
      elsif params[:eye_legend] == "gris" 
        se_id_perf = autoCompleteResults.pluck(:id) - Performance.where('date >= ? AND date <= ? AND valeur >= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month,0).pluck(:service_executant_id)
      end 
      autoCompleteResults = autoCompleteResults.where(id: se_id_perf)
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
  
    se_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).where.not(valeur: nil).order(service_executant_id: :asc).pluck(:service_executant_id)
    valeur_id = Performance.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).where(service_executant_id: autoCompleteResults.pluck(:id)).where.not(valeur: nil).order(service_executant_id: :asc).pluck(:valeur)
   
    se_id.each_with_index do |se,i|     
        if valeur_id[i] >= 75 
          se_color[se] = "vert"
     
        elsif valeur_id[i] >= 50 
          se_color[se] = "jaune"
      
        elsif valeur_id[i] >= 0 
          se_color[se] = "rouge"
        end
    end 

    #si se deja affiché dans map result (pour le garder si changement de date)
    if params[:service_executant] && params[:service_executant][0]
      service_executant = ServiceExecutant.where(id: params[:service_executant][0]['id'])
      indicateur_executions = service_executant.first.indicateur_executions.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).order(indicateur_id: :asc)
      
      performance = Performance.where('date >= ? AND date <= ? AND service_executant_id = ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month, params[:service_executant][0]['id']).first.valeur

      response = {autoCompleteResults: autoCompleteResults, csp: csp, sfact: sfact, cgf: cgf, effectif: params[:effectif], type_structure: params[:type_structure], 
      search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], 
      se_color: se_color, region: params[:region], zoom: zoom, lat: lat, lng: lng, eye_legend: params[:eye_legend], 
      service_executant: service_executant.as_json(:include => [:ministere, :organisation_financiere]), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :organisation_financiere]}]), performance: performance}
    else
      response = {autoCompleteResults: autoCompleteResults, csp: csp, sfact: sfact, cgf: cgf, effectif: params[:effectif], type_structure: params[:type_structure], 
      search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], 
      se_color: se_color, region: params[:region], zoom: zoom, lat: lat, lng: lng, eye_legend: params[:eye_legend]}
    end
    render json: response
  end 

  def search_marker
    service_executant = ServiceExecutant.where(id: params[:q])
    indicateur_executions = service_executant.first.indicateur_executions.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).order(indicateur_id: :asc)
    performance = service_executant.first.performances.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).first.valeur
    response = {service_executant: service_executant.as_json(:include => [:ministere, :organisation_financiere]), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :organisation_financiere]}]), performance: performance}
    render json: response
  end

  def new
  end

  def create
  end

  #page suivi temporel perf globale

  def index_chart
    ministeres = Ministere.all.order(name: :asc)
    service_executants = ServiceExecutant.all.order(libelle: :asc)
    regions = ServiceExecutant.all.order(region: :asc).pluck(:region).uniq
    autoCompleteList = ServiceExecutant.all.order(libelle: :asc).select([:id, :libelle]).map {|e| {id: e.id, libelle: e.libelle} } 
    date_min = Performance.all.pluck(:date).uniq.min()
    response = { service_executants: service_executants, ministeres: ministeres, regions: regions, autoCompleteList: autoCompleteList, date_min: date_min}
    render json: response
  end

  def search_globale
    region = params[:region]
    if params[:region] != 'ALL'
      service_executants = ServiceExecutant.where(region: params[:region]).order(libelle: :asc)
      min_id = service_executants.pluck(:ministere_id).uniq
      ministeres = Ministere.where(id: min_id).order(name: :asc)
    else 
      ministeres = Ministere.all.order(name: :asc)
      service_executants = ServiceExecutant.all.order(libelle: :asc)
    end

    if params[:showSe] == true 
      autoCompleteList = service_executants.select([:id, :libelle]).map {|e| {id: e.id, libelle: e.libelle} }
    else 
      autoCompleteList = ministeres.select([:id, :name]).map {|e| {id: e.id, name: e.name} }
    end 

    if params[:search_service_executants].length != 0
      service_executant_n = service_executants.where(id: params[:search_service_executants])
      search_service_executants = service_executant_n.pluck(:id).uniq
      search_ministeres = []
    elsif params[:search_ministeres].length != 0
      min = ministeres.where(id: params[:search_ministeres]) #on prend ceux selectionnés + dans la région 
      search_ministeres = min.pluck(:id).uniq
      service_executant_n = service_executants.where(ministere_id: search_ministeres)
      search_service_executants = []
    else 
      service_executant_n = []
      search_service_executants = [] 
      search_ministeres = []  
    end

    if service_executant_n.length > 0
      se = service_executant_n.pluck(:id).uniq
      indicateur_execution = Performance.where(service_executant_id: se).where.not(valeur: nil).order(date: :asc)
      @liste_se = Performance.where(service_executant_id: se).where.not(valeur: nil).pluck(:service_executant_id)
      @liste_se_empty_arr=search_service_executants - @liste_se
      @liste_se_empty = ServiceExecutant.where(id: @liste_se_empty_arr)
      service_executant_n = ServiceExecutant.where(id: @liste_se) #on met a jour la liste des services avec uniquement ceux qui présentent des valeurs
    else
      indicateur_execution = []
      @liste_se_empty_arr=[]
      @liste_se_empty = nil
    end

    response = {autoCompleteList: autoCompleteList, region: region, data6: indicateur_execution.as_json(:include => [:service_executant => {:include => [:ministere, :organisation_financiere]}]),
    service_executant_n: service_executant_n, search_service_executants: search_service_executants, search_ministeres: search_ministeres,
    liste_se_empty_arr: @liste_se_empty_arr, liste_se_empty: @liste_se_empty, ministeres: ministeres, service_executants: service_executants }
    
    render json: response

  end 

  def sort_table
    if params[:search] == "date"
      if params[:date_croissant] == true #cetait deja croissant donc on change en desc
        indicateur_execution = Performance.where(id: params[:indicateur_executions].map{|x| x[:id]}).order(date: :desc)
        date_croissant = false 
        valeur_croissant = params[:valeur_croissant]
      else
        indicateur_execution = Performance.where(id: params[:indicateur_executions].map{|x| x[:id]}).order(date: :asc)
        date_croissant = true
        valeur_croissant = params[:valeur_croissant]
      end
    elsif params[:search] == "valeur"
      if params[:valeur_croissant] == true
        indicateur_execution = Performance.where(id: params[:indicateur_executions].map{|x| x[:id]}).order(valeur: :desc)
        valeur_croissant = false 
        date_croissant = params[:date_croissant]
      else
        indicateur_execution = Performance.where(id: params[:indicateur_executions].map{|x| x[:id]}).order(valeur: :asc)
        valeur_croissant = true 
        date_croissant = params[:date_croissant]
      end
    end
    response = { data6: indicateur_execution.as_json(:include => [ :service_executant => {:include => [:ministere, :organisation_financiere]}]), date_croissant: date_croissant, valeur_croissant: valeur_croissant}
    render json: response
  end 

  def se_empty
    @ids = IndicateurExecution.all.pluck(:service_executant_id).uniq!
    @se_empty = ServiceExecutant.where.not(id: @ids)
    @se = ServiceExecutant.order(code: :asc).all
    '''@count = 0
    while ServiceExecutant.where(region: nil).count > 0 && @count < 30
      ServiceExecutant.where(region: nil).all.each do |se|
        #if se.region.nil?
        @adress = Geocoder.search([se.latitude, se.longitude], params: {language: :fr})
        if !@adress[0].nil?
          @adress[0].address_components.each do |element|
            if element["types"][0]=="administrative_area_level_1"
              se.region = element["long_name"]
              if element["long_name"] == "Windward Islands"
                se.region = "Îles du Vent"
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
    end'''

    @se_regions_vide = ServiceExecutant.where(region: nil).pluck(:libelle)

    count = 0
    @lat = ServiceExecutant.all.order(id: :asc).pluck(:latitude)
    @long = ServiceExecutant.all.order(id: :asc).pluck(:longitude)
    @lat.each_with_index do |lat,i|
      if ServiceExecutant.where('latitude = ? AND longitude = ?', lat, @long[i]).count >= 2 #plusieurs avec meme adresse on les décalle
        ServiceExecutant.where('latitude = ? AND longitude = ?', lat, @long[i]).each_with_index do |service,i|
          service.address = Geocoder.search([service.latitude, service.longitude-0.005*i],params: {language: :fr}).first.address
          service.save
        end
        count += 1
      end
    end

    @regions = ServiceExecutant.all.pluck(:region).uniq
    response = {se_empty: @se_empty, se: @se, regions: @regions, se_regions_vide: @se_regions_vide, se_count_address: count}
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
