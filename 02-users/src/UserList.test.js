import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('should render one row per user', () => {
  //render component
  const users = [
    { name: 'Jonh Doe', email: 'jonh_doe@email.com' },
    { name: 'Jane Doe', email: 'jane_doe@email.com' },
  ];
  render(<UserList users={users} />);

  // find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('should render the email and name of each user', () => {});
