import * as React from "react";

function LoginModal({setOpenLoginModal}){
    return(
        <div className="formWrapper">
            <form className="loginForm">
                <input></input>
                <input></input>
                <button id="submitForm" onClick={()=>{setOpenLoginModal(false)}}>Log-in</button>
            </form>
        </div>
    )
}

export default LoginModal