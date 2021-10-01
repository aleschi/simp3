class CreateIndicateurExecutions < ActiveRecord::Migration[6.1]
  def change
    create_table :indicateur_executions do |t|
      t.date :date
      t.references :service_executant, null: false, foreign_key: true
      t.references :indicateur, null: false, foreign_key: true
      t.float :valeur

      t.timestamps
    end
  end
end
