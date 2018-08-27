class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :city, :state, :zip, :email, :profile_photo, :user_dogs, :user_meetups, :user_attendances

  def user_dogs
    object.dogs
  end

  def user_meetups
    object.meetups
  end

  def user_attendances
    all_attendances = []
    dog_attendances = []


    object.dogs.each do |dog|
      attended_meetup = []
      addentance = []
      object = {}
      attendance = dog.attendances
      if dog.attendances.length > 0
        dog.attendances.each do |attendance|
          attended_meetup = attendance.meetup
          object = {:attendance => attendance, :attended_meetup => attended_meetup, :dog_name => dog.name}
          dog_attendances << object
        end
      end
    end
    all_attendances << dog_attendances
    return dog_attendances
  end






end
