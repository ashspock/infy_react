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
      <div>
        <h4>My Counter</h4>
        <Counter counter={counter} />
        <button 
          type="button" 
          className="increment" 
          onClick={this.onIncrement}>
          Increment
        </button>
        &nbsp;
        <button 
          type="button" 
          className="decrement" 
          onClick={this.onDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}
export const Counter = ({ counter }) => <p>{counter}</p>;
export default App;