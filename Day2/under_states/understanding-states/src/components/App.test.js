// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// 1. import the modules to be tested
import { shallow } from 'enzyme';
import { doIncrement, doDecrement, Counter } from './App';
import News from './News';
import App from "./App";
// export const doIncrement = prevState => ({
//   counter : prevState.counter + 1
// })

// 2. define the test suite and individual test cases 

// describe("Testing increment and decrement methods ", () => {

//   test("doIncrement method should increase the counter", () => {
//     let state = { counter : 0 };
//     let newState = doIncrement(state); // 1 ? {counter : 1}
//     expect(newState.counter).toBe(1);
//   } )
//   test("doDecrement method should increase the counter", () => {
//     let state = { counter : 0 };
//     let newState = doDecrement(state); // 1 ? {counter : 1}
//     expect(newState.counter).toBe(-1);
//     expect(newState.counter).toBeDefined();
//     // expect(newState.noOfMobiles).toBeDefined();
//     // expect(newState.noOfMobiles).not.toBeDefined();
//     // in order to pass, all test cases should pass
//   })
// })


describe('Testing App Component', () => {

  test('should render the counter component', () => {
    // render app component and check whether counter is rendered or not
    // 1. render app
    const AppWrapper = shallow(<App/>);
    // 2. to check if an element is present in the rendered component or not
    // we need to use wrapper.find()
    const counter = AppWrapper.find(Counter);
    // expect(counter).toBeDefined();
    expect(counter.length).toBe(1);
  })

  test('should increase the counter on Click of button', () => {
    const AppWrapper = shallow(<App/>);
    // 1. pick the button from dom
    // 2. simulate click event
    // 3. identify the button with class name as increment
    const incrementButton = AppWrapper.find('button.increment');
    // simulate a click
    incrementButton.simulate('click');
    // test whether the state got or not
    expect(AppWrapper.state('counter')).toBe(1);
  })


  test('should decrese the counter on Click of button', () => {
    const AppWrapper = shallow(<App/>);
    // 1. pick the button from dom
    // 2. simulate click event
    // 3. identify the button with class name as increment
    const decrementButton = AppWrapper.find('button.decrement');
    // simulate a click
    decrementButton.simulate('click');
    // test whether the state got or not
    expect(AppWrapper.state('counter')).toBe(-1);
  })

  test('should increase the counter by invoking method', () => {
    const AppWrapper = shallow(<App/>);
    AppWrapper.instance().onIncrement();
    expect(AppWrapper.state('counter')).toBe(1);
  })
  test('should decrease the counter by invoking method', () => {
    const AppWrapper = shallow(<App/>);
    AppWrapper.instance().onDecrement();
    expect(AppWrapper.state('counter')).toBe(-1);
  })

  test('should pass the updated counter value to counter component as prop', () => {
    const AppWrapper = shallow(<App/>);
    const incrementButton = AppWrapper.find('button.increment');
    incrementButton.simulate('click');
    const counterComponent = AppWrapper.find('Counter');
    expect(counterComponent.props().counter).toBe(1);
  })

  // test that counter component renders the received counter value as props
  test('should render the counter value received as props', () => {
    const CounterWrapper = shallow(<Counter/>);
    const pTag = CounterWrapper.find('p');
    expect(pTag.props().children).toBe(CounterWrapper.props().counter);
  })

})