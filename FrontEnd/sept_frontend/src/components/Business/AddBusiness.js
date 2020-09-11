import React, { Component } from 'react'

class AddBusiness extends Component {
    constructor(){
        super();

        this.state={
            business_name: "",
            business_identifier: "",
            business_desc: "",
            business_start_date: "",
            business_end_date: ""
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
        const newBusiness = {
            business_name: this.state.business_name,
            business_identifier: this.state.business_identifier,
            business_desc: this.state.business_desc,
            business_start_date: this.state.business_start_date,
            business_end_date: this.state.business_end_date
        }
        console.log(newBusiness)

        // this.props.createPerson(newPerson,this.props.history);
    }

    render() {
        return (
            <div className="business">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit Business form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Business Name"
                            name="business_name" 
                            value= {this.state.business_name}
                            onChange = {this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Unique Business ID"
                                // disabled 
                                name="business_identifier"
                                value={this.state.business_identifier}
                                onChange = {this.onChange}/>
                        </div>
                        
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Business Description"
                            name="business_desc"
                            value={this.state.business_desc}
                            onChange = {this.onChange}/>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                            name="business_start_date" 
                            
                            value={this.state.business_start_date}
                            onChange = {this.onChange}/>
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="business_end_date" 
                            
                            value={this.state.business_end_date}
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
export default AddBusiness;