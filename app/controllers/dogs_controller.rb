class DogsController < ApplicationController
  def new
    @dog = Dog.new
    @age_collection = Dog::AGE_RANGES
    @boolean_collection = Dog::BOOLEAN_BEHAVIOR
  end

  def create
    @dog = Dog.new(dog_params)
    @dog.user_id = current_user.id
    if @dog.save
      flash[:notice] = "Dog Added to Profile"
      redirect_to new_dog_path
    else
      @errors = @dog.errors.full_messages
      render action: 'new'
    end
  end

  private
  def dog_params
    params.require(:dog).permit(:name, :breed, :age, :weight, :good_with_puppies)
  end
end
