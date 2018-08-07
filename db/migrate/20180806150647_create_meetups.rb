class CreateMeetups < ActiveRecord::Migration[5.2]
  def change
    create_table :meetups do |t|
      t.string :date, null: false
      t.string :location, null: false
      t.text :description, null: false
      
      t.belongs_to :user
    end
  end
end
