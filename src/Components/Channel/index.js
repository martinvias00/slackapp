import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Channel = (props) => {
<<<<<<< HEAD
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
=======
  const { name, channelid, setOnChannel, setrenderMessages, setcurrentChan } =
    props;
  const setInterval = Window.timeValue;
  const retrieveinterval = Window.intevalValue;

>>>>>>> 75ec2669ebc0e407a93ce12272d5bc650d079ed6
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
<<<<<<< HEAD
=======
          setOnChannel(true);
>>>>>>> 75ec2669ebc0e407a93ce12272d5bc650d079ed6
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
