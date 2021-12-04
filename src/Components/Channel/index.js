import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Channel = (props) => {
  const {
    name,
    channelid,
    setrenderMessages,
    setcurrentChan,
    setOnChannel,
    OnChannel,
  } = props;
  const setInterval = Window.timeValue;
  const retrieveinterval = Window.intevalValue;

  return (
    <Link
      to={`/home/${channelid}`}
      key={channelid}
      style={{ textDecoration: "none" }}
    >
      <div
        className="ChatRoomItem hover:text-gray-600 hover:bg-gray-500 mr-4 rounded-md"
        onClick={(e) => {
          e.isDefaultPrevented();
          clearInterval(setInterval);
          clearInterval(retrieveinterval);
          setcurrentChan({ name: name, id: channelid });
          setrenderMessages(true);
          setOnChannel(!OnChannel);
        }}
      >
        <div style={sideContainer}>
          <div style={nameWrapperStyle}>
            <span style={nameStyle} className="text-white font-normal">
              {name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Channel;

const sideContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  paddingRight: "5px",
  paddingLeft: "5px",
};

const nameWrapperStyle = {
  width: "100%",
  display: "flex",
};
const nameStyle = {
  paddingLeft: "7px",
  flex: 1,
  textAlign: "left",
};
