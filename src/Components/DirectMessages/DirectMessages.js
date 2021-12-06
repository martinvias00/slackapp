import * as React from "react";
import ReactDOM from "react-dom";
import "./directmessages.css";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { BsPlusLg } from "react-icons/bs";

import { useState } from "react";
import AddPerson from "./Addperson";
import RenderPerson from "./RenderPerson";

import SendMessages from "./SendMessages";
import RetrieveMessages from "./RetrieveMessage";
import RenderRetrievedMessages from "./RendeRetrievedMessages";
import { AiOutlineSend } from "react-icons/ai";



function DirectMessages() {
  const [icons, setIcons] = useState(<VscTriangleRight />);
  const [userTabOpen, setUserTabOpen] = useState(false);
  let uid = Window.uid

  const icon2 = () => {
    setIcons(<VscTriangleDown />);
  };

  let renderAdd = () => {
    ReactDOM.render(<BsPlusLg />, document.getElementById("addPerson"));
  };


  var placeholder
  if(uid){ placeholder = `Message ${uid}`}else{  placeholder = " Start a conversation"}

  return (
    <div>
      <div
        className="flex w-full h-6 ml-3"
        onMouseEnter={() => {
          renderAdd();
        }}
      >
        <div id="messageIcon">{icons}</div>
        <div
          id="directMessage"
          onClick={() => {
            icon2();
            RenderPerson();
          }}
        >
          Direct Messages
        </div>
        <div
          id="addPerson"
          onClick={() => {
            setUserTabOpen(true);
          }}
        ></div>
      </div>

      <div id="userTab"></div>
      <main className="absolute left-96 top-9 w-10/12 h-5/6">
          <div className="details">
            <span className="channelName"></span>
          </div>
          <div className="conversationAreaWrapper">
            <div className="convoInsideWrapper">
              <div className="conversationArea"></div>
            </div>
          </div>
          <div className="absolute left-14 -bottom-14 w-10/12 h-10 flex flex-row">
            <input
              className="relative left-14 h-11 border-gray-400 border w-11/12 rounded-md shadow-md"
              id="enterMessage"
              placeholder= {placeholder}
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  SendMessages();
                  RetrieveMessages();
                  setTimeout(() => {
                    RenderRetrievedMessages();
                  }, 100);
                  e.target.value = "";
                }
              }}
            ></input>
            <div className="relative left-6 text-4xl hover:text-green-700 cursor-pointer block m-auto w-14">
              <AiOutlineSend
                className="relative left-6 block m-auto "
                onClick={(e) => {
                  SendMessages();
                  RetrieveMessages();
                  setTimeout(() => {
                    RenderRetrievedMessages();
                  }, 100);
                  e.target.value = "";
                }}
              />
            </div>
          </div>
        </main>
      {userTabOpen && <AddPerson setOpenUserTab={setUserTabOpen} />}
    </div>
  );
}

export default DirectMessages;
