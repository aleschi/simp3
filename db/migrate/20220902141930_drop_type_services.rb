class DropTypeServices < ActiveRecord::Migration[6.1]
  def change
    remove_column :service_executants, :type_service_id
    drop_table :type_services
  end
end
