class MeetupSerializer < ActiveModel::Serializer

  attributes :id, :location, :user_id, :description, :creator_dogs, :creator, :lat, :lng



  def creator
    object.user.first_name
  end

  def creator_dogs
    object.user.dogs
  end
end
