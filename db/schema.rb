# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_02_141930) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "indicateur_executions", force: :cascade do |t|
    t.date "date"
    t.bigint "service_executant_id", null: false
    t.bigint "indicateur_id", null: false
    t.float "valeur"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "point"
    t.index ["indicateur_id"], name: "index_indicateur_executions_on_indicateur_id"
    t.index ["service_executant_id"], name: "index_indicateur_executions_on_service_executant_id"
  end

  create_table "indicateurs", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "type_indicateur"
    t.string "unite"
    t.string "calcul"
    t.string "remarque"
    t.float "seuil_1"
    t.float "seuil_2"
  end

  create_table "ministeres", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "organisation_financieres", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "performances", force: :cascade do |t|
    t.date "date"
    t.bigint "service_executant_id", null: false
    t.integer "valeur"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["service_executant_id"], name: "index_performances_on_service_executant_id"
  end

  create_table "service_executants", force: :cascade do |t|
    t.string "code"
    t.string "libelle"
    t.string "address"
    t.float "longitude"
    t.float "latitude"
    t.bigint "organisation_financiere_id", null: false
    t.bigint "ministere_id", null: false
    t.integer "effectif"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "type_structure"
    t.string "region"
    t.index ["ministere_id"], name: "index_service_executants_on_ministere_id"
    t.index ["organisation_financiere_id"], name: "index_service_executants_on_organisation_financiere_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "indicateur_executions", "indicateurs"
  add_foreign_key "indicateur_executions", "service_executants"
  add_foreign_key "performances", "service_executants"
  add_foreign_key "service_executants", "ministeres"
  add_foreign_key "service_executants", "organisation_financieres"
end
