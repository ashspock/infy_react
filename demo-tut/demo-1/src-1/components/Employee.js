import React from "react";
// import image1 from './Jack.jpg';
// import image2 from './Jill.jpg';
const emp1 = {
  empId: 100,
  empName: "Jack",
  age: 30,
  salary: 50000,
//   image: image1
};
const emp2 = {
  empId: 101,
  empName: "Jane",
  age: 24,
  salary: 40000,
//   image: image2
};
class Employee extends React.Component {
  empArr = [emp1, emp2]; // class level attribute
  createCard(emp) { // class method
    var note = null;
    if (emp.age < 25) {
      note = <span className="text-info"> - Fresher</span>
    }
    return (
      <div key={emp.empId} className="card" style={{ "width": 200 }}>
        {/* <img className="card-img-top" /> */}
        <div className="card-body">
          <h5 className="card-title text-center">{emp.empName}</h5>
          <p className="card-text">
            <span>Id: {emp.empId}</span><br />
            <span>Age: {emp.age}</span> {note}<br />
            <span>Salary: {emp.salary}</span><br />
          </p>
          <button type="button" className="btn btn-primary">Edit Details</button>
        </div>
      </div>
    )
  }
  render() { // returns final JSX
    return (
      <div>
        <h3 className="text-center text-primary">Employee Details</h3>
        <div className="row">
          {this.empArr.map(emp => { return this.createCard(emp) })}
        </div>
      </div>
    )
  }
}
export default Employee;
