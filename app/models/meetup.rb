class Meetup < ApplicationRecord
  validates :date, :location, presence: true

  belongs_to :user
  belongs_to :creator, class_name: "User"
  has_many :attendances
  has_many :dogs, through: :attendances
end
