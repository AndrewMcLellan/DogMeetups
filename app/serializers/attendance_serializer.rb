class AttendanceSerializer < ActiveModel::Serializer
  attributes :id, :meetup_id, :dog_id, :meetup

  def meetup
    object.meetup
  end
end
