import React from 'react'
import { Link } from "react-router-dom";

const PostUsersButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/allUsers"
        className="btn btn-lg btn-info">
        Users
        </Link>
    </React.Fragment>
  )
};
export default PostUsersButton;