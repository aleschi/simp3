class OrganisationFinanciere < ApplicationRecord
	has_many :service_executants, dependent: :destroy
end
