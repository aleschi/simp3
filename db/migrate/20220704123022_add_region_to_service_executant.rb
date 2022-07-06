class AddRegionToServiceExecutant < ActiveRecord::Migration[6.1]
  def change
    add_column :service_executants, :region, :string
  end
end
