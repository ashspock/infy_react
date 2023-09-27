import React, { Component } from 'react'
import axios from 'axios';


// const URL_ADD_NEW = 'http://localhost:4000/newEmployee_error';
const URL_ADD_NEW = 'http://localhost:4000/newEmployee';


export default class AddEmployee extends Component {


    // state = { id: '', name: '', age: '' }
    state = { id: '', name: '', age: '', successMessage: '', failureMessage: '' }


    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });


    handleSubmit = (e) => {
        e.preventDefault();
        // alert("About to Submit"+ JSON.stringify(this.state));
        const newEmp = {
            id: parseInt(this.state.id, 10),// converting string >> number
            age: parseInt(this.state.age, 10),// converting string >> number
            name: this.state.name,
        }
        console.log(newEmp)

        axios
            .post(URL_ADD_NEW, newEmp)
            .then((res) => {
                console.log("Yay: ADDED", res)
                this.setState({
                    successMessage: res.data.message,
                    failureMessage: '',
                    id:'', name:'', age:''
                })
            })
            .catch((e) => {
                console.log("Not!!!");
                // this.setState({failureMessage: e.message})
                this.setState({
                    // failureMessage: "Oops!! Something Went Wrong", // used defined
                    failureMessage: e.message, // used defined
                    // resetting the form inputs
                    successMessage:'',
                    id: '', name: '', age: ''
                })
            })
    }

    render() {

        const { id, name, age, successMessage, failureMessage } = this.state;

        return (
            <>
                <h1 className="text-center">Add a new Employee</h1>
                <div className="row">
                    <div className="col-4 offset-4">
                        {JSON.stringify(this.state)}
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="from-group">
                                <label htmlFor="id">Id: </label>
                                <input value={id} onChange={(e) => this.handleChange(e)}
                                    className="form-control" type="number" name="id" />
                            </div>
                            <div>
                                <label htmlFor="name">Name: </label>
                                <input value={name} onChange={(e) => this.handleChange(e)}
                                    className="form-control" type="text" name="name" />
                            </div>
                            <div>
                                <label htmlFor="age">Age: </label>
                                <input value={age} onChange={(e) => this.handleChange(e)}
                                    className="form-control" type="number" name="age" />
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </form>
                        <p className="text-success">{successMessage}</p>
                        <p className="text-danger">{failureMessage}</p>
                    </div>

                </div>
            </>
        )
    }
}