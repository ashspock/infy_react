import React, { Component } from 'react'
import axios from 'axios';


const URL_GET_ALL = 'http://localhost:4000/allEmployees';


export default class Home extends Component {


    // constructor(){
    //     super();
    //     console.log("constructor")
    // }


    state = {
        // empData: null, gives error
        empData: null

    }

    componentDidMount() {
        console.log("Home: componentDidMount");
        axios
            .get(URL_GET_ALL)
            .then((response_From_BE) => {
                console.log("YAY GOT DATA", response_From_BE.data);
                // console.log(response_From_BE.data); // atrr.  
                // this.setState(()=>{
                //     return{ empData: response_From_BE.data }
                // })
                // above in one line
                this.setState(() => ({ empData: response_From_BE.data }));
            })
            .catch((e) => { console.log(e) });
    }

    render() {

        const { empData } = this.state;

        console.log("Home:RENDER")
        return (
            <>
                <h1>All Employees</h1>
                {/* {empData}// error */}
                {JSON.stringify(empData)}

                { empData && empData.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {empData && empData.length > 0 &&  empData.map((anEmp, key)=>( */}
                            {empData.map((anEmp, key) => (
                                <tr key={key}>
                                    <td>{anEmp.id}</td>
                                    <td>{anEmp.name}</td>
                                    <td>{anEmp.age}</td>
                                </tr>
                            ))}
                            {/* {empData.length === 0 ? () : (null)} */}

                        </tbody>
                    </table>
                )}

                {empData && empData.length === 0 && (<p>No rows Found</p>)}
                {/* // if employeeData is null */}
            </>
        )
    }
}


// empData is initialized  to null >> throws error >> cannot map with null
// >> first check >> empData >> empData.length > 0 >> then map
// empData is initialized to [] >> works
