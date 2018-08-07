class Meetup < ApplicationRecord
  validates :date, :location, presence: true

  belongs_to :user
end
