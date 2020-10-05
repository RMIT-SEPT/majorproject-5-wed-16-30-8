import React, { Component } from 'react'

class login extends Component {
    constructor(){
        super();

        this.state = {
            personIdentifier: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const loginDetail = {
            personIdentifier: this.state.personIdentifier,
            password: this.state.password
        }
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
                                    <input type="text" className="form-control form-control-lg" placeholder="Username"
                                        // disabled 
                                        name="personIdentifier"
                                        value={this.state.personIdentifier}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg " placeholder="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange} />
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
export default login;