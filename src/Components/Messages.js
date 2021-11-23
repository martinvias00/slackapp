import * as React from "react";

function Messages() {
  const uid = (localStorage.getItem("uid"))
    return (
    
        <main >
          <div className="details">
            <span className="channelName">{uid}</span>
          </div>
          <div className="conversationArea">
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
          </div>
          <div className="enterMessageDiv">
            <input className="enterMessage"></input>
            <div></div>
          </div>
        </main>
      
    );
}

export default Messages