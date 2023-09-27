import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const employeeData = [
  {id: 666, name: "Jon", age: 23},
  {id: 667, name: "Jonny", age: 26},
  {id: 668, name: "John", age: 27},
  {id: 669, name: "Johnny", age: 26},
  {id: 676, name: "Joshua", age: 34},
  {id: 686, name: "Jack", age: 33},
];

const handleGetDetails =(empObj) => {
  alert("DATA is: "+ JSON.stringify(empObj))
}

const parent = (
  <div className="container-fluid">
    <h1 className="display-3 text-center">When will Day 1 of React End?....Not so soon</h1>
    
    <div className="row">
      <div style={ {border: "2px solid black"} } className="col-4 offset-4">
        <h3 className="text-center">Employee Data</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr key="0">
              <td>{employeeData[0].id}</td>
              <td>{employeeData[0].name}</td>
              <td>{employeeData[0].age}</td>
            </tr>
            <tr key="1">
              <td>{employeeData[1].id}</td>
              <td>{employeeData[1].name}</td>
              <td>{employeeData[1].age}</td>
            </tr>
            <tr key="2">
              <td>{employeeData[2].id}</td>
              <td>{employeeData[2].name}</td>
              <td>{employeeData[2].age}</td>
            </tr> */}
            {/* We need to map over data array and create a new Array of <tr>'s with data from */}
            

            {/* {
            employeeData.map((empObj, index) => {
              return (
                <tr key={index}>
                  {/* <td>1</td>
                  <td>2</td>
                  <td>3</td> */}
                  {/* <td>{empObj.id}</td>
                  <td>{empObj.name}</td>
                  <td>{empObj.age}</td>
                </tr>
              )
            })
            } */} 

            {employeeData.map((empObj, key) => (
             <tr key={key}>
                <td>{empObj.id}</td>
                <td>{empObj.name}</td>
                <td>{empObj.age}</td>
                <td>
                  <button className="btm btn-success" onClick={() =>  handleGetDetails(empObj.id) }> GET DETAILS </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  

)
ReactDOM.render(parent, document.getElementById('root'));