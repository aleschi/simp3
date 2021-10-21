class AddSeuilsToIndicateur < ActiveRecord::Migration[6.1]
  def change
    add_column :indicateurs, :seuil_1, :float
    add_column :indicateurs, :seuil_2, :float
  end
end
