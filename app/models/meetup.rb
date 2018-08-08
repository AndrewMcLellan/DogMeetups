
class Meetup < ApplicationRecord
  validates :date, :location, presence: true
  acts_as_mappable

  belongs_to :user
  has_many :attendances
  has_many :dogs, through: :attendances



end
