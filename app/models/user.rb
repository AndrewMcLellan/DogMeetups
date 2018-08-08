class User < ApplicationRecord
  # Include default devise modules. Others available are:

  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :profile_photo, ProfilePhotoUploader



  has_many :dogs
  has_many :meetups
  has_many :owned_meetups, foreign_key: ":creator_id", class_name: "meetups"
end
