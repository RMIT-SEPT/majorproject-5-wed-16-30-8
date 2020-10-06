import React, { Component } from 'react'

class EmployeesDataTable extends Component {
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
                    {this.props.obj.businessIdentifier}
                </td>
            </tr>
        )
    }
} export default EmployeesDataTable;
