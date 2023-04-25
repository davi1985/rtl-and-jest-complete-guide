import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', () => {
  // NOT THE BEST IMPLEMENTATION
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  // try render component
  render(<UserForm onUserAdd={callback} />);

  // find the two input
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // simutate typing in a name
  userEvent.click(nameInput);
  userEvent.keyboard('Jonh Doe');

  // simutate typing in a email
  userEvent.click(emailInput);
  userEvent.keyboard('jonh_doe@email.com');

  // find the button
  const button = screen.getByRole('button');

  // simulate clicking the button
  userEvent.click(button);

  // assertion to make sure 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({
    email: 'jonh_doe@email.com',
    name: 'Jonh Doe',
  });
});
