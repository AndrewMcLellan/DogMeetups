class MeetupsController < ApplicationController
  def new
    @meetup = Meetup.new
  end

  def show

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
