// import React from 'react';
import React, { StrictMode } from 'react'; // 
// import ReactDOM from 'react-dom';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ver 1.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   // document.getElementById('root')
//   document.getElementById('root2')
// );

{/* <React.StrictMode>.......</React.StrictMode> */}
// to check react code, strict code

// ver 2.
// ReactDOM.render(<App></App>, document.getElementById('root') )
// ReactDOM.render(<React.StrictMode> <App/> </React.StrictMode>, document.getElementById('root') )
// ReactDOM.render(
//   <StrictMode> 
//     {/* parent tag >> StrictMode*/}
//      <App/>
//  </StrictMode>, 
//  document.getElementById('root')
// );

// ver. 3
// ReactDOM.render( 666, document.getElementById('root'));

// ver 4.
// const stringData = "Sachin";
// const numbData = 666;
// const boolTr = true; // boolean values doesn't get rendered by REACT DOM 

// const stringArr = ['A', 'B', 'C'];
// const mixArr = ['A', 6, " ",  'B', 7, " ",'C'];
const empObj = {id: 666, name: "Sachin", age:23};


// ReactDOM.render( boolTr , document.getElementById('root')); // nothing gets displayed
// ReactDOM.render( boolTr.toString() , document.getElementById('root')); // now true gets 
// ReactDOM.render( boolTr.toString().toUpperCase() , document.getElementById('root')); // TRUE
// console.log(boolTr); // in browser console
// ReactDOM.render( stringArr, document.getElementById('root'));
// ReactDOM.render( mixArr, document.getElementById('root'));

// const empString_To_Disp = JSON.stringify(empObj);
// const emp_display = `EmpID: ${empObj.id}-- EmpName: ${empObj.name}-- EmpAge: ${empObj.age}`;
// ReactDOM.render( empObj, document.getElementById('root'));
// ReactDOM.render( empString_To_Disp, document.getElementById('root')); // only for debugging
// ReactDOM.render( emp_display, document.getElementById('root')); // only for debugging
// ReactDOM.render( new Date().toString() , document.getElementById('root')); // only for debugging


// ---------------------------------------------------------------
//**
// const magic = <h1>Hello to React!!!</h1>;
// const para1 = <div> 
//   <h1>  Hello to New App</h1>
//   <h1>  Hello  There</h1>
// </div>

// ***************  Multiple line printing
// const para1 = (
//   <div> 
//     <h1>Welcome To REACT!</h1>
//     <h3>Have Fun</h3>
//   </div>)

// ReactDOM.render(para1, document.getElementById('root'))

// -------------------------------------------------------------
// const emp_As_TABLE = (
//   <div>
//     <h1>Employee as a Table</h1>
//     <table border="2">
//       <tr>
//         <th>EmpId</th>
//         <td>{ empObj.id }</td>
//       </tr>
//       <tr>
//         <th>EmpName</th>
//         <td>{ empObj.name }</td>
//       </tr>
//       <tr>
//         <th>Age</th>
//         <td>{ empObj.age }</td>
//       </tr>
//     </table>
//   </div>
// )


// // ReactDOM.render(emp_As_TABLE, document.getElementById('root'))
// render(emp_As_TABLE, document.getElementById('root'))


// object
// const employee = {
//   empName:"Sachin",
//   empID: 1109288,
//   age: 23,
// };

// const para1 = (
//   <div>
//     <table border="2">
//       <thead>
//         <tr>
//           <td>Name</td>
//           <td>ID</td>
//           <td>Age</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{ employee.empName }</td>
//           <td>{ employee.empID }</td>
//           <td>{ employee.age }</td>
//         </tr>

//       </tbody>
//     </table>
//   </div>
// )

// ReactDOM.render(para1, document.getElementById('root'));















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//** React can display only primitve and Array