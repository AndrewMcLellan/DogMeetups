import React from 'react';

const TextFieldWithSubmit = props => {
  return (
    <div className="row">
      <div className='columns input-group'>
        <input
          className='input-group-field'
          id="chat-field"
          name={props.name}
          onChange={props.handlerFunction}
          type='text'
          value={props.content}
          placeholder="Type Here to Start Chatting"/>
      </div>
      <div className='' id='chat-button'>
        <input id='chat-button' type='submit' className='button' value='Chat' />
      </div>
    </div>
  );
}

export default TextFieldWithSubmit;
