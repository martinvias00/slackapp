import React from "react";
import { GiBalloons } from "react-icons/gi";

const Avatar = ({ setOnChangeAvatar, OnChangeAvatar }) => {
  const handleClose = () => {
    setOnChangeAvatar(!OnChangeAvatar);
  };
  return (
    <div className="w-full h-full overflow-x-hidden">
      <div
        class="z-10 fixed w-full  h-full bg-gray-900 opacity-50"
        onClick={handleClose}
      ></div>
      <div class=" z-20 pointer-events-none fixed w-full h-full top-0 left-0 m-10 flex items-start justify-center">
        <div class="modal-container bg-white w-11/12 md:max-w-md mxauto rounded">
          <div class="py-4 text-left px-6 z-50">
            <div class="flex justify-between items-center pb-3">
              <p class="text-2xl font-bold">Channel Avatar</p>
            </div>

            <p>Select an Avatar</p>
            <div className="flex flex-wrap">
              <GiBalloons style={{ color: "red", fontSize: "3em" }} />
            </div>
            <div class="flex justify-end pt-2">
              <button class="px-4  p-3 rounded-lg bg-gray-500 text-white hover:text-gray-400 mr-2">
                save
              </button>
              {/* <button
                className="modal-close px-4 bg-gray-500 p-3 rounded-lg text-white absolute z-40"
                onClick={() => {
                  console.log("test");
                }}
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
