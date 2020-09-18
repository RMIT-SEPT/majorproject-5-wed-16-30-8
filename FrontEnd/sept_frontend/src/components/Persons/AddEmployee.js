import React, { Component } from 'react'

class AddEmployee extends Component {
    constructor(){
        super();

        this.state={
            employee_name: "",
            employee_identifier: "",
            employee_desc: "",
            employee_start_date: "",
            employee_end_date: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        //makes it so when it referesh the page will retain the value and infomation 
        e.preventDefault();
        const newEmployee = {
            employee_name: this.state.employee_name,
            employee_identifier: this.state.employee_identifier,
            employee_desc: this.state.employee_desc,
            employee_start_date: this.state.employee_start_date,
            employee_end_date: this.state.employee_end_date
        }
        console.log(newEmployee);
        // this.props.createPerson(newPerson,this.props.history);
    }

    render() {
        return (
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit Employee form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Employee Name"
                            name="employee_name" 
                            value= {this.state.employee_name}
                            onChange = {this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Unique Employee ID"
                                // disabled 
                                name="employee_identifier"
                                value={this.state.employee_identifier}
                                onChange = {this.onChange}/>
                        </div>
                        
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Employee Description"
                            name="employee_desc"
                            value={this.state.employee_desc}
                            onChange = {this.onChange}/>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="employee_start_date" 
                            
                            value={this.state.employee_start_date}
                            onChange = {this.onChange}/>
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="employee_end_date" 
                            
                            value={this.state.employee_end_date}
                            onChange = {this.onChange}/>
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
export default AddEmployee;