class AddLatLngToMeetups < ActiveRecord::Migration[5.2]
  def change
    add_column :meetups, :lat, :float, null: false
    add_column :meetups, :lng, :float, null: false
  end
end
