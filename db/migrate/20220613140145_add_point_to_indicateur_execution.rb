class AddPointToIndicateurExecution < ActiveRecord::Migration[6.1]
  def change
    add_column :indicateur_executions, :point, :integer
  end
end
