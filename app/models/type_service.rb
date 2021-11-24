class TypeService < ApplicationRecord
	has_many :service_executants, dependent: :destroy
end
