class Api::V1::MeetupsController < ApplicationController

  def index
    if current_user
      @user = current_user
      @user.set_user_location(@user.id)
      render json: Meetup.within(100, :origin => @user)
    else
      render json: Meetup.all
    end
  end

  def show
    render json: Meetup.find(params[:id])
  end

  def create
    if current_user
      meetup = Meetup.new
      meetup.user_id = current_user.id
      meetup.time = params[:time]
      meetup.date = params[:date]
      meetup.description = params[:description]
      meetup.location = params[:location]
      meetup.lat = meetup.geolocate['results'][0]['geometry']['location']['lat'].to_f
      meetup.lng = meetup.geolocate['results'][0]['geometry']['location']['lng'].to_f
      if meetup.save
        render json: { error: "success" }
      else
        @errors = meetup.errors.full_messages
        render json: { error: @errors }
      end
    else
      flash[:notice] = "You must be singed in to do this!"
    end
  end

  def search
    @meetups = Meetup.find_by_sql("SELECT * FROM meetups WHERE description ILIKE '%#{params[:search_string]}%'")
    # @meetups = Meetup.all
    render json: @meetups
  end

end
