class Dog < ApplicationRecord
  validates :name, :breed, :age, :weight, presence: true

  belongs_to :user
end
