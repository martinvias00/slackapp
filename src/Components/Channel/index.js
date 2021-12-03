import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Channel = (props) => {
  const { name, channelid, setisInChannel, setrenderMessages, setcurrentChan } =
    props;

  return (
    <Link
      to={`/home/${channelid}`}
      key={channelid}
      style={{ textDecoration: "none" }}
    >
      <div
        className="ChatRoomItem"
        onClick={(e) => {
          e.isDefaultPrevented();
          setisInChannel(true);
          setcurrentChan({ name: name, id: channelid });
          setrenderMessages(true);
        }}
      >
        <div style={sideContainer}>
          <div style={nameWrapperStyle}>
            <span style={nameStyle}>{name}</span>
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
  fontWeight: "bold",
  textAlign: "left",
};
