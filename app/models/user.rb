class User < ApplicationRecord
  # Include default devise modules. Others available are:

  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :profile_photo, ProfilePhotoUploader

  attr_accessor :set_user_location

  has_many :dogs
  has_many :meetups
  has_many :owned_meetups, foreign_key: ":creator_id", class_name: "meetups"

  acts_as_mappable  :lat_column_name => :lat, presence: true, allow_blank: false
  acts_as_mappable  :lng_column_name => :lng, presence: true, allow_blank: false


  def geolocate_user
    key = ENV["GOOGLE_MAPS"]
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=#{address}#{city}#{state}&key=#{key}"
    url = URI.parse(url)
    str = url.read
    data = JSON.parse(str)
  end

  def set_user_location(id)
    user = User.find(id)
    user.lat = user.geolocate_user['results'][0]['geometry']['location']['lat'].to_f
    user.lng = user.geolocate_user['results'][0]['geometry']['location']['lng'].to_f
    user.save
  end



  def full_name
    "#{first_name} " +  "#{last_name}"
  end
end
