import React, { Component } from 'react'

class BusinessDataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.businessIdentifier}
                </td>
                <td>
                    {this.props.obj.business_name}
                </td>
            </tr>
        )
    }
} export default BusinessDataTable;
