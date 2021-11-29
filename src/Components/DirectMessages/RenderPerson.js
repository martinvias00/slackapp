import ReactDOM from "react-dom"
import Messages from "../Messages"
import RetrieveMessages from "./RetrieveMessage"
import RenderRetrievedMessages from "./RendeRetrievedMessages"
import {IoPersonCircleOutline} from "react-icons/io5"



const RenderPerson=()=>{
    const renderName=()=>{
        const uid = JSON.parse(localStorage.getItem("uid"))
        ReactDOM.render(<div>{uid}</div>, document.querySelector(".channelName"))
    }
    const persons = JSON.parse(localStorage.getItem("addedPerson"))
    console.log(persons)

    if(!persons){}else{
    function Blog(props) {
        const sidebar = (
          <ul className="ul">
            {props.posts.map((post) =>
            
              <li key={post.id} className="li" style={listStyle} onClick={(e) => {
                const id = e.target.key={post};
                Window.uid = id.post.uid
                Window.id = id.post.id
  
                Messages()
                renderName()
                RetrieveMessages()

                setTimeout(() => {
                  RenderRetrievedMessages()
                }, 100);
              }}>
                <div id="userIdDiv">
                  <IoPersonCircleOutline id="personCircleOutline"/> 
                  { post.uid}
                </div>
                <div>
                  {}
                </div>
              </li>
            )}
          </ul>
        );
        
        return (
          <div>
            {sidebar}
          </div>
        );
      }
      
      const posts = persons
      
      ReactDOM.render(
        <Blog posts={posts} />,
        document.getElementById('userTab')
      );
    }
}

export default RenderPerson;

const listStyle = {
    listStyleType: "none",
    margin: "3px",
    fontSize: ".8vw"
}