class FixAdress < ActiveRecord::Migration[6.1]
  def change
  	rename_column :service_executants, :adresse, :address
  end
end
