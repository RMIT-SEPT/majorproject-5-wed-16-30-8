import React from 'react'
import { Link } from "react-router-dom";

const PostEmployeesButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/allEmployees"
        className="btn btn-lg btn-info">
        Employees
        </Link>
    </React.Fragment>
  )
};
export default PostEmployeesButton;