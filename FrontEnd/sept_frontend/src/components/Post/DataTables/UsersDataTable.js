import React, { Component } from 'react'

class UsersDataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.personIdentifier}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.desc}
                </td>
                <td>
                    {this.props.obj.start_date}
                </td>
                <td>
                    {this.props.obj.end_date}
                </td>
            </tr>
        )
    }
} export default UsersDataTable;
