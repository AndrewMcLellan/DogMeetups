class Api::V1::MeetupsController < ApplicationController
  def index
    if current_user
      @user = User.find(current_user.id)
      @user.lat = @user.geolocate_user['results'][0]['geometry']['location']['lat'].to_f
      @user.lng = @user.geolocate_user['results'][0]['geometry']['location']['lng'].to_f
      @user.save
      render json: Meetup.within(50, :origin => @user)
    else
      render json: Meetup.all
    end
  end

  def show
    render json: Meetup.find(params[:id])
  end

  def search
    @meetups = Meetup.find_by_sql("SELECT * FROM meetups WHERE description ILIKE '%#{params[:search_string]}%'")
    # @meetups = Meetup.all
    render json: @meetups
  end

end
