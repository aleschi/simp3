class Ministere < ApplicationRecord
	has_many :service_executants, dependent: :destroy
end
