class CreatePerformances < ActiveRecord::Migration[6.1]
  def change
    create_table :performances do |t|
      t.date :date
      t.references :service_executant, null: false, foreign_key: true
      t.integer :valeur

      t.timestamps
    end
  end
end
