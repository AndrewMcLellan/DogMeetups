class Meetup < ApplicationRecord
  validates :date, :location, :time, presence: true


  belongs_to :user
  has_many :attendances
  has_one :chat
  has_many :dogs, through: :attendances

  attr_accessor :set_meetup_messages

  acts_as_mappable  :lat_column_name => :lat, presence: true, allow_blank: false
  acts_as_mappable  :lng_column_name => :lng, presence: true, allow_blank: false

  def geolocate
    key = ENV["GOOGLE_MAPS"]
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=#{location}&key=#{key}"
    url = URI.parse(url)
    str = url.read
    data = JSON.parse(str)
  end

  def find_meetup_messages(array)
    chat_messages = []
    array.each do |message|
      current_message = {
        message: message.body,
        user: message.user,
        messageId: message.id
      }
      chat_messages << current_message
    end
    chat_messages
  end

end
