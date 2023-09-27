import React, { Component } from 'react'
import axios from 'axios';


const URL_GET_BY_ID = 'http://localhost:4000/anEmp/';


export default class SearchEmployee extends Component {

    state = { inputEmpId: '', foundEmp: null, errorMsg:'' }
    // found object requires second state variable
    handleSearch = (e) => {
        // alert("About to search: "+ this.state.inputEmpId );
        const FINAL_URL = URL_GET_BY_ID + this.state.inputEmpId;
        console.log(FINAL_URL);
        axios
            .get(FINAL_URL)
            .then((res)=> {
                console.log("Yay::", res)
                this.setState(()=>({
                    foundEmp: res.data,
                    errorMsg:''
                }) );
            })
            .catch((e) => {
                console.log("Nay::", e)
                this.setState(()=>({
                    foundEmp: null,
                    errorMsg: e.message
                }) );
            })
    }

    render() {
        const { inputEmpId, foundEmp, errorMsg } = this.state
        return (
            <div className="row">
                {JSON.stringify(this.state)}
                <div className="col-4 offset-4">
                    <h1>Search an Employee</h1>
                    <input placeholder="Enter an EMPID" className="form-control" name="inputEmpId" type="number" 
                        value={inputEmpId} onChange={(e) => this.setState({ [e.target.name]: e.target.value })} />

                    {inputEmpId && <button disabled={!inputEmpId} className="btn btn-primary" onClick={(e) => this.handleSearch(e)}>Search</button>}
                    {/* <button disabled={!inputEmpId} className="btn btn-primary" onClick={(e) => this.handleSearch(e)}>Search</button> */}
                    <hr/>

                    {foundEmp && (
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{foundEmp.id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{foundEmp.name}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{foundEmp.age}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                    {errorMsg && (<></>)}

                </div>
            </div>
        )
    }

}


// handleSearch = (e) => {
//     alert("About to Search: " + this.state.inputEmpId);
//     const FINAL_URL = URL_GET_BY_ID + this.state.inputEmpId;
//     console.log(FINAL_URL);
//     axios
//       .get(FINAL_URL)
//       .then((res) => {
//         console.log("YAY::", res);
//         this.setState(() => ({
//           foundEmp: res.data,
//           errorMsg: ''
//         }));
//       })
//       .catch((e) => {
//         console.log("NAY::", e);
//         this.setState(() => ({
//           foundEmp: null,
//           errorMsg: e.message
//         }));
//       })
//   }