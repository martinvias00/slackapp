import { Link, useNavigate } from "react-router-dom";
import request from "../util/request";
const OptionModal = ({
  setChannelSettings,
  isChannelSettings,
  toggleOption,
  settoggleOption,
}) => {
  const navigate = useNavigate();
  const setInterval = Window.timeValue;
  const retrieveinterval = Window.intevalValue;
  return (
    <div class="relative inline-block text-left z-20">
      <div>
        <button
          type="button"
          class=" z-20 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            settoggleOption(!toggleOption);
          }}
        >
          Options
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {toggleOption && (
        <div
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <Link
            to={`/home/settings`}
            style={{ textDecoration: "none" }}
            className="m-2"
            onClick={() => {
              setChannelSettings(true);
            }}
          >
            Channel settings
          </Link>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <button
              type="submit"
              class="text-gray-700 block w-full text-left px-4 py-2 text-sm m-2"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
              onClick={(e) => {
                e.preventDefault();
                clearInterval(setInterval);
                clearInterval(retrieveinterval);
                request.rmLocalClient();
                navigate("/", { replace: true });
              }}
            >
              Sign out
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OptionModal;
