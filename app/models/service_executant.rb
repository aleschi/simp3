class ServiceExecutant < ApplicationRecord
  belongs_to :organisation_financiere
  belongs_to :ministere
  belongs_to :type_service

  geocoded_by :adresse
  after_validation :geocode
end
