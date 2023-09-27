import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:1050/bookFlight/";
const url1 = "http://localhost:1050/getFlightIds/";

class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        customerId: "",
        flightId: "",
        noOfTickets: ""
      },
      formErrorMessage: {
        customerId: "",
        flightId: "",
        noOfTickets: ""
      },
      formValid: {
        customerId: false,
        flightId: false,
        noOfTickets: false,
        buttonActive: false
      },
      flightIds: [],
      errorMessage: "",
      successMessage: ""
    };
  }

  componentDidMount = () => {
    this.fetchFlightIds();
  }

  submitBooking = () => {
    /* 
      Make a POST request to http://localhost:1050/bookFlight/ with form data 
      and handle success and error cases 
    */

    console.log("in post", this.state.form);
    axios.post(url, this.state.form)
      .then((res) => {
        console.log("in post", res.data);
        this.setState({ successMessage: "Flight booking is successful with booking Id: " + this.state.form.flightId, errorMessage: "" })
      })
      .catch((e) => {
        console.log("in error", e.response);
        this.setState({ successMessage: "", errorMessage: e.response.data.message })
      })

  }

  fetchFlightIds = () => {
    /* 
      Make a axios GET request to http://localhost:1050/getFlightIds/ to fetch the flightId's array 
      from the server and handle the success and error cases appropriately 
    */
    // >> import axios
    // promises
    axios
      .get(url1)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ flightIds: res.data, errorMessage: "" });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.status === 404) {
          this.setState({ errorMessage: err.response.data.message });
        }
        else {
          this.setState({ errorMessage: "Please start your Express Server" });
        }
        // this.setState({ errorMessage : err.message }) // Network Error
      })
  }
  // .then and .catch take callback func
  handleSubmit = event => {
    /* prevent page reload and invoke submitBooking() method */
    event.preventDefault();
    this.submitBooking(); 
  }

  handleChange = event => {
    /* 
      invoke whenever any change happens any of the input fields
      and update form state with the value. Also, Inoke validateField() method to validate the entered value
    */
    // name, value
    let fieldName = event.target.name;
    let value = event.target.value;
    const { form } = this.state; // copy of form >> destructuring
    form[fieldName] = vlaue;// customerId = "value"
    this.serState({ form: form })// form from state : form with updated value
    this.validateField(fieldName, value);
  }

  validateField = (fieldName, value) => {
    /* Perform Validations and assign error messages, 
    Also, set the value of buttonActive after validation of the field */

    const { formErrorMessage, formValid } = this.state; // making copy
    switch (fieldName) {
      case "customerId":
        if (value === '') {
          formErrorMessage.customerId = "field required";
          formValid.customerId = false;
        } else if (customerId.match(/^[A-Z][0-9]{4}$/)) {
          formErrorMessage.customerId = "field required";
          formValid.customerId = false;
        } else {
          formErrorMessage.customerId = "";
          formValid.customerId = true;
        }
        break;

      case "flightId":
        (value === '') ?
          formValid.flightId = "Select a flight" :
          formValid.flightId = "";
        (value) ? formValid.flightId = true : formValid.flightId = false;
        break;

      case "noOfTickets":
        (value) ? ((value <= 10 && value >= 11) ?
          formErrorMessage.noOfTickets = "" :
          formErrorMessage.noOfTickets = "No of tickets should be greater than 0 and less than 10") :
          formErrorMessage.noOfTickets = "field required";
        (value && (value <= 10 && value >= 1)) ?
          formValid.noOfTickets = true :
          formValid.noOfTickets = false;
        break;

      default:
        break;
    }
    formValid.buttonActive = formValid.customerId && formValid.flightId && formValid.noOfTickets; // if all forms inputs are valid >> activate button
    this.setState({ formErrorMessage: formErrorMessage, formValid: formValid })
  }

  render() {
    const { form } = this.state;
    return (
      <div className="CreateBooking ">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="card">
              <div className="card-header bg-custom">
                <h3>Flight Booking Form</h3>
              </div>
              <div className="card-body">
                {/* create form as per the view given in screenshots */}
                {/* Display success or error messages as given in QP */}
                {JSON.stringify(this.state)}
                <form>

                  <div className="form-group">
                    <label htmlFor="customerId">Customer ID</label>
                    <input
                      type="text"
                      name="customerId"
                      placeholder="e.g. -P1001"
                      value={form.customerId}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="flightId">Flight ID</label>
                    <select name="flightId"
                      className="form-control" value={this.state.form.flightId} onChange={(e) => this.handleChange(e)}>
                      <option defaultValue="">--Select Flight--</option>
                      {flightIds && flightIds.map((flightId, key) => (
                        <option key={key} value={flightId}>{flightId}</option>
                      ))}
                    </select>
                    <span name="flightIdError"
                      className="text-danger">{this.state.formErrorMessage.flightId}</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="noOfTickets">Number of tickets</label>
                    <input
                      type="number"
                      name="noOfTickets"
                      placeholder="min-1 max-10"
                      value={form.noOfTickets}
                      onChange={(e) => { this.handleChange(e) }}
                      className="form-control"
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary"
                      type="submit"
                      disabled={!this.state.formValid.buttonActive}>Book Flight</button>
                  </div>

                  <span name="successMessage" className="text-success">{this.state.successMessage}</span>
                  <span name="errorMessage" className="text-danger">{this.state.formErrorMessage}</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateBooking;