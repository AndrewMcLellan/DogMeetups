class DogsController < ApplicationController
  def new
    @dog = Dog.new
    @age_collection = Dog::AGE_RANGES
    @boolean_collection = Dog::BOOLEAN_BEHAVIOR
  end

  def create
    @dog = Dog.new(dog_params)
    @dog.user = current_user
    if @dog.save
      binding.pry
      flash[:notice] = "Dog Added to Profile"
    else
      @errors = @dog.errors.full_messages
      render action: 'new'
    end
  end

  private
  def dog_params
    params.require(:dog).permit(:name, :breed, :age, :weight)
  end
end
