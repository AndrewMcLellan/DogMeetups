class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :city, :state, :zip, :email, :user_dogs

  def user_dogs
    object.dogs
  end
end
