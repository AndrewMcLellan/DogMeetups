class Dog < ApplicationRecord

  AGE_RANGES = [
    [0 , "6 month- 1 Year"],
    [1 , "1-2 Years"],
    [2 , "2-5 Years"],
    [3 , "5-8 Years"],
    [4 , "8-10 Years"],
    [5, "Senior Dog"]
  ]

  BOOLEAN_BEHAVIOR = [
    [true, "Yes"],
    [false, "No"]
  ]

  validates :name, :breed, :weight, presence: true
  # validates :age,
  #   presence: true,
  #   inclusion: { in: AGE_RANGES.map { |age_range| age_range[1] } }
  # belongs_to :user
end
