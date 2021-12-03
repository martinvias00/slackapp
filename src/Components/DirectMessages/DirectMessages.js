import * as React from "react";
import ReactDOM from "react-dom";
import "./directmessages.css";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { BsPlusLg } from "react-icons/bs";

import { useState, useEffect } from "react";
import AddPerson from "./Addperson";
import RenderPerson from "./RenderPerson";

function DirectMessages({ setisInChannel }) {
  const [icons, setIcons] = useState(<VscTriangleRight />);
  const [userTabOpen, setUserTabOpen] = useState(false);
  const setInterval = Window.timeValue;
  const retrieveinterval = Window.intevalValue;

  useEffect(() => {
    if (userTabOpen === true) {
      setisInChannel(false);
    } else {
      clearInterval(setInterval);
      clearInterval(retrieveinterval);
    }
  }, [userTabOpen]);
  const icon2 = () => {
    setIcons(<VscTriangleDown />);
  };

  let renderAdd = () => {
    ReactDOM.render(<BsPlusLg />, document.getElementById("addPerson"));
  };

  let noRender = () => {
    ReactDOM.render(<div></div>, document.getElementById("addPerson"));
  };

  return (
    <div>
      <div
        className="flex w-full h-6 ml-3"
        onMouseEnter={() => {
          renderAdd();
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            noRender();
          }, 1000);
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
      {userTabOpen && <AddPerson setOpenUserTab={setUserTabOpen} />}
    </div>
  );
}

export default DirectMessages;
