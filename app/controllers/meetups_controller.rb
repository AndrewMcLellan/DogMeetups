class MeetupsController < ApplicationController
  def new
    @meetup = Meetup.new
  end

  def show

  end

  def create
    if current_user
      @meetup = Meetup.new(meetup_params)
      @meetup.user_id = current_user.id
      @meetup.lat = @meetup.geolocate['results'][0]['geometry']['location']['lat'].to_f
      @meetup.lng = @meetup.geolocate['results'][0]['geometry']['location']['lng'].to_f
      if @meetup.save
        flash[:notice] = "Meetup Saved Successfully"
        redirect_to meetups_path
      else
        @errors = @meetup.errors.full_messages
        render action: 'new'
      end
    else
      flash[:notice] = "You must be singed in to do this!"
    end
  end


  private
  def meetup_params
    params.require(:meetup).permit(:location, :date, :description)
  end

end
