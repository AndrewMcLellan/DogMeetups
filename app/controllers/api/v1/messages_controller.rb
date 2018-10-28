class Api::V1::MessagesController < ApplicationController
  def index
    id = params[:meetup_id].to_i
    meetup = Meetup.find(id)
    messages = meetup.chat.messages
    chat_messages = meetup.find_meetup_messages(messages)
    render json: chat_messages
  end
end
