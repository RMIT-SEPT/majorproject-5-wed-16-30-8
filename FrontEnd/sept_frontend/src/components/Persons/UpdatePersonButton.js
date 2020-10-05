import React from 'react'
import { Link } from "react-router-dom";

const UpdatePersonButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/updateUser"
        className="btn btn-lg btn-info">
        Update info
        </Link>
    </React.Fragment>
  )
};
export default UpdatePersonButton;