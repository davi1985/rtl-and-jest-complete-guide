import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <strong>Add a User</strong>
      <UserForm onUserAdd={onUserAdd} />

      <hr />
      <strong>List of Users</strong>
      <UserList users={users} />
    </div>
  );
}

export default App;
