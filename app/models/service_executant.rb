class ServiceExecutant < ApplicationRecord
  belongs_to :organisation_financiere
  belongs_to :ministere
  belongs_to :type_service
  has_many :indicateur_executions, dependent: :destroy
  has_many :performances, dependent: :destroy

  geocoded_by :address
  reverse_geocoded_by :latitude, :longitude
  after_validation :geocode, :reverse_geocode

  require 'roo'
  require 'axlsx'

  def self.import(file)
    #IndicateurExecution.destroy_all
    #OrganisationFinanciere.destroy_all
    #Ministere.destroy_all
    #TypeService.destroy_all
    #ServiceExecutant.destroy_all

    data = Roo::Spreadsheet.open(file.path)
    headers = data.row(1) # get header row
    data.each_with_index do |row, idx|
      next if idx == 0 # skip header
      row_data = Hash[[headers, row].transpose]
      
      OrganisationFinanciere.where('name = ?',row_data['Organisation']).first_or_create do |orga|
        orga.name = row_data['Organisation']
      end
      Ministere.where('name = ?',row_data['Ministere']).first_or_create do |ministere|
        ministere.name = row_data['Ministere']
      end
      TypeService.where('name = ?',row_data['Type de service']).first_or_create do |type|
        type.name = row_data['Type de service']
      end 
      if ServiceExecutant.where('code = ?',row_data['Code']).count > 0
        @service = ServiceExecutant.where('code = ?',row_data['Code']).first
      else
        @service = ServiceExecutant.new 
      end

      @service.code = row_data['Code']
      #if ServiceExecutant.where('libelle = ?',row_data['Libelle'].to_s).count > 1 #on evite les doublons de libelle
        @service.libelle = row_data['Libelle'].to_s + ' - ' + row_data['Code'].to_s
        @service.save
      #else
      #  @service.libelle = row_data['Libelle'].to_s

      #end
      @service.organisation_financiere_id = OrganisationFinanciere.where('name = ?',row_data['Organisation']).first.id
      @service.ministere_id = Ministere.where('name = ?',row_data['Ministere']).first.id
      @service.type_service_id = TypeService.where('name = ?',row_data['Type de service']).first.id
      @service.address = row_data['CP'].to_s + ' ' + row_data['Ville'].to_s + ' ' + row_data['Pays'].to_s
      @service.effectif = row_data['Effectif'].to_i
      @service.type_structure = row_data['Type2']
      if !@service.organisation_financiere_id.nil? && !@service.ministere_id.nil? && !@service.type_service_id.nil? 
        @service.save
      end

     
    end
    #on relance si long ou lat nil 
    while ServiceExecutant.where(longitude: nil).count > 0
      ServiceExecutant.where(longitude: nil).each do |s|
        s.address = s.address
        s.save
       end 
    end
    @liste_adresse = ServiceExecutant.all.pluck(:address).uniq
    @liste_adresse.each do |adresse|
      if ServiceExecutant.where('address = ?', adresse).count > 1 #plusieurs avec meme adresse on les décalle
        ServiceExecutant.where('address = ?', adresse).each_with_index do |service,i|
          service.address = Geocoder.search([service.latitude, service.longitude-0.005*i],params: {language: :fr}).first.address
          service.save
        end
      end
    end
  end 

end