class AddCreatorToMeetups < ActiveRecord::Migration[5.2]
  def change
    add_column :meetups, :creator_id, :integer, null: false
  end
end
