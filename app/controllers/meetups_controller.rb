class MeetupsController < ApplicationController
  include Geokit::Geocoders
  def new
    @meetup = Meetup.new
  end

  def show
    @meetup = Meetup.find(params[:id])
    geo_loc = MultiGeocoder.geocode(meetup_params[:location])
    binding.pry

  end

  def create
    @meetup = Meetup.new(meetup_params)
    @meetup.user_id = current_user.id
    if @meetup.save
      flash[:notice] = "Meetup Saved Successfully"
    else
      @errors = @meetup.errors.full_messages
      render action: 'new'
    end
  end


  private
  def meetup_params
    params.require(:meetup).permit(:location, :date, :latitude, :longitude)
  end

end
