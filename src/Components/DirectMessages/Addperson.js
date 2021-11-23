import * as React from "react";
import axios from "axios";
import ReactDOM from "react-dom"
import { useState, useEffect } from "react/cjs/react.development";
import RenderPerson from "./RenderPerson";

const URL = process.env.REACT_APP_URL;
const getheaders = JSON.parse(localStorage.getItem("client"))

if(getheaders){
    var {accessToken, client, expiry, uid} = getheaders;
}
const person=[]

function AddPerson({setOpenUserTab}){

    const [get, setGet]=useState([]);

    useEffect(()=>{

        const options = {
        method: 'GET',
        url: `${URL}/api/v1/users`,
        headers: {

            'access-token': `${accessToken}`,
            client: `${client}`,
            expiry: `${expiry}`,
            uid: `${uid}`
        }
      };
    
      axios.request(options).then(function (response) {
        setGet(response);
      }).catch(function (error) {
        console.error(error);
      });
        
    },[])
    

    const  UserTab=()=>{

        if(get.length === 0 ){
        
        }else{
            var array = get.data.data
            const found =  array.find(({ name }) => name === array.email)
            console.log("found",found)

            function Blog(props) {
                const sidebar = (
                  <ul>
                    {props.posts.map((post) =>
                    
                      <li key={post.id.id} className="li" style={listStyle} onClick={(e) => {
                        const id = e.target.key={post}
                        console.log("id", `'${id.post.uid}'`)
                        const persons = JSON.parse(localStorage.getItem("addedPerson"))
                        
                        console.log("persons", persons)

                        // const found = persons.find(uid => uid === `'${id.post.uid}'` )

                        // console.log("found", found)

                        // // if()

                        person.push(id.post)
                        console.log("person", person)
                        localStorage.setItem("addedPerson", JSON.stringify(person))
                        RenderPerson()
                        setOpenUserTab(false)
                        
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
              
              const posts = array
              
              ReactDOM.render(
                <Blog posts={posts} />,
                document.getElementById('trial')
              );

        }
        
    }

    const delayRender=()=>{
        setTimeout(() => {
            UserTab()
        }, 0);
    }
    delayRender()

    return(
        <div className="addPersonWrapper">
            <div className="directMessageTitle">All direct messages</div>
            <input  className="searchPerson" placeholder="To: @somebody or somebody@example.com"></input>
            <div id="trialWrapper">
                <div id="trial" ></div>
            </div>
        </div>
    )

}

export default AddPerson;

const listStyle = {
    listStyleType: "none",
    margin: "7px",
    fontSize: "1.5vw"

}