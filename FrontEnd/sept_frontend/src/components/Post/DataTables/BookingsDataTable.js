import React, { Component } from 'react'

class BookingDataTable extends Component {

    render() {
        fetch('http://localhost:8080/api/business/' + this.props.obj.businessIdentifier, {
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
