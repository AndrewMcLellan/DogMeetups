class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:chat_id]}"
    # stream_from "chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    puts "++++++++++++++++++++++++++++++++++++++"
    puts data
    # Currently, we dont actually use this code that much. But you would have to set up these models if you want to record the conversations in your chat.
    chat = Chat.find_or_create_by(id: params[:chat_id])
    new_message = Message.create(body: data["message"], user: User.find(current_user.id))
    chat.messages << new_message
    if !chat.meetup_id
      chat.meetup_id = params[:meetup_id]
      chat.save
    end
    # chat_key = "#{Time.now.to_datetime.strftime('%Q')}-#{current_user.id}"
    chat_key = chat.id


    chat_json = {
      "chat_key": chat_key,
      "message": new_message.body,
      "messageId": new_message.id,
      "user":  current_user
    }


    ActionCable.server.broadcast("chat_#{params[:chat_id]}", chat_json)
  end
end
