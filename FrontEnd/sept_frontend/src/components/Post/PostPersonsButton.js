import React from 'react'
import {Link} from "react-router-dom";

const PostPersonsButton=() => {
    return (
        <React.Fragment>  
        <Link 
        to="/allPersons"
        className="btn btn-lg btn-info">
          People
        </Link> 
        </React.Fragment>
    )
};
export default PostPersonsButton;