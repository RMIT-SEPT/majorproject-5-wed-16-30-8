import React from 'react'
import { Link } from "react-router-dom";

const CreatePersonButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/addUser"
        className="btn btn-lg btn-info">
        Create a User
        </Link>
    </React.Fragment>
  )
};
export default CreatePersonButton;