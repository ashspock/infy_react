// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login';


function App() {
  const [mydata, setMydata] = useState("Jack")
  const getData = (data) => {
    console.log("App page", data);
  }
  return (
    <div className="App">
      <Login getData={getData} myname={mydata}></Login>
    </div>
  );
}
export default App;
