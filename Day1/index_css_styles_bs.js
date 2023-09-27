import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap/dist/css/bootstrap-reboot.min.css

// const heading1 = <h1 style={ {color: 'red', fontSize: '50px', backgroundColor: 'bisque'} }>Helo Styles!!</h1>;   
const heading1 = () => <h1 style={ { color: 'red', fontSize: '50px', backgroundColor: 'bisque'} }>Hello</h1>
const div1 = <div className='myDiv myDiv2' style={ {border:'2px solid black'} }>
    {/* {heading1}   */}
    {heading1()}  
    <button className="btn btn-primary">CLICK</button>;
    <h2 className="display-4">bootstrap</h2>
  </div>


ReactDOM.render(div1, document.getElementById('root'));