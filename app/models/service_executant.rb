class ServiceExecutant < ApplicationRecord
  belongs_to :organisation_financiere
  belongs_to :ministere
#  belongs_to :type_service
  has_many :indicateur_executions, dependent: :destroy
  has_many :performances, dependent: :destroy

  geocoded_by :address
  reverse_geocoded_by :latitude, :longitude
  after_validation :geocode, :reverse_geocode

  require 'roo'
  require 'axlsx'

  def self.import(file)

    data = Roo::Spreadsheet.open(file.path)
    headers = data.row(1) # get header row
    #supprimer les SE qui ne sont plus dans la liste 
    code_se_avant = ServiceExecutant.all.pluck(:code)
    code_se_liste = data.column(1).to_a
    code_remove = code_se_avant - code_se_liste
    ServiceExecutant.where(code: code_remove).destroy_all
    data.each_with_index do |row, idx|
      next if idx == 0 # skip header
      row_data = Hash[[headers, row].transpose]
      
      OrganisationFinanciere.where('name = ?',row_data['ORGANISATION']).first_or_create do |orga|
        orga.name = row_data['ORGANISATION']
      end
      Ministere.where('name = ?',row_data['Ministere']).first_or_create do |ministere|
        ministere.name = row_data['Ministere']
      end

      if ServiceExecutant.where('code = ?',row_data['CODE SE ']).count > 0
        @service = ServiceExecutant.where('code = ?',row_data['CODE SE ']).first
      else
        @service = ServiceExecutant.new 
        
      end

      @service.code = row_data['CODE SE ']
      #if ServiceExecutant.where('libelle = ?',row_data['LIBELLE'].to_s).count > 1 #on evite les doublons de libelle
      #  @service.libelle = row_data['LIBELLE'].to_s + ' - ' + row_data['CODE SE '].to_s
      #else
        @service.libelle = row_data['LIBELLE'].to_s
      #end
      @service.organisation_financiere_id = OrganisationFinanciere.where('name = ?',row_data['ORGANISATION']).first.id
      @service.ministere_id = Ministere.where('name = ?',row_data['Ministere']).first.id
   
      
      @service.effectif = row_data['Effectif'].to_i

      if !@service.address.nil? && @service.address != row_data['CP'].to_s + ' ' + row_data['VILLE'].to_s + row_data['PAYS'].to_s 
        @service.address = row_data['CP'].to_s + ' ' + row_data['VILLE'].to_s + row_data['PAYS'].to_s 
      end 
      @service.type_structure = row_data['Type2']
      
      @service.region = row_data['TERRITOIRE']

      #if !@service.organisation_financiere_id.nil? && !@service.ministere_id.nil? 
        @service.save
      #end

     
    end
    #on relance si long ou lat nil 
    while ServiceExecutant.where(longitude: nil).count > 0
      ServiceExecutant.where(longitude: nil).each do |s|
        s.address = s.address
        s.save
       end 
    end
    

    
  end 

end