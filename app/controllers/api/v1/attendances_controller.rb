class Api::V1::AttendancesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: Attendance.find(params[:id])
  end

  def create
    attendance = Attendance.new
    meetup = Meetup.find(params[:meetup_id])
    attendance.dog_id = current_user.dogs[0].id
    attendance.meetup_id = params[:meetup_id]
    # dog = Dog.find(current_user.dogs[0].id)
    count = 0
    last_id = nil
    meetup.attendances.each do |attendance|
      if attendance.dog_id == current_user.dogs[0].id
        count += 1
      end
      last_id = attendance.id
    end
    
    if meetup.user.dogs[0].id != current_user.dogs[0].id && count == 0
      if attendance.save
        render json: {attendee: current_user.dogs[0]}
        flash[:notice] = "Accepted Meetup"
      else
        render json: { attendee: current_user.dogs[0], errors: attendance.errors.full_messages }
      end
    else
      render json: { attendee: current_user.dogs[0], errors: attendance.errors.full_messages }
    end
  end


  private
  def attendance_params
    params.require(:attendance).permit(:dog_id, :meetup_id)
  end
end
