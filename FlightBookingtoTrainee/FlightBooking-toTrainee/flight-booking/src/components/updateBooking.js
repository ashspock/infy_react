import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:1050/updatebooking/";

class UpdateBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                bookingId: "",
                noOfTickets: ""
            },
            formErrorMessage: {
                bookingId: "",
                noOfTickets: ""
            },
            formValid: {
                bookingId: true,
                noOfTickets: false,
                buttonActive: false
            },
            successMessage: "",
            errorMessage: "",
            id: this.props.match.params.bookingId
        };
    }

    componentDidMount = () => {
        const { form } = this.state;
        form.bookingId = this.state.id;
        console.log(form);
        this.setState({ form: form })
    }

    updateBooking = () => {
        /* 
          Make a axios PUT request to http://localhost:1050/updatebooking/ to update the number of tickets 
          for the selected bookingId and handle the success and error cases appropriately 
        */
        console.log("in update")
        const { form } = this.state;
        const newUrl = url + form.bookingId;
        console.log("Bid", form.bookingId, " ticket", form.noOfTickets, " newURL", newUrl)
        axios
            .put(newUrl)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                this.setState({ successMessage: res.data.message, errorMessage: "" })
            })
            .catch((e) => {
                console.log(e);
                this.setState({ successMessage: "", errorMessage: e.response.data.message })
            })
    }

    handleSubmit = (event) => {
        /* prevent page reload and invoke updateBooking() method */
        event.preventDefault();
        this.updateBooking();
    }

    handleChange = (event) => {
        /* 
          invoke whenever any change happens any of the input fields
          and update form state with the value. Also, Inoke validateField() method to validate the entered value
        */
        const name = event.target.name;
        const value = event.target.value;
        const { form } = this.state;
        form[name] = value;
        this.setState({ form: form });
        this.validateField(name, value);
    }

    validateField = (fieldName, value) => {
        /* Perform Validations and assign error messages,
        Also, set the value of buttonActive after validation of the field */
        const { formErrorMessage, formValid } = this.state;
        switch (fieldName) {
            case "noOfTickets":
                value ?
                    ((value > 0 && value <= 10) ?
                        formErrorMessage.noOfTickets = "" :
                        formErrorMessage.noOfTickets = "No. of tickets should be greater than 0 and less than 10") :
                    formErrorMessage = "Field Required";

                (value && (value > 0 && value <= 10) ?
                    formValid.noOfTickets = true :
                    formValid.noOfTickets = false)
                break;

            default:
                break;
        }
        const newButtonActive = newFormValid.bookingId && newFormValid.noOfTickets;
        newFormValid.buttonActive = newButtonActive;
        this.setState({
            formErrorMessage: newFormErrorMessage,
            formValid: newFormValid
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="UpdateBooking">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <br />
                            <div className="card">
                                <div className="card-header bg-custom">
                                    <h4>Update Flight Booking for id: {this.state.id}</h4>
                                </div>
                                <div className="card-body">
                                    {/* code appropriately to render the form as shown in QP */}
                                    {/* display the success and error messages appropriately */}
                                    {/* {JSON.stringify(this.state)} */}
                                    <form className="form" onSubmit={(e) => { this.handleSubmit(e) }}>
                                        <div className="form-group">
                                            <label htmlFor="bookingId">bookingId</label>
                                            <input name="bookingId" disabled value={form.bookingId} placeholder={this.state.id} className="form-control" type="number"></input>
                                            <span className="text-danger" name="bookingIdError">{formErrorMessage.bookingId}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="noOfTickets" >No of Tickets</label>
                                            <input name="noOfTickets" value={form.noOfTickets} placeholder="min-1 max-10" className="form-control" type="number" onChange={(e) => { this.handleChange(e) }}></input>
                                            <span className="text-danger" name="noOfTicketsError">{formErrorMessage.noOfTickets}</span>
                                        </div>
                                        <button type="submit" disabled={!formValid.buttonActive} className="btn btn-primary">Update Booking</button>
                                        <br />
                                        <span className="text-success" name="successMessage">{successMessage}</span>
                                        <span className="text-danger" name="errorMessage">{errorMessage}</span>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default UpdateBooking;