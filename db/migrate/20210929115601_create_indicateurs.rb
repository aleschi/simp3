class CreateIndicateurs < ActiveRecord::Migration[6.1]
  def change
    create_table :indicateurs do |t|
      t.string :name, null: false
      t.string :description

      t.timestamps
    end
  end
end
