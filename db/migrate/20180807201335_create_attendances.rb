class CreateAttendances < ActiveRecord::Migration[5.2]
  def change
    create_table :attendances do |t|
      t.belongs_to :dog
      t.belongs_to :meetup
    end
  end
end
