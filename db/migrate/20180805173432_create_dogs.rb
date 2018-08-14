class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name, null: false
      t.string :breed, null: false
      t.string :age, null: false
      t.string :weight, null: false
      t.string :dog_photo, null: false, default: "https://www.petmd.com/sites/default/files/salmonella-infection-dogs.jpg"
      t.string :energy
      t.boolean :good_with_puppies

      t.belongs_to :user
    end
  end
end
