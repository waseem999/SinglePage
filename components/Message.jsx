import React from 'react';

const Message = (props) => (
      <div>
          <p>Well, Hello there</p>
          <h2>This is where your</h2>
          <h2>message should go.</h2>
          <button className="buttonstyle" onClick={props.handleDownload}>DOWNLOAD NOW</button>
      </div>
);

export default Message;