// import React, { Component } from 'react';
// import Button from "../components/Button";
// import ReactDOM, { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
// import Contact from "../components/Contact";
// import News from "../components/News";

// const Home = () => <h1>Welcome to Home</h1>;
// export default class App extends Component {
//     render() {
//         return (
//             <>
//                 <Button initialCount={10} />
//                 <BrowserRouter>
//                     <nav>
//                         <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
//                         <Link to="/news">NEWS</Link>&nbsp;&nbsp;&nbsp;
//                         <Link to="/contact">Contact Us</Link>&nbsp;&nbsp;&nbsp;
//                     </nav>
//                     <Switch>
//                         <Route exact path="/" component={Home}/>
//                         <Route exact path="/news" component={News}/>
//                         <Route exact path="/contact" component={Contact}/>
//                         <Route exact path="/*" render={ () => <Redirect to="/"/> }/>
//                     </Switch>
//                 </BrowserRouter>
//             </>
//         )
//     }
// }

// ************************************************************
// Jest - Enzyme Testing

import React, { Component } from "react";
export const doIncrement = prevState => ({
  counter: prevState.counter + 1
});
export const doDecrement = prevState => ({
  counter: prevState.counter - 1
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  onIncrement() {
    this.setState(doIncrement);
  }
  onDecrement() {
    this.setState(doDecrement);
  }
  render() {
    const { counter } = this.state;
    return (
      <div style={{textAlign: "center"}}>
        <h4>My Counter</h4>
        <Counter counter={counter} />
        <button type="button" className="increment" onClick={this.onIncrement}>
          Increment
        </button>
        &nbsp;
        <button type="button" className="decrement" onClick={this.onDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}
export const Counter = ({ counter }) => <p>{counter}</p>;
export default App;
