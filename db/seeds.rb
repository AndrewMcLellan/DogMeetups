# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(first_name: "Andrew", last_name: "McLellan", password: "000000", email: "Email@email.email", address: " 1 Somestreet", city: "fakeston", state: "MA", zip: "09090")

Dog.create!(name: "Woody", breed: "Staffy", age: "4", weight: "40", good_with_puppies: true, user_id: 1)
