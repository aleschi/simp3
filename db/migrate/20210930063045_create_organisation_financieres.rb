class CreateOrganisationFinancieres < ActiveRecord::Migration[6.1]
  def change
    create_table :organisation_financieres do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
