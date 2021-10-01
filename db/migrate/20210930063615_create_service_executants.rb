class CreateServiceExecutants < ActiveRecord::Migration[6.1]
  def change
    create_table :service_executants do |t|
      t.string :code
      t.string :libelle
      t.string :adresse
      t.float :longitude
      t.float :latitude
      t.references :organisation_financiere, null: false, foreign_key: true
      t.references :ministere, null: false, foreign_key: true
      t.references :type_service, null: false, foreign_key: true
      t.integer :effectif

      t.timestamps
    end
  end
end
