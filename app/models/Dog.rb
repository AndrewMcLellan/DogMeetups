class Dog < ApplicationRecord

  AGE_RANGES = [
    ["6 month- 1 Year" , "6 month- 1 Year"],
    ["1-2 Years" , "1-2 Years"],
    ["2-5 Years" , "2-5 Years"],
    ["5-8 Years" , "5-8 Years"],
    ["8-10 Years" , "8-10 Years"],
    ["Senior Dog", "Senior Dog"]
  ]

  BOOLEAN_BEHAVIOR = [
    [true, "Yes"],
    [false, "No"]
  ]

  validates :name, :breed, :weight, presence: true
  # validates :age,
  #   presence: true,
  #   inclusion: { in: AGE_RANGES.map { |age_range| age_range[1] } }
  belongs_to :user
  has_many :attendances
  has_many :meetups, through: :attendances
end
