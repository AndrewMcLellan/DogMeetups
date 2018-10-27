class Chat < ApplicationRecord
  has_many :messages
  belongs_to :meetup, optional: true
end
