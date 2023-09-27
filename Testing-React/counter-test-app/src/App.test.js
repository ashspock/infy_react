import { render, screen } from '@testing-library/react';
import App from './App';
import { doDecrement, doIncrement } from "./App";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Increment and Decrement functions', () => {
  test('should increment the counter in state', () => {
    const state = { counter: 0 };
    const newState = doIncrement(state);
    expect(newState.counter).toEqual(1);
  });
  test('should decrement the counter in state', () => {
    const state = { counter: 0 };
    const newState = doDecrement(state);
    expect(newState.counter).toEqual(-1);
  });
});
