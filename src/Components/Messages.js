import * as React from "react";
import SendMessages from "./DirectMessages/SendMessages";
import RetrieveMessages from "./DirectMessages/RetrieveMessage";
import RenderRetrievedMessages from "./DirectMessages/RendeRetrievedMessages";
import {AiOutlineSend} from "react-icons/ai"

function Messages() {
  const retrieve = JSON.parse(localStorage.getItem("retrievedMessages"))
  
  let profileStyle;
  let convoStyle;
  const profile1 = {
    position: "relative",
    height: "18.8vh",
    border: "1px solid rgb(168, 165, 165)"
  }
  
  const profile2 = {
    position: "relative",
    height: "70.8vh",
    border: "1px solid rgb(168, 165, 165)"
  }
  
  const convo1={
    position: "relative",
    top: "9.5%",
    width: "86.28vw",
    height: "59vh"
  }
  
  const convo2={
    position: "relative",
    top: "9.5%",
    width: "86.28vw",
    height: "5vh"
  }

  if(retrieve){
  
  if(retrieve[0].data.length===0){
    profileStyle=profile2
    convoStyle=convo2
    console.log("profile2")
  }else{ 
    console.log("profile1")
    profileStyle=profile1
    convoStyle=convo1}
  }
  
    return (
        <main >
          <div className="details">
            <span className="channelName"></span>
          </div>
          <div className="conversationAreaWrapper">
            <div className="convoInsideWrapper">
              <div style={profileStyle} /*id="profile"*/>PROFILE</div>
              <div style={convoStyle} className="conversationArea"></div>
            </div>
          </div>
          <div className="enterMessageDiv">
            <input className="enterMessage" onKeyUp={(e) => {if(e.keyCode === 13){SendMessages();
                RetrieveMessages(); setTimeout(() => {
                  RenderRetrievedMessages()
                }, 100); e.target.value=''}}}></input>
            <div>
              <AiOutlineSend onClick={(e)=>{
                SendMessages()
                RetrieveMessages()
                setTimeout(() => {
                  RenderRetrievedMessages()
                }, 100);
                e.target.value=''
                }}/>
            </div>
          </div>
        </main>
      
    );
}

export default Messages

