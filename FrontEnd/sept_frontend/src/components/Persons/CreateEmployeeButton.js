import React from 'react'
import { Link } from "react-router-dom";

const CreateEmployeeButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/addEmployee"
        className="btn btn-lg btn-info">
        Create an Employee
        </Link>
    </React.Fragment>
  )
};
export default CreateEmployeeButton;