class AddTypeStructureToServiceExecutant < ActiveRecord::Migration[6.1]
  def change
    add_column :service_executants, :type_structure, :string
  end
end
