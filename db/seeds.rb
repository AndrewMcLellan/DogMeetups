# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(first_name: "Andrew", last_name: "McLellan", password: "000000", email: "Email@email.email", address: " 1 Somestreet", city: "fakeston", state: "MA", zip: "09090")
User.create!(first_name: "Christine", last_name: "Comperchio ", password: "000000", email: "christine@email.email", address: " 5 Somestreet", city: "fakeston", state: "MA", zip: "09090")


Dog.create!(name: "Woody", breed: "Staffy", age: "4", weight: "40", good_with_puppies: true, user_id: 1)
Dog.create!(name: "Bobby", breed: "Sado", age: "9", weight: "30", good_with_puppies: true, user_id: 1)
Dog.create!(name: "Nikki", breed: "Lab", age: "10", weight: "60", good_with_puppies: true, user_id: 2)

Meetup.create!(location: "Boston", date: "9/19/18", description: "My dog has tons of energy and needs another dog to wear him out!", user_id: 1)
Meetup.create!(location: "Medford", date: "9/19/18", description: "My dog has tons of energy and needs another dog to wear him out!", user_id: 1)
Meetup.create!(location: "Cambridge", date: "9/19/18", description: "My dog has tons of energy and needs another dog to wear him out!", user_id: 1)
Meetup.create!(location: "Somerville", date: "9/19/18", description: "My dog has tons of energy and needs another dog to wear him out!", user_id: 1)
