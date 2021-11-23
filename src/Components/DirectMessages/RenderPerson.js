import ReactDOM from "react-dom"
import Messages from "../Messages"


const RenderPerson=()=>{
    const renderName=()=>{
        const uid = JSON.parse(localStorage.getItem("uid"))
        ReactDOM.render(<div>{uid}</div>, document.querySelector(".channelName"))
    }
    const persons = JSON.parse(localStorage.getItem("addedPerson"))
    function Blog(props) {
        const sidebar = (
          <ul className="ul">
            {props.posts.map((post) =>
            
              <li key={post.id.id} className="li" style={listStyle} onClick={(e) => {
                const id = e.target.key={post};

                localStorage.setItem("uid",JSON.stringify(id.post.uid));
                Messages()
                renderName()
              }}>
                 {post.email}
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

export default RenderPerson;

const listStyle = {
    listStyleType: "none",
    margin: "3px",
    fontSize: ".8vw"
}