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

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

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

test('empties the two inputs when form is submitted', () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  userEvent.click(nameInput);
  userEvent.keyboard('jane');

  userEvent.click(emailInput);
  userEvent.keyboard('jane@jane.com');

  userEvent.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
