import React, { Component } from 'react'

class BusinessDataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.business_id}
                </td>
                <td>
                    {this.props.obj.business_name}
                </td>
                <td>
                    {this.props.obj.businessIdentifier}
                </td>
            </tr>
        )
    }
} export default BusinessDataTable;
