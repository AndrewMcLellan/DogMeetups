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
      redirect_to user_path(current_user.id)
    else
      @errors = @dog.errors.full_messages
      render action: 'new'
    end
  end

  def edit
    @dog = Dog.find(params[:id])
    @age_collection = Dog::AGE_RANGES
    @boolean_collection = Dog::BOOLEAN_BEHAVIOR
  end

  def update
    @dog = Dog.find(params[:id])
    @dog.update(dog_params)
    if @dog.update(dog_params)
      flash[:notice] = "Dog Profile Updated?"
      redirect_to user_path(current_user.id)
    else
      @errors = @dog.errors.full_messages
      redner action: 'edit'
    end
  end

  def destroy
    @dog = Dog.find(params[:id])
    @dog.destroy

    redirect_to dogs_path
  end

  private
  def dog_params
    params.require(:dog).permit(:name, :breed, :age, :weight, :good_with_puppies, :dog_photo)
  end
end
