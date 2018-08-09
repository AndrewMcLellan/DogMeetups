class Api::V1::AttendancesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def create
    attendance = Attendance.new
    attendance.dog_id = current_user.dogs[0].id
    attendance.meetup_id = params[:meetup_id]

    if attendance.save
      render json: {meetup_id: params[:meetup_id]}
      flash[:notice] = "Accepted Meetup"
    else
      render json: { meetup_id: nil, errors: attendance.errors.full_messages }
    end

  end


  private
  def attendance_params
    params.require(:attendance).permit(:dog_id, :meetup_id)
  end
end