import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";
import SearchUser from "../SearchUser";
import request from "../../util/request";
import ErrorMessage from "../Alerts/ErrorMessage";
import { BsPeopleFill, BsFillCameraFill } from "react-icons/bs";
const AddChannel = ({ users, user, setdidRender, isAddChannel }) => {
  const [onNext, setonNext] = useState(false);
  const [filtered, setfiltered] = useState(null);
  const [members, setmembers] = useState([]);
  const [SearchItem, setSearchItem] = useState("");
  const [ChannelName, setChannelName] = useState("");
  const [isThereError, setisThereError] = useState("");
  useEffect(() => {
    if (isAddChannel) {
      setmembers([]);
    }
  }, [isAddChannel]);
  useEffect(() => {
    if (SearchItem !== "") {
      const results = users.filter((user) =>
        user.email.toLowerCase().includes(SearchItem.toLowerCase())
      );
      const newlist = results.slice(0, 10);
      setfiltered(newlist);
    }
  }, [SearchItem]);

  const handleNext = (e) => {
    e.preventDefault();
    setonNext(!onNext);
  };
  const handleCreateChannel = (e) => {
    e.preventDefault();
    if (ChannelName) {
      setisThereError("");
      const options = user.headers;
      let listOfmembers = [];
      if (members.length !== 0) {
        listOfmembers = members.map((item) => +item.split("/")[1]);
      }

      const params = {
        header: options,
        data: {
          name: ChannelName,
          user_ids: listOfmembers,
        },
      };

      request
        .createChannel(params)
        .then((response) => {
          const res = response.data;
          if (res.errors) {
            setisThereError(response.data.errors);
          } else {
            setChannelName("");
            setisThereError("");
            setonNext(false);
            setmembers([]);
            setdidRender(true);
          }
        })
        .catch((error) => console.log(error.response));
    } else {
      setisThereError("Invalid entry");
    }
  };
  const [OnChangeAvatar, setOnChangeAvatar] = useState(false);
  return (
    <div>
      {OnChangeAvatar && (
        <Avatar
          setOnChangeAvatar={setOnChangeAvatar}
          OnChangeAvatar={OnChangeAvatar}
        />
      )}
      {onNext ? (
        <div>
          <h1 className="m-2 font-medium text-white">Name this channel</h1>
          <div className="bg-white flex justify-center">
            <div className="rounded-full bg-gray-400 w-40 h-40 flex justify-center items-center shadow-md">
              <BsPeopleFill
                style={{ color: "gray", fontSize: "7em", flex: 1 }}
              />
            </div>
            <button
              onClick={() => {
                setOnChangeAvatar(!OnChangeAvatar);
              }}
              className="absolute top-44 left-48 rounded-full bg-white h-10 w-10 flex items-center shadow-md"
            >
              <BsFillCameraFill
                style={{ color: "gray", fontSize: "2em", flex: 1 }}
              />
            </button>
          </div>

          <form onSubmit={handleCreateChannel}>
            <input
              id="channelname"
              value={ChannelName}
              class="block pr-10 shadow border-2 rounded w-full py-2 px-4 text-black-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 transition duration-500 ease-in-out"
              onChange={({ target: { value } }) => {
                setChannelName(value);
              }}
              placeholder="Channel name (required)"
              type="text"
            />
            <button
              type="submit"
              className="text-white bg-gray-500 rounded-md cursor-pointer p-1"
            >
              Create
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col m-2">
          <SearchUser
            name="members"
            type="text"
            setstate={setSearchItem}
            value={SearchItem}
            filtered={filtered}
            members={members}
            setmembers={setmembers}
          />
          <span
            onClick={handleNext}
            className="rounded-t-sm w-20 bg-gray-400 self-end cursor-pointer z-10"
          >
            {members.length === 0 ? "Skip" : "Next"}
          </span>
        </div>
      )}
      {isThereError !== "" && (
        <ErrorMessage title="Error!" message={isThereError} />
      )}
    </div>
  );
};

export default AddChannel;
