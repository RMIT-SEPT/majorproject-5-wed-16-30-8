import React from 'react'
import { Link } from "react-router-dom";

const PostBookingsButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/allBookings"
        className="btn btn-lg btn-info">
        Bookings
        </Link>
    </React.Fragment>
  )
};
export default PostBookingsButton;