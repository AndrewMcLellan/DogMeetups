class Api::V1::UsersController < ApplicationController

  def index
    render json: User.first
  end

  def show

    render json: User.find(params[:id])
  end

end
