class AddFieldsToIndicateur < ActiveRecord::Migration[6.1]
  def change
    add_column :indicateurs, :type_indicateur, :string
    add_column :indicateurs, :unite, :string
    add_column :indicateurs, :calcul, :string
    add_column :indicateurs, :remarque, :string
  end
end
