import React from 'react'
import { Link } from "react-router-dom";

const CreateBusinessButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/addBusiness"
        className="btn btn-lg btn-info">
        Create a Business
        </Link>
    </React.Fragment>
  )
};
export default CreateBusinessButton;