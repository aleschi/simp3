class ServiceExecutant < ApplicationRecord
  belongs_to :organisation_financiere
  belongs_to :ministere
  belongs_to :type_service
  has_many :indicateur_executions

  geocoded_by :adresse
  after_validation :geocode
end
