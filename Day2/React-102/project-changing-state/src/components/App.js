
import Navbar from './Navbar';
import Banner from './Banner';
import Card from './Card';
import DynamicComp from './DynamicComp';

function App() {

  const cardData = [ 100, 200, 300 ]

  return (
    <>
      <Navbar/>
      <Banner/>
      {/* <h1>Hello</h1> */}
      <div className="row">
        {cardData.map((aData, key)=> <Card key={key} idVal={aData}/> )}

        {/* --------------------------- */}
        {/* props are idVar */}
        {/* <Card idVal={666} />
        <Card idVal={777} /> */}
        {/* <Card />
        <Card someData />
        <Card someData={undefined} /> */}

      </div>
      {/* <DynamicComp/> */}
      <DynamicComp initialCount={10}/>
    </>
  );
}

export default App;



// ***************************************************
// function SayHello(){
//   return(
//     <>
//       <h1>Hello</h1>
//       <p>Welcome to Day 2 of REACT</p>
//     </>
//   )
// } 

// function DisplayApp() {
//   return (
//     // -----------
//     // <Fragment>
//         // <div>

//         // </div>
//     // </Fragment>
//     // ----------
//     // <>
//     //   <div>

//     //   </div>
//     // </>
//     // ----------------
//     <>
//       {/* {SayHello()} */}
//       <SayHello/>
//       <h3>Bye</h3>
//     </>
//   )
// }

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <>
//       {/* 1. */}
//       {/* <h1>From App</h1>
//       <DisplayApp/> */}
//       {/* 2. */}
//       <DisplayApp/>
//       <h1>From App</h1>
//     </>
//   );
// }

// export default App;
