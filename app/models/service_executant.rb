class ServiceExecutant < ApplicationRecord
  belongs_to :organisation_financiere
  belongs_to :ministere
  belongs_to :type_service
  has_many :indicateur_executions

  geocoded_by :address
  reverse_geocoded_by :latitude, :longitude
  after_validation :geocode, :reverse_geocode

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
            if ServiceExecutant.where('code = ?',row[0]).count > 0
              @service = ServiceExecutant.where('code = ?',row[0]).first
            else
              @service = ServiceExecutant.new 
            end
            @service.code = row[0]
            @service.libelle = row[1]
            @service.organisation_financiere_id = OrganisationFinanciere.where('name = ?',row[2]).first.id
            @service.ministere_id = Ministere.where('name = ?',row[3]).first.id
            @service.type_service_id = TypeService.where('name = ?',row[4]).first.id
            @service.address = row[5]+' '+row[6] + ' ' + row[9]
            @service.effectif = row[7]
            @service.type_structure = row[8]
            if !@service.organisation_financiere_id.nil? && !@service.ministere_id.nil? && !@service.type_service_id.nil? 
              @service.save
            end
        end
      end
      ServiceExecutant.order(created_at: :desc).all.each do |service|
        if ServiceExecutant.where('code = ?',service.code).count > 1
          service.destroy
        end 
      end
      @liste_adresse = ServiceExecutant.all.pluck(:address).uniq
      @liste_adresse.each do |adresse|
        if ServiceExecutant.where('address = ?', adresse).count > 1 #plusieurs avec meme adresse on les décalle
          ServiceExecutant.where('address = ?', adresse).each_with_index do |service,i|
            service.address = Geocoder.search([service.latitude, service.longitude+0.03*i]).first.address
            service.save
          end
        end
      end
  end
end