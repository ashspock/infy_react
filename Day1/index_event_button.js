import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const handleClick = (event, someData) => {
  alert("Hi World........"+ event + someData);
}

const parent = (
  <div className="container-fluid">
    <h1 className="display-1">When will Day 1 of React End?</h1>
    
    <button onClick={ handleClick } className="btn btn-primary">
      Click Me 1 (Button without Param - DEFAULT MODE - Event auto passed)
    </button>
    <br/>
    <br/>
    <button onClick={ () => handleClick() } className="btn btn-primary">
      Click Me 2(Button without Param - CALLBACK MODE - Nothing is passed)
    </button>
    <br/>
    <br/>
    <button onClick={ (e)=> handleClick(e) } className="btn btn-primary">
      Click Me 3 (Button with Param - CALLBACK MODE - Event is passed explicity by DEV)
    </button>
    <br/>
    <br/>
    <button onClick={ ()=> handleClick(666) } className="btn btn-primary">
      Click Me 4 (Button with Param - CALLBACK MODE - actual data is passed explicity by DEV)
    </button>
    <br/>
    <br/>
    <button onClick={ (e)=> handleClick(e, 666) } className="btn btn-primary">
      Click Me 5 (Button with Param - CALLBACK MODE - actual data and error is passed explicity by DEV)
    </button>

    




    <div className="row"></div>
  </div>
)
ReactDOM.render(parent, document.getElementById('root'));

// ---------------------------------------------------------------

// const handleClick = (e) => {
//   alert("ooops, clicked.....");
// }



// function display(){
//   return (
//     <div className="text-center">
//       <h3 className="text-danger">Welcome to REACT</h3>
//       <button className="btn btn-primary" onClick={ () => handleClick()}>DEMO</button>
//     </div>
//   )
// }