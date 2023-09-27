import React, { Component } from "react";

export default class News extends Component {


    componentDidMount() {
        console.log("Simple Input::MOUNTED");
        // console.log(this.props);
        console.log(this.props.match.params.passedParam);
    }


    state = {
        userName: '', hobby: '', age: this.props.match.params.passedParam,
        formErrors: {
            userNameError: '', hobbyError: '', ageError: '',
        },
        fieldValidity: {
            userName: false, hobby: false, age: false,
        },
        formValid: false
    };

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        console.log(value, name);
        this.setState({ [name]: value }) // THIS is RIGHT
        this.validateInputs(name, value);
    }

    validateInputs = (name, value) => {

        let newFormErrors = this.state.formErrors;
        let newFieldValidity = this.state.fieldValidity;

        switch (name) {
            case 'userName':
                value.length <= 5 ?
                    newFormErrors.userNameError = 'Cannot enter less than 5 chars' :
                    newFormErrors.userNameError = '';
                value.length <= 5 ?
                    newFieldValidity.userName = false :
                    newFieldValidity.userName = true;
                break;

            case 'hobby':
                value.length <= 5 ?
                    newFormErrors.hobbyError = 'Cannot enter less than 5 chars' :
                    newFormErrors.hobbyError = '';
                value.length <= 5 ?
                    newFieldValidity.hobby = false :
                    newFieldValidity.hobby = true;
                break;

            case 'age':
                value <= 18 ?
                    newFormErrors.ageError = 'Must be 18+' :
                    newFormErrors.ageError = '';
                value <= 18 ?
                    newFieldValidity.age = false :
                    newFieldValidity.age = true;
                break;


            default:
                break;
        }


        let newFormValid = newFieldValidity.age && newFieldValidity.hobby && newFieldValidity.userName
        this.setState({
            formErrors: newFormErrors,
            fieldValidity: newFieldValidity,
            formValid: newFormValid
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted")
    }


    render() {
        return (
            <>
                <h2>Here is a simple input- {this.props.match.params.passedParam}</h2>

                {JSON.stringify(this.state)}

                <hr />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    UserName:
                     <input name="userName" placeholder="Enter your User Name" value={this.state.userName}
                        onChange={(e) => this.handleChange(e)} />
                    <br />
                    <p className="text-danger">  {this.state.formErrors.userNameError}</p>

                    <hr />
                     Hobby:
                    <input type="text" placeholder="Enter your Hobby" name="hobby" value={this.state.hobby}
                        onChange={(e) => this.handleChange(e)} />
                    <br />
                    <p className="text-danger">{this.state.formErrors.hobbyError}</p>
                    <hr />

                    <hr />
                     Age:
                    <input type="number" placeholder="Enter your Age" name="age" value={this.state.age}
                        onChange={(e) => this.handleChange(e)} />
                    <br />
                    <p className="text-danger">{this.state.formErrors.ageError}</p>
                    <hr />

                    <button disabled={!this.state.formValid} type="submit" className="btn btn-success">Submit</button>
                </form>

                        
            </>
        )
    }
}