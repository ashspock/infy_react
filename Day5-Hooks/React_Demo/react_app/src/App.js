
import './App.css';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import axios from "axios";

const backendURL = "http://localhost:4000/Employee";

function App() {
  const [mydata, setMydata] = useState("Jack")
  const [ename, setEname] = useState("John")
  const [empData, setEmpData] = useState([])
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    console.log("UseEffect is called");

    clicked && axios
      .get(backendURL)
      .then((res) => {
        console.log(res);
        setEmpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [clicked]); 
  
  // [] : dependency array >> act like componentDidMount >> useEffect invoked only once
  // [ename] >> only when ename gets updated >> useEffect gets invoked >> page re-rendered
  // [] >> empty array => no dependency --> keep calling --> 
  // [var]: var >> should be linked with a state
  // when clicked >> useEffect will be called

  const getData = async (data) => {
    // setMydata("Thor");
    setEname("Ram");
    setEname((p) => { console.log(p); return p });

  }

  return (
    <div className="App">
      <Login getData={getData} myname={mydata}></Login>
      <h1>{ename}</h1>
      <button type="button" onClick={() => setClicked(true)}>Click</button>
    </div>
  )
}
export default App;