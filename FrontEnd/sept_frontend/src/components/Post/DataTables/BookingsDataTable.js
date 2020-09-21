import React, { Component } from 'react'

class BookingDataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.booking_id}
                </td>
                <td>
                    {this.props.obj.bookingIdentifier}
                </td>
                <td>
                    {this.props.obj.business_id}
                </td>
                <td>
                    {this.props.obj.business_name}
                </td>
                <td>
                    {this.props.obj.booking_date}
                </td>
            </tr>
        )
    }
} export default BookingDataTable;
