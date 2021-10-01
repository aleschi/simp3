class CreateMinisteres < ActiveRecord::Migration[6.1]
  def change
    create_table :ministeres do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
