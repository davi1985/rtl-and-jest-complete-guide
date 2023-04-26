import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('should render one row per user', () => {
  const users = [
    { name: 'Jonh Doe', email: 'jonh_doe@email.com' },
    { name: 'Jane Doe', email: 'jane_doe@email.com' },
  ];

  const { container } = render(<UserList users={users} />);

  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('should render the email and name of each user', () => {
  const users = [
    { name: 'Jonh Doe', email: 'jonh_doe@email.com' },
    { name: 'Jane Doe', email: 'jane_doe@email.com' },
  ];

  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
