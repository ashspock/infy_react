import React from 'react';
import Hello from "./Hello"

export default function App(){
  return(
    <>
      <Hello name="Sachin"/>
      <Hello name="San"/>
      <Hello name="Sachi"/>
      <Hello name="Sac"/>
    </>
  )
}







// import React from 'react'
// import ReactDOM from 'react-dom'
// import './App.css';
// import Navbar from './Navbar';
// import Banner from './Banner';
// import Card from './Card';
// import DynamicComp from './DynamicComp';

// export default function App() {
//   const cardData = [ 100, 200, 300 ];
//   return (
//     <>
//       <Navbar />
//       <Banner />
//       <div className="row">
//         {cardData.map((aData, key) => <Card key={key} data={aData} />)}
//       </div>
//       <DynamicComp initialCount={666}/>
//     </>
//   ); 
// }

