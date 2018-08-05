class Dog < ApplicationRecord
  validates :name, :breed, :age, :weight, presence: true

  AGE_RANGES = [
    ["6 month- 1 Year"],
    ["1-2 Years"],
    ["2-5 Years"],
    ["5-8 Years"],
    ["8-10 Years"],
    ["Senior Dog"]
  ]

  BOOLEAN_BEHAVIOR = [
    [true, "Yes"],
    [false, "No"]
  ]

  belongs_to :user
end
