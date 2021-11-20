import * as React from "react";
import {AiOutlineThunderbolt} from "react-icons/ai"

function Message2() {
    return (
      <>
        <main > 
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
          <div className="enterMessageDiv">
            <input className="enterMessage"></input>
            <div><AiOutlineThunderbolt/></div>
          </div>
        </main>
        
      </>
    );
}

export default Message2
