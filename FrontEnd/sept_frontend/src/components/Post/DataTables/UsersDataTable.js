import React, { Component } from 'react'

class UsersDataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.personIdentifier}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
            </tr>
        )
    }
} export default UsersDataTable;
