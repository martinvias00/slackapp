import ReactDOM from "react-dom"
import SendMessages from "./DirectMessages/SendMessages";
import RetrieveMessages from "./DirectMessages/RetrieveMessage";
import RenderRetrievedMessages from "./DirectMessages/RendeRetrievedMessages";
import { AiOutlineSend } from "react-icons/ai";

function Messages3() {
    ReactDOM.render (
        <main>
          <div className="details">
            <span className="channelName"></span>
          </div>
          <div className="conversationAreaWrapper">
            <div className="convoInsideWrapper">
              <div className="conversationArea"></div>
            </div>
          </div>
          <div className="absolute left-72 bottom-11 w-10/12 h-10 flex flex-row">
            <input
              className=" relative left-32 h-12 border-gray-400 border w-10/12"
              id="enterMessage"
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  SendMessages();
                  RetrieveMessages();
                  setTimeout(() => {
                    RenderRetrievedMessages();
                  }, 100);
                  e.target.value = "";
                }
              }}
            ></input>
            <div className=" text-4xl hover:text-green-700 cursor-pointer block m-auto w-14">
              <AiOutlineSend
                className="relative left-6 block m-auto "
                onClick={(e) => {
                  SendMessages();
                  RetrieveMessages();
                  setTimeout(() => {
                    RenderRetrievedMessages();
                  }, 100);
                  e.target.value = "";
                }}
              />
            </div>
          </div>
        </main>, document.getElementById("messages")
      );
}

export default Messages3 