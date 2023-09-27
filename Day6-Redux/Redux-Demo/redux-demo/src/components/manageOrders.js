import React, { Component } from 'react';
import { connect } from "react-redux";
import { purchaseLaptop, returnLaptop } from "../action/laptop.action";
import { purchaseMobile, returnMobile } from "../action/mobile.action";
import {  } from "../";

 class ManageOrder extends Component{

    constructor(){
        super(props);
        this.state = {};
    }

    handleChange = (event) => {
        this.setState({ customerId: event.target.value })
    }

    purchaseMobile = () => {
        this.props.dispatch(purchaseMobile(this.state.customerId))
    }
    purchaseLaptop = () => {
        this.props.dispatch(purchaseLaptop(this.state.customerId))
    }
    returnLaptop = () => {
        this.props.dispatch(returnLaptop(this.state.customerId))
    }
    returnMobile = () => {
        this.props.dispatch(returnMobile(this.state.customerId))
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="cold-md-6 offset-md-3">
                        <div className="card shadow">
                            <div className="card-header text text-center">
                                <h1>Manage Orders</h1>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="customerId">Customer Id</label>
                                    <input
                                        id="customerId"
                                        className="form-control"
                                        name="customerId"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        ></input>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success" type="button">Purchase Mobile</button>
                                    <button className="btn btn-success" type="button">Purchase Laptop</button>
                                    <button className="btn btn-danger"  type="button">Return Mobile</button>
                                    <button className="btn btn-danger"  type="button">Return Laptop</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("data coming from store", state);
    return{
        noOfLaptops : state.laptopReducer.noOfLaptops,
        noOfMobiles : state.mobileReducer.noOfMobiles
    }
}
export default connect(mapStateToProps)(ManageOrder);
// outcome >> value returned by mapStateToProp will be available in ManageOrders component as props