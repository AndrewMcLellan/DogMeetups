class AddMeetupToChats < ActiveRecord::Migration[5.2]
  def change
    add_column :chats, :meetup_id, :integer
  end
end
