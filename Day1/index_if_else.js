import React from 'react';
import ReactDOM from 'react-dom';

// ******************  IF-else **********************

// const dataToCheck = true;
const dataToCheck = false;

const display_1 = (
  <div>
    { dataToCheck ? <h1>Hi</h1> : <h1>Bye</h1>}
  </div>
)

let display_2;
if(dataToCheck){
  display_2 = <h1>Hi_option 2</h1>;
}else{
  display_2 = <h1>Bye_option 2</h1>;
}

// ReactDOM.render(display_2, document.getElementById('root'));
// ReactDOM.render([display_1, display_2], document.getElementById('root'));
ReactDOM.render(
  <div>
    {display_1} 
    {display_2}
  </div>
, document.getElementById('root'));

let display_3;
const timeNow = new Date().getHours();
if(timeNow < 12){
  display_3 = <h1>Good Morning</h1>;
}else{
  display_3 = <h1>Good Afternoon</h1>
}
ReactDOM.render(display_3 ,document.getElementById('root'))
