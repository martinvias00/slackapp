import React, { useState, useEffect } from "react";
import request from "../util/request";
import { BsPeopleFill } from "react-icons/bs";
import { GrAdd, GrLinkPrevious } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import SearchUser from "./SearchUser";
import { useNavigate } from "react-router-dom";

const ChannelSettings = ({ users, currentChan, user, setChannelSettings }) => {
  const nav = useNavigate();
  const [channelMembers, setchannelMembers] = useState(null);
  const [useremail, setuseremail] = useState(null);
  const { name, id } = currentChan;
  const [isAddMember, setisAddMember] = useState(true);
  const [filtered, setfiltered] = useState(null);
  const [members, setmembers] = useState([]);
  const [SearchItem, setSearchItem] = useState("");
  const [renderChannel, setrenderChannel] = useState(false);
  useEffect(() => {
    if (SearchItem !== "") {
      const results = users.filter((user2) =>
        user2.email.toLowerCase().includes(SearchItem.toLowerCase())
      );
      const newlist = results.slice(0, 10);
      setfiltered(newlist);
    }
  }, [SearchItem]);
  useEffect(() => {
    renderChannelDetails();
  }, []);
  useEffect(() => {
    renderChannelDetails();
    return () => {
      setrenderChannel(false);
    };
  }, [renderChannel]);

  const requestMemberUid = (members) => {
    const userIds = members.map((item) => item.user_id);
    const userEmail = userIds.map((id) => {
      return users.filter((user) => {
        if (user.id === id) {
          return user.email;
        }
      })[0];
    });
    console.log(...userEmail);
    setuseremail(userEmail);
  };
  const renderChannelDetails = () => {
    const params = {
      ...user.headers,
      channelId: id,
    };
    request.channelDetails(params).then((res) => {
      console.log(res);
      requestMemberUid(res.data.data.channel_members);
      setchannelMembers(res.data.data.channel_members);
    });
  };

  const handleUpdate = () => {
    members.forEach((member) => {
      const params = {
        ...user.headers,
        channelId: currentChan.id,
        newMemberId: member.split("/")[1],
      };
      request
        .addMemberToChannel(params)
        .then((response) => {
          setrenderChannel(true);
          setmembers("");
        })
        .catch((error) => {
          console.log(error);
        });
    });
    console.log(members);
  };
  return (
    <div class=" w-full max-w-lg px-4 h-full md:h-auto">
      <button
        className="m-3"
        onClick={() => {
          setChannelSettings(false);
          nav("/home", { replace: true });
        }}
      >
        <GrLinkPrevious style={{ fontSize: "2em" }} />
      </button>

      <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
        <div class="flex flex-col items-center justify-center  p-5 border-b rounded-t dark:border-gray-600">
          <BsPeopleFill style={{ fontSize: "8em" }} />

          <h3 class="text-gray-900 text-xl font-medium dark:text-white">
            {name}
          </h3>
          <span>description here</span>
          <span>other button here</span>
        </div>
        {isAddMember ? (
          <div className="flex flex-col  m-2">
            <SearchUser
              name="members"
              type="text"
              setstate={setSearchItem}
              value={SearchItem}
              filtered={filtered}
              members={members}
              setmembers={setmembers}
            />

            <p class="text-gray-500 text-base leading-relaxed dark:text-gray-400">
              {useremail &&
                useremail.map((item) => {
                  return (
                    <div className="flex items-center">
                      <CgProfile />
                      <span>{item.email}</span>
                    </div>
                  );
                })}
            </p>
          </div>
        ) : (
          <div class="p-6 space-y-6">
            <p class="text-gray-500 text-base leading-relaxed dark:text-gray-400">
              <h1>{useremail && useremail.length} members</h1>
            </p>
            <div className="flex">
              <GrAdd
                style={{
                  fontSize: "1.5em",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                  color: "white",
                }}
              />
              <span className="mx-3">Add member</span>
            </div>

            <p class="text-gray-500 text-base leading-relaxed dark:text-gray-400">
              {useremail &&
                useremail.map((item) => {
                  return (
                    <div className="flex items-center">
                      <CgProfile />
                      <span>{item.email}</span>
                    </div>
                  );
                })}
            </p>
          </div>
        )}

        <div class="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            data-modal-toggle="default-modal"
            type="button"
            onClick={handleUpdate}
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelSettings;
