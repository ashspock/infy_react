import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Employees = () => {
    const [employees, setEmployees] = useState([
        { empId: 1234, name: 'John', designation: 'SE' },
        { empId: 4567, name: 'Tom', designation: 'SSE' },
        { empId: 8910, name: 'Kevin', designation: 'TA' }
    ])
    const addEmployee = () => {
        // setEmployees([...employees, { empId: 6789, name: 'Sam', designation: 'TL' }]);
        // setEmployees([]); // no addition
        // setEmployees([{empId: 6789, name: 'Sam', designation: 'TL'}]); //  only new employee added

        // const copy = employee; >> not a copy only a reference
        const copy = [...employees, {empId: 6789, name: 'Sam', designation: 'TL'}];
        setEmployees(copy);
    };
    return (<>
        <table style={{ width: '60%' }} className='table'>
            <thead className="thead-light">
                <tr>
                    <th>EmpID</th>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, key) => <tr key={key}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.designation}</td>
                    </tr>)
                }
            </tbody>
        </table>
        <button onClick={addEmployee}>Add an Employee</button>
    </>)
}
export default Employees;
// setEmployees([...employees, { empId:6789, name: 'Sam', designation:'TL' }]); >> spread employees + one more employee