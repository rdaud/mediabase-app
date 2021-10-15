import { render, screen } from '@testing-library/react';
import App from './App';
import { useDispatch } from 'react-redux'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


const add = (a,b) => {
  return a + b
}

test('my first test', () => {
  const action = add(3,4)
  expect(action).toBe(7)
})

