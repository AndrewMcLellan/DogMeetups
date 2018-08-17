class Attendance < ApplicationRecord
  belongs_to :dog
  belongs_to :meetup

  def check_array(array)
      count = 0
      last-id = nil
      array.each do |item|
        id = item.id
        if last-id == id
          count += 1
        end
      end
      if count >= 1
        return false
      else
        return true
      end
  end

end
