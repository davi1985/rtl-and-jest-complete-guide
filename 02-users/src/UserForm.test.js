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
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  userEvent.click(nameInput);
  userEvent.keyboard('Jonh Doe');

  userEvent.click(emailInput);
  userEvent.keyboard('jonh_doe@email.com');

  const button = screen.getByRole('button');

  userEvent.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'Jonh Doe',
    email: 'jonh_doe@email.com',
  });
});
