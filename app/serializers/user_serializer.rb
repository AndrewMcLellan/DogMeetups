class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :city, :state, :zip, :email, :user_dogs, :user_meetups

  def user_dogs
    object.dogs
  end

  def user_meetups
    object.meetups
  end


end
