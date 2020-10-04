import React, { Component } from 'react'

class BookingDataTable extends Component {

    getDateString(date) {
        var dateString =
        date.getUTCFullYear() + "-" +
        ("0" + (date.getUTCMonth()+1)).slice(-2) + "-" +
        ("0" + date.getUTCDate()).slice(-2) + "-" +
        ("0" + date.getUTCHours()).slice(-2) + "-" +
        ("0" + date.getUTCMinutes()).slice(-2) + "-" +
        ("0" + date.getUTCSeconds()).slice(-2);
        return dateString;
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.bookingIdentifier}
                </td>
                <td>
                    {this.props.obj.businessIdentifier}
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
