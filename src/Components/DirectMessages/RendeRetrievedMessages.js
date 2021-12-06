import ReactDOM from "react-dom"
import {IoPersonCircleOutline} from "react-icons/io5"

function RenderRetrievedMessages(){

  const retrievedMessage = JSON.parse(localStorage.getItem("retrievedMessages"))

  let uid = Window.uid

  if(retrievedMessage && window.location.href === "http://localhost:3000/home/directmessages"){

    function Blog(props) {

      const sidebar = (
        <ul>
          {props.posts.map((post) =>

            post.data.map((post ) =>

            <li key={post.body} className="m-5" >
    
              <div id="messageFormat">
                <IoPersonCircleOutline id="personIcon"/>
                <div id="messageSender">{post.sender.email}</div>
                <div id="messageTimeSent">{(post.created_at)}</div>
                <div id="messageBody">{post.body}</div>
              </div>   
            </li>
            )
          )}
        </ul>
      );
      
      return (
        <div>
          {sidebar}
        </div>
      );
    }

    ReactDOM.render(
      <Blog posts={retrievedMessage} />,
      document.querySelector('.conversationArea')
    );

    ReactDOM.render(<div>{uid}</div>, document.querySelector(".channelName"))
  }

  if(window.location.href=== "http://localhost:3000/home/directmessages"){
    var newInterval = setInterval(() => {
              RenderRetrievedMessages()
          }, 5000);
          
          Window.timeValue = newInterval
  }else if(window.location.href !== "http://localhost:3000/home/directmessages"){}


if(window.onload){clearInterval( newInterval )}

}

export default RenderRetrievedMessages;

