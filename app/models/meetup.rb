class Meetup < ApplicationRecord
  validates :date, :location, presence: true


  belongs_to :user
  has_many :attendances
  has_many :dogs, through: :attendances


  acts_as_mappable  :lat_column_name => :lat, presence: true, allow_blank: false
  acts_as_mappable  :lng_column_name => :lng, presence: true, allow_blank: false

  def geolocate
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=#{location}&key=AIzaSyAHEwmfEgNVYI7-_F2MkyYFHg0ybzcyxxU"
    url = URI.parse(url)
    str = url.read
    data = JSON.parse(str)
  end
end
