import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'Jonh Doe', email: 'jonh_doe@email.com' },
    { name: 'Jane Doe', email: 'jane_doe@email.com' },
  ];

  render(<UserList users={users} />);

  return { users };
}

beforeEach(() => {});

test('should render one row per user', () => {
  renderComponent();

  // eslint-disable-next-line
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('should render the email and name of each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
