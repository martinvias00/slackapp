import React from "react";

const MessageWrapper = ({ message, user }) => {
  let isUserItSelf = true;
  let side = "";
  if (message.sender.id === user.data.id) {
    side = "justify-end";
    isUserItSelf = false;
  } else {
    side = "justify-start";
  }
  return (
    <div className={` w-10/12 flex ${side}`}>
      <article
        className={` flex ${side} flex-col bg-gray-400 rounded-2xl m-4 p-2`}
      >
        {isUserItSelf && (
          <h1 className={` flex ${side}`}>
            {message.sender.uid.split("@")[0]}
          </h1>
        )}

        <span className={` flex ${side}`}>{message.body}</span>
        <span className={` flex ${side}`}>
          {message.created_at.split("T")[0]}
        </span>
        <span className={` flex ${side}`}>
          {message.created_at.split("T")[1].split(".")[0]}
        </span>
      </article>
    </div>
  );
};

export default MessageWrapper;
