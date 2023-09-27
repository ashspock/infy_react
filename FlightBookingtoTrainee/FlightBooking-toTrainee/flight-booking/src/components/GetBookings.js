import React, { Component } from "react";
import axios from "axios";
import Redirect from "../../node_modules/react-router-dom/Redirect";

const url = "http://localhost:1050/getAllBookings/";
const url1 = "http://localhost:1050/deleteBooking/";

class GetBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: "",
      bookingId: "",
      updateStatus: false,
      errorMessage: "",
      successMessage: ""
    };
  }

  componentDidMount = () => {
    this.fetchBooking();
  }

  updateBooking = (bid) => {
    /* update the updateStatus and bookingId state with appropriate values */
    console.log("in update", bid);
    this.setState({ bookingData: bid, updateStatus: true })
  }

  fetchBooking = () => {
    /* 
      Send an AXIOS GET request to the url http://localhost:1050/getAllBookings/ to fetch all the bookings 
      and handle the success and error cases appropriately 
    */
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ bookingData: res.data, errorMessage: "" })
      })
      .catch((e) => {
        console.log(e);
        if (e.status === 404) {
          this.setState({ errorMessage: e.message })
        } else {
          this.setState({ errorMessage: "Could not fetch booking data" })
        }
      })
  }

  deleteBooking = (id) => {
    /*
      Send an AXIOS DELETE request to the url http://localhost:1050/deleteBooking/ to delete the selected booking
      and handle the success and error cases appropriately 
    */
    console.log("in delete");
    const url2 = url1 + `${id}`;
    axios
      .delete(url2)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ successMessage: res.data.message, errorMessage: "" })
      })
      .catch((e) => {
        console.log(e);
        this.setState({ successMessage: "", errorMessage: e.respomse.data.message })
      })

  }

  render() {
    const { bookingData } = this.state;
    return (
      <div className="GetBooking">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="card">
              <div className="card-header bg-custom">
                <h3 align="center">Booking Details</h3>
              </div>
              <div className="card-body">
                {/* code here to get the view as shown in QP for GetBooking component */}
                {/* Display booking data in tabular form */}
                {/* Display error message if the server is not running */}
                {/* code appropriately to redirect on click of update button */}
                <div className="card-header bg-custom">
                  <h3 align="center">Booking Details</h3>
                </div>
                <div className="card-body">
                  {/* {JSON.stringify(this.state.bookingData)} */}
                  <table className="table border">
                    <thead>
                      <tr>
                        <th>Customer Id</th>
                        <th>Booking Id</th>
                        <th>Total Tickets</th>
                        <th>Total Cost</th>
                        <th colSpan="2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookingData && bookingData.map((data, key) => (
                        <tr key={key}>
                          <td>{data.customerId}</td>
                          <td>{data.bookingId}</td>
                          <td>{data.noOfTickets}</td>
                          <td>{data.bookingCost}</td>
                          <td><button className="btn btn-success btn-inline" value={data.bookingId} onClick={(e) => { this.updateBooking(e.target.value) }}>Update</button></td>
                          <td><button className="btn btn-danger" value={data.bookingId} onClick={(e) => { this.deleteBooking(e.target.value) }}>Cancel</button></td>
                        </tr>))}
                    </tbody>
                  </table>
                  <span className="text-success text-center">{this.state.successMessage}</span>
                  <span className="text-danger text-center">{this.state.errorMessage}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetBooking;
