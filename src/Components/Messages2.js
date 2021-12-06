import { useState, useEffect } from "react";
import "../App.css";

import request from "../util/request";

import { BsFillChatDotsFill } from "react-icons/bs";
import MessageWrapper from "../Components/MessageWrapper";
import OptionModal from "../Components/OptionModal";
import ChannelSettings from "../Components/ChannelSettings";
import { AiOutlineSend } from "react-icons/ai";
const Messages2 = ({ currentChan, setrenderMessages, messages, users }) => {
  const [toggleOption, settoggleOption] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isChannelSettings, setisChannelSettings] = useState(false);

  const user = JSON.parse(localStorage.getItem("newUser"));
  const [messagetobesend, setmessagetobesend] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    const header = user.headers;
    const param = {
      ...header,
      data: { receiver_id: currentChan.id, body: messagetobesend },
    };

    request
      .messageToChannel(param)
      .then(function (response) {
        setrenderMessages(true);

        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        console.error(error);
      });
    setmessagetobesend("");
  };

  if (isChannelSettings) {
    return (
      <div className=" w-full flex justify-center items-center">
        <ChannelSettings
          setChannelSettings={setisChannelSettings}
          users={users}
          user={user}
          currentChan={currentChan}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div className=" flex w-full">
          <h1 className="w-full flex items-center justify-center font-semibold text-2xl">
            {currentChan && currentChan.name}pu
          </h1>
          <OptionModal
            setChannelSettings={setisChannelSettings}
            toggleOption={toggleOption}
            settoggleOption={settoggleOption}
          />
        </div>

        <div className=" flex flex-col place-items-center h-4/5 w-11/12 overflow-y-scroll top-0 m-4">
          {messages.length !== 0 ? (
            messages.map((message) => (
              <MessageWrapper message={message} user={user} />
            ))
          ) : (
            <article className="flex items-center flex-col m-10">
              <BsFillChatDotsFill style={{ color: "gray", fontSize: "8em" }} />

              <h1>Welcome to thisChat</h1>
              <p>See what's new in this update</p>
            </article>
          )}
        </div>
        <form
          onSubmit={handleSendMessage}
          className="flex m-4 justify-center align-middle"
        >
          <input
            class="block shadow border-2 rounded w-2/3 py-2 px-4 text-black-700 mb-3 mr-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 transition duration-500 ease-in-out"
            placeholder="Enter message here"
            onChange={({ target: { value } }) => {
              setmessagetobesend(value);
            }}
            value={messagetobesend}
            type="text"
          />
          <button type="submit m-4">
            <AiOutlineSend style={{ fontSize: "2em" }} />
          </button>
        </form>
      </div>
    );
  }
};

export default Messages2;
