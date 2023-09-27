import React from 'react';

const employee = [
  {id: 666, name: "Saz", age:28},
  {id: 667, name: "San", age:23},
  {id: 668, name: "Sin", age:27},
  {id: 669, name: "Sa", age:24},
  {id: 670, name: "Sachi", age:21},
  {id: 671, name: "Sachin", age:21},
];

export default function App() {
  return (
    <>
      <hr/>
      <div>
        <table border="2">
          <thead>
            <tr>
              <td>Name</td>
              <td>ID</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {
              employee.map((emp, index) => {
                return (
                  <tr className="row" key={index}>
                    <td>{emp.name}</td>
                    <td>{emp.id}</td>
                    <td>{emp.age}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <hr/>
    </>
  )
}
