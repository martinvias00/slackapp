import ReactDOM from "react-dom";
import Messages3 from "../Messages3";
import RetrieveMessages from "./RetrieveMessage";
import RenderRetrievedMessages from "./RendeRetrievedMessages";
import { IoPersonCircleOutline } from "react-icons/io5";
import DirectMessages from "./DirectMessages";

const RenderPerson = () => {
  const renderName = () => {
    const uid = JSON.parse(localStorage.getItem("uid"));
    ReactDOM.render(<div>{uid}</div>, document.querySelector(".channelName"));
  };
  const persons = JSON.parse(localStorage.getItem("addedPerson"));

  if (!persons) {
  } else {
    function Blog(props) {
      const sidebar = (
        <ul>
          {props.posts.map((post) => (
            <li
              key={post.id}
              className="m-1 hover:bg-green-200 hover:text-gray-800"
              onClick={(e) => {
                const id = (e.target.key = { post });
                let setChannel = Window.setOnChannel;
                let openUserTab = Window.openUserTab;

                Window.uid = id.post.uid;
                Window.id = id.post.id;
                console.log("id", id);

                // setChannel(false)
                if (openUserTab) {
                  openUserTab(false);
                }

                renderName();
                RetrieveMessages();

                setTimeout(() => {
                  RenderRetrievedMessages();
                }, 100);
              }}
            >
              <div id="userIdDiv">
                <IoPersonCircleOutline id="personCircleOutline" />
                {post.uid}
              </div>
              <div>{}</div>
            </li>
          ))}
        </ul>
      );

      return <div>{sidebar}</div>;
    }

    const posts = persons;

    ReactDOM.render(<Blog posts={posts} />, document.getElementById("userTab"));
  }
};

export default RenderPerson;
