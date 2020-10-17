import React, { Component } from 'react'

const API = 'http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/business/'
// const API = "http://localhost:8080/api/business/"

class BookingDataTable extends Component {

    render() {
        fetch(API + this.props.obj.businessIdentifier, {
                    method: "GET",
                })
                .then((resp) => {
                    return resp.json()
                })
                .then((data) => {
                    this.props.obj.business_name = data.business_name
                    
                })

        return (
            <tr>
                <td>
                    {this.props.obj.bookingIdentifier}
                </td>
                
                <td>
                    {this.props.obj.business_name}
                </td>
                <td>
                    {this.props.obj.booking_Date}
                </td>
            </tr>
        )
    }
} export default BookingDataTable;
