# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_27_183616) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.bigint "dog_id"
    t.bigint "meetup_id"
    t.index ["dog_id"], name: "index_attendances_on_dog_id"
    t.index ["meetup_id"], name: "index_attendances_on_meetup_id"
  end

  create_table "chats", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "meetup_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name", null: false
    t.string "breed", null: false
    t.string "age", null: false
    t.string "weight", null: false
    t.string "dog_photo", default: "https://www.petmd.com/sites/default/files/salmonella-infection-dogs.jpg", null: false
    t.string "energy"
    t.boolean "good_with_puppies"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_dogs_on_user_id"
  end

  create_table "meetups", force: :cascade do |t|
    t.string "date", null: false
    t.string "location", null: false
    t.text "description", null: false
    t.string "time", null: false
    t.bigint "user_id"
    t.float "lat", null: false
    t.float "lng", null: false
    t.index ["user_id"], name: "index_meetups_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "body", null: false
    t.bigint "user_id"
    t.bigint "chat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chat_id"], name: "index_messages_on_chat_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "lat"
    t.string "lng"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_photo"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
