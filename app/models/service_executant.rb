class ServiceExecutant < ApplicationRecord
  belongs_to :organisation_financiere
  belongs_to :ministere
  belongs_to :type_service
  has_many :indicateur_executions

  geocoded_by :adresse
  after_validation :geocode

  require 'csv'
  
  	def self.import(file)
    	CSV.foreach(file.tempfile) do |row|
      		if !row[0].nil? && !row[0].empty? && row[0] != "Code Service Executant"
      			OrganisationFinanciere.where('name = ?',row[2]).first_or_create do |orga|
      				orga.name = row[2]
      			end
      			Ministere.where('name = ?',row[3]).first_or_create do |ministere|
      				ministere.name = row[3]
      			end
      			TypeService.where('name = ?',row[4]).first_or_create do |type|
      				type.name = row[4]
      			end 
      			@service = ServiceExecutant.new 
      			@service.code = row[0]
      			@service.libelle = row[1]
      			@service.organisation_financiere_id = OrganisationFinanciere.where('name = ?',row[2]).first.id
      			@service.ministere_id = Ministere.where('name = ?',row[3]).first.id
      			@service.type_service_id = TypeService.where('name = ?',row[4]).first.id
      			@service.adresse = row[5]+' '+row[6]
            @service.effectif = row[7]
            @service.type_structure = row[8]
      			if !@service.organisation_financiere_id.nil? && !@service.ministere_id.nil? && !@service.type_service_id.nil? 
	      			@service.save
	      		end
    		end
  		end
	end
end
