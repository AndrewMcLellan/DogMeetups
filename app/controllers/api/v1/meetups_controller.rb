class Api::V1::MeetupsController < ApplicationController

  def index
    if current_user
      ip2 = request.remote_ip
      ip = Geokit::Geocoders::IpGeocoder.geocode(ip2)


      @user = current_user
      @user.set_user_location(@user.id)
      # render json: Meetup.within(2, :origin => @user)
      render json: Meetup.within(10, :origin => @user)

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
