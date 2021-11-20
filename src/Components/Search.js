import * as React from "react";
import {AiOutlineClose} from "react-icons/ai"
import {FaSearch} from "react-icons/fa"

import "./components.css"

function Search({setOpenSearchModal}){
    return(
        <div className="searchModalWrapper">
            <div id="div">
                <AiOutlineClose className="closeIcon" onClick={()=>{ setOpenSearchModal(false)}}/>
                <FaSearch className="searchIcon"/>
                <input type="text" className="searchInput" placeholder="Search for files, facts, figures, and stats"></input>
            </div>
        </div>
    )
}

export default Search