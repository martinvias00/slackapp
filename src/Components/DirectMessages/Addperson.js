import * as React from "react";
import axios from "axios";
import ReactDOM from "react-dom"
import { useState, useEffect } from "react/cjs/react.development";
import RenderPerson from "./RenderPerson";

const URL = process.env.REACT_APP_URL;
const getheaders = JSON.parse(localStorage.getItem("newUser"))

if(getheaders){
    var {token, client, expiry, uid, id} = getheaders;
}

const person=[]
const clientDetails = {
  id: id,
  provider: 'email',
  uid: uid,
  allow_password_change: false,
  name: null,
}

const newAcc = {
  id: 1303,
  provider: 'email',
  uid: 'romalliv@yahoo.com',
  allow_password_change: false,
  name: null,
}

person.push(clientDetails)
person.push(newAcc)
localStorage.setItem("addedPerson", JSON.stringify(person))

function AddPerson({setOpenUserTab}){

  const addedPerson = JSON.parse(localStorage.getItem("addedPerson"))
  const [get, setGet]=useState([]);
  const [searchTerm, setSearchTerm]=useState('')

  useEffect(()=>{

    const options = {
      method: 'GET',
      url: `${URL}/api/v1/users`,
      headers: {

          'access-token': `${token}`,
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
      const newArray =  array.map((x) => {return x.uid})
      function isFiltered(value) {
        return value = `${searchTerm}`
      }

        if(searchTerm===''){
          function Blog(props) {

            const sidebar = (

              <ul>
                {props.posts.map((post) =>
                
                  <li key={post.id} className="m-3 text-3xl relative left-1/3 transform -translate-x-1/4 text-left" onClick={(e) => {
                    const id = e.target.key={post}

                    if((addedPerson.map(uid=> uid.uid)).find(uid=> uid === `${id.post.uid}` )){
                      
                    }else{
                    person.push(id.post)
                    localStorage.setItem("addedPerson", JSON.stringify(person))
                  }

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

        }else if(newArray.filter(isFiltered)){
          
          function isFiltered(value) {
            return value >= `${searchTerm}`
          }
          let searchVal = newArray.filter(isFiltered)

          function render(){

            
            function NumberList(props) {
            const numbers = props.numbers;
            const listItems = numbers.map((number) =>
              <li key={props.numbers} className="m-3 text-3xl relative left-1/3 transform -translate-x-1/4 text-left" onClick={(e) => {
                        const id = e.target.key={number}
                        
                        const user = array.find( ({uid}) => uid === `${id.number}` )
                        if(addedPerson.find(({uid}) => uid === `${id.number}` )){
                          
                        }else{
                        person.push(user)
                        localStorage.setItem("addedPerson", JSON.stringify(person))
                      }
                      
                        RenderPerson()
                        setOpenUserTab(false)
                        
                      }}>{number}</li>
            );
            return (
              <ul>{listItems}</ul>
            );
          }
          
          const numbers = searchVal.sort();
          ReactDOM.render(
            <NumberList numbers={numbers} />,
            document.getElementById('trial')
          );}
          render()
        }
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
          <input  className="searchPerson" placeholder="To: @somebody or somebody@example.com" onChange={event => {setSearchTerm(event.target.value);}}></input>
          <div id="trialWrapper">
              <div id="trial" ></div>
          </div>
      </div>
  )

}

export default AddPerson;