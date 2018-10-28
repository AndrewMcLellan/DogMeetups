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
    p = params
    if current_user
      meetup = Meetup.new
      meetup.set_meetup_fields(meetup, p)
      meetup.user_id = current_user.id
      if meetup.location != ""
        meetup.set_lat_lng(meetup)
      end
    else
      flash[:notice] = "You must be singed in to do this!"
    end

    if meetup.save
      render json: { error: "success" }
    else
      @errors = meetup.errors.full_messages
      render json: { error: @errors }
    end
  end

  def search
    @meetups = Meetup.find_by_sql("SELECT * FROM meetups WHERE location ILIKE '%#{params[:search_string]}%'")
    render json: @meetups
  end

end
