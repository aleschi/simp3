class IndicateurExecution < ApplicationRecord
  belongs_to :service_executant
  belongs_to :indicateur
end
