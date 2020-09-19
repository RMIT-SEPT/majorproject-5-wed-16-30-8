import React from 'react'
import {Link} from "react-router-dom";

const PostBusinessesButton=() => {
    return (
        <React.Fragment>  
        <Link 
        to="/allBusinesses"
        className="btn btn-lg btn-info">
          Businesses
        </Link> 
        </React.Fragment>
    )
};
export default PostBusinessesButton;