class Api::V1::IndicateurExecutionsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def index2
  end 
  #page execution
  def index
  	indicateur_n = Indicateur.where('name = ?', Indicateur.first.name)
  	indicateur_name = Indicateur.all.order(name: :asc).first.name
  	indicateur = Indicateur.all.order(name: :asc)
    
    ministere = Ministere.all.order(name: :asc)
    service_executant = ServiceExecutant.all.order(libelle: :asc)
    
    dates = IndicateurExecution.order(date: :asc).pluck(:date).uniq
    data_inter_ministerielle = []
    dates.each do |date|
      data_inter_ministerielle << [date,(indicateur_n.first.indicateur_executions.where('date = ?', date).sum('valeur')/indicateur_n.first.indicateur_executions.where('date = ?', date).count.to_f).round(2)]
    end 

    autoCompleteList = ServiceExecutant.all.order(libelle: :asc)
    regions = ServiceExecutant.all.order(region: :asc).pluck(:region).uniq

    response = {data1: indicateur, data2: ministere, data3: service_executant, data7: indicateur_n.as_json, indicateur_name: indicateur_name, data_inter_ministerielle: data_inter_ministerielle, autoCompleteList: autoCompleteList, regions: regions }
    render json: response
  end

  #afficher le graphe suivi indicateur
  def search
    region = params[:region]
    indicateur_n = Indicateur.where('name = ?', params[:search_indicateur].to_s)
    indicateur_name = params[:search_indicateur].to_s

    if params[:region] != 'ALL'
      service_executants = ServiceExecutant.where(region: params[:region]).order(libelle: :asc)
      min_id = service_executants.pluck(:ministere_id).uniq
      ministeres = Ministere.where(id: min_id).order(name: :asc)
    else 
      ministeres = Ministere.all.order(name: :asc)
      service_executants = ServiceExecutant.all.order(libelle: :asc)
    end

    if params[:showSe] == true 
      autoCompleteList = service_executants
    else 
      autoCompleteList = ministeres
    end 

    if params[:search_service_executants].length != 0
      service_executant_n = autoCompleteList.where(id: params[:search_service_executants])
      search_service_executants = service_executant_n.pluck(:id).uniq
      search_ministeres = []
    elsif params[:search_ministeres].length != 0
      min = autoCompleteList.where(id: params[:search_ministeres]) #on prend ceux selectionnés + dans la région 
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
      indicateur_execution = indicateur_n.first.indicateur_executions.where(service_executant_id: se).order(date: :asc)
      @liste_se = indicateur_n.first.indicateur_executions.where(service_executant_id: se).pluck(:service_executant_id)
      @liste_se_empty_arr=search_service_executants - @liste_se
      @liste_se_empty = ServiceExecutant.where(id: @liste_se_empty_arr)
      service_executant_n = ServiceExecutant.where(id: @liste_se) #on met a jour la liste des services avec uniquement ceux qui présentent des valeurs
    else
      indicateur_execution = []
      @liste_se_empty_arr=[]
      @liste_se_empty = nil
    end
    dates = IndicateurExecution.order(date: :asc).pluck(:date).uniq
    data_inter_ministerielle = []
    dates.each do |date|
      data_inter_ministerielle << [date,(indicateur_n.first.indicateur_executions.where('date = ?', date).sum('valeur')/indicateur_n.first.indicateur_executions.where('date = ?', date).count.to_f).round(2)]
    end 

    response = {autoCompleteList: autoCompleteList, region: region, data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), data7: indicateur_n.as_json,search_indicateur: params[:search_indicateur].to_s, indicateur_name: indicateur_name,data8: service_executant_n, search_service_executants: search_service_executants, search_ministeres: search_ministeres,
    data_inter_ministerielle: data_inter_ministerielle, liste_se_empty_arr: @liste_se_empty_arr, liste_se_empty: @liste_se_empty, ministeres: ministeres, service_executants: service_executants}
    
    render json: response
    
  end 

  def sort_table
    if params[:search] == "date"
      if params[:date_croissant] == true #cetait deja croissant donc on change en desc
        indicateur_execution = IndicateurExecution.where(id: params[:indicateur_executions].map{|x| x[:id]}).order(date: :desc)
        date_croissant = false 
        valeur_croissant = params[:valeur_croissant]
      else
        indicateur_execution = IndicateurExecution.where(id: params[:indicateur_executions].map{|x| x[:id]}).order(date: :asc)
        date_croissant = true
        valeur_croissant = params[:valeur_croissant]
      end
    elsif params[:search] == "valeur"
      if params[:valeur_croissant] == true
        indicateur_execution = IndicateurExecution.where(id: params[:indicateur_executions].map{|x| x[:id]}).order(valeur: :desc)
        valeur_croissant = false 
        date_croissant = params[:date_croissant]
      else
        indicateur_execution = IndicateurExecution.where(id: params[:indicateur_executions].map{|x| x[:id]}).order(valeur: :asc)
        valeur_croissant = true 
        date_croissant = params[:date_croissant]
      end
    end
    response = { data6: indicateur_execution.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), date_croissant: date_croissant, valeur_croissant: valeur_croissant}
    render json: response
  end 

  #page carto indicateurs perf
  def carto_perf 

    indicateur_n = Indicateur.where('name = ?', Indicateur.all.order(name: :asc).first.name)
    indicateur_name = Indicateur.all.order(name: :asc).first.name

    indicateur = Indicateur.all.order(name: :asc)
    ministere = Ministere.all.order(name: :asc)
    service_executants = ServiceExecutant.all.order(libelle: :asc)
    bloc = OrganisationFinanciere.all.order(name: :asc)
    type_service = TypeService.all.order(name: :asc)
    service_executant = ServiceExecutant.where(id: ServiceExecutant.first.id)
    regions = ServiceExecutant.all.order(region: :asc).pluck(:region).uniq

    date = Indicateur.first.indicateur_executions.order(date: :asc).last.date #derniere date ajoutée

    indicateur_execution = indicateur_n.first.indicateur_executions.where('date = ?', date)
    @service_executant_n_arr = indicateur_execution.pluck(:service_executant_id).uniq
    
    service_executant_n = ServiceExecutant.all
    search_service_executants = service_executant_n.pluck(:id).uniq
    if !service_executant_n.nil?
      csp = service_executant_n.where('type_structure = ?', 'CSP').count
      sfact = service_executant_n.where('type_structure = ?', 'SFACT').count
      cgf = service_executant_n.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 
    se_color = Hash.new
    indicateur_execution.each do |ex|
      if !indicateur_n.first.seuil_1.nil? && !indicateur_n.first.seuil_2.nil? && !ex.valeur.nil?
        if ex.point == 3
          se_color[ex.service_executant_id] = "vert"
        elsif ex.point == 2
          se_color[ex.service_executant_id] = "jaune"
        elsif ex.point == 1
          se_color[ex.service_executant_id] = "rouge"
        else
          se_color[ex.service_executant_id] = "noir"
        end
      else
        se_color[ex.service_executant_id] = "noir"
      end
    end 

    autoCompleteList = ServiceExecutant.all.order(libelle: :asc)

    

    response = {data1: indicateur, data2: ministere, data3: service_executants,service_executant: service_executant, data4: bloc, data5: type_service, data6: indicateur_execution, data7: indicateur_n.as_json, data8: service_executant_n, indicateur_name: indicateur_name, csp: csp, sfact: sfact, cgf: cgf, search_service_executants: search_service_executants, se_color: se_color, autoCompleteList: autoCompleteList, date: date, regions: regions }
    render json: response
  end

  def search_carto #search carto perf 
    indicateur_n = Indicateur.where('name = ?', params[:search_indicateur].to_s)
    indicateur_name = params[:search_indicateur].to_s


    if params[:search_service_executants].length != 0
      search_service_executants = params[:search_service_executants]
      service_executant_n = ServiceExecutant.where(id: search_service_executants)
    elsif params[:search_ministeres].length != 0
      ministeres_id = params[:search_ministeres]
      service_executant_n = ServiceExecutant.where(ministere_id: ministeres_id)
      search_service_executants = service_executant_n.pluck(:id).uniq
    elsif params[:search_blocs].length != 0
      blocs_id = params[:search_blocs]
      service_executant_n = ServiceExecutant.where(organisation_financiere_id: blocs_id)
      search_service_executants = service_executant_n.pluck(:id).uniq
    elsif params[:search_type_services].length != 0
      types_id = params[:search_type_services]
      service_executant_n = ServiceExecutant.where(type_service_id: types_id)
      search_service_executants = service_executant_n.pluck(:id).uniq 
    else 
      search_service_executants = ServiceExecutant.all.pluck(:id)
      service_executant_n = ServiceExecutant.all
    end

    if params[:region] && params[:region].length > 0 && params[:region] != "ALL"
      service_executant_n = service_executant_n.where(region: params[:region])
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
        service_executant_n = service_executant_n.where('effectif < ?', params[:effectif].to_i)
      elsif params[:effectif].to_i == 10
        service_executant_n = service_executant_n.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 5)
      elsif params[:effectif].to_i == 50
        service_executant_n = service_executant_n.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 10)
      elsif params[:effectif].to_i == 100
        service_executant_n = service_executant_n.where('effectif < ? AND effectif >= ?', params[:effectif].to_i, 50)
      elsif params[:effectif].to_i == 101
        service_executant_n = service_executant_n.where('effectif >= ?',100)
      end
    end 
    if params[:type_structure] && params[:type_structure].length != 0 && params[:type_structure] != "ALL"
      service_executant_n = service_executant_n.where('type_structure = ?', params[:type_structure].to_s)
    end 
    if !service_executant_n.nil?
      csp = service_executant_n.where('type_structure = ?', 'CSP').count
      sfact = service_executant_n.where('type_structure = ?', 'SFACT').count
      cgf = service_executant_n.where('type_structure = ?', 'CGF').count
    else 
      csp = 0
      sfact = 0
      cgf = 0
    end 

    indicateur_execution = indicateur_n.first.indicateur_executions.where(service_executant_id: search_service_executants).where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month)
    se_color = Hash.new
    indicateur_execution.each do |ex|
      if !indicateur_n.first.seuil_1.nil? && !indicateur_n.first.seuil_2.nil? && !ex.valeur.nil?
        if ex.point == 3
          se_color[ex.service_executant_id] = "vert"
        elsif ex.point == 2
          se_color[ex.service_executant_id] = "jaune"
        elsif ex.point == 1
          se_color[ex.service_executant_id] = "rouge"
        else 
          se_color[ex.service_executant_id] = "noir"
        end
      else
        se_color[ex.service_executant_id] = "noir"
      end
    end 

    #si se deja affiché 
    service_executant = ServiceExecutant.where(id: params[:service_executant][0]['id'])
    indicateur_executions = service_executant.first.indicateur_executions.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).order(indicateur_id: :asc)
    performance = service_executant.first.performances.where('date >= ? AND date <= ?', params[:startDate].to_date.at_beginning_of_month, params[:startDate].to_date.at_end_of_month).first.valeur

    response = { data6: indicateur_execution, data7: indicateur_n.as_json, data8: service_executant_n, search_indicateur: params[:search_indicateur].to_s, indicateur_name: indicateur_name, search_service_executants: params[:search_service_executants], search_ministeres: params[:search_ministeres], search_blocs: params[:search_blocs], search_type_services: params[:search_type_services], effectif: params[:effectif], type_structure: params[:type_structure], csp: csp, sfact: sfact, cgf: cgf, se_color: se_color,
    service_executant: service_executant.as_json(:include => [:ministere, :type_service, :organisation_financiere]), indicateur_executions: indicateur_executions.as_json(:include => [:indicateur, :service_executant => {:include => [:ministere, :type_service, :organisation_financiere]}]), performance: performance, region: params[:region], zoom: zoom, lat: lat, lng: lng}
    render json: response
  end

  def new
    if IndicateurExecution.count > 0
      date_fichier = IndicateurExecution.order(date: :desc).first.date
    else
      date_fichier = false
    end
    response = {date_fichier: date_fichier}
    render json: response
  end

  def create
  end
  

  def import
    IndicateurExecution.import(params[:file])
    render json: { message: 'ind ajouté!' }
  end 


end
