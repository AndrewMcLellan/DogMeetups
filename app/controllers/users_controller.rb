class UsersController < ApplicationController

  def index

  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params(:id))
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    if @user.update
      flash[:notice] = "Profile Updated Successfully"
      redirect_to user_path(@user.id)
    else
      @errors = @user.errors.full_messages
      render action: 'edit'
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :address, :city, :state, :zip, :profile_photo)
  end

end
