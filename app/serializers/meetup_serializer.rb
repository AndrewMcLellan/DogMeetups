class MeetupSerializer < ActiveModel::Serializer

  attributes :id, :location, :user_id, :description, :creator_dogs, :creator, :lat, :lng, :date, :meetup_attendees



  def creator
    object.user.first_name
  end

  def creator_dogs
    object.user.dogs
  end

  def meetup_attendees

    dogNames = []
    object.attendances.each do |attendee|

      dog = Dog.find(attendee.dog_id)
      dogNames << dog
    end
    return dogNames
  end

end
