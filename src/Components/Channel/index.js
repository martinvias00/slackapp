import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
const Channel = (props) => {
  const { name, channelid } = props;
  const profilePic =
    "https://www.licany.org/wp-content/uploads/2018/10/male.jpg";
  return (
    <Link
      to={`/home/${channelid}`}
      key={channelid}
      style={{ textDecoration: "none" }}
    >
      <div style={container} className="ChatRoomItem bg-gray-500">
        {console.log(channelid, "insidechannel")}
        <img src={profilePic} alt="profile" style={profilePicStyle} />
        <span style={countStyle}>5</span>
        <div style={sideContainer}>
          <div style={nameWrapperStyle}>
            <span style={nameStyle}>{name}</span>
            <span style={textStyle}>9:22</span>
          </div>

          <span style={textStyle}>
            Lorem ipsum dolor sit amet, consectetur l...
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Channel;

const container = {
  display: "flex",
  width: "380px",
  height: "70px",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
  borderRadius: "10px",
};
const sideContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  paddingRight: "5px",
  paddingLeft: "5px",
};

const profilePicStyle = {
  paddingLeft: "3px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};
const countStyle = {
  width: "20px",
  height: "20px",
  backgroundColor: "#3777f0",
  color: "white",
  fontSize: 12,
  borderRadius: "50%",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px white solid",
  left: 45,
  marginBottom: "30px",
};
const nameWrapperStyle = {
  width: "100%",
  display: "flex",
};
const nameStyle = { paddingLeft: "7px", flex: 1, fontWeight: "bold" };
const textStyle = {
  color: "gray",
};
