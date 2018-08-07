class Api::V1::MeetupsController < ApplicationController
  def index
    render json: Meetup.all
  end

  def show
    render json: Meetup.find(params[:id])
  end
end
