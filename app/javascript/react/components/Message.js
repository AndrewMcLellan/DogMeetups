import React from 'react';
import { railsAssetImagePath } from '../constants/railsAssetImagePath';


const Message = ({ handle, message, icon }) => {
  return(
    <p>

      <strong> {handle}: </strong>
      {message}
    </p>
  );
};

export default Message;
