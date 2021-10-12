import { render, screen } from '@testing-library/react';
import App from './App';
import SignInAction from './redux/action-creators'
import { dispatch, useDispatch } from 'react-redux'

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


test('try to sign-in', () => {
  const dispatch = useDispatch()
  const data = useDispatch(SignInAction({
    email: "rodrigo.daud@rga.com",
    password: "Teste123!"
  }))

  expect(data).toBe('')
})

