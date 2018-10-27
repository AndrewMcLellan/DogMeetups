class Api::V1::MessagesController < ApplicationController

  def index
    id = params[:meetup_id].to_i
    meetup = Meetup.find(id)
    chat_messages = []
    messages = meetup.chat.messages
    messages.each do |message|
      current_message = {message: message.body, user: message.user, messageId: message.id}
      chat_messages << current_message
    end
    render json: chat_messages
  end


end
