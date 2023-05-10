import User from "./User";

const UserList = ({ users, onChangeUser, onDeleteUser }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} onChange={onChangeUser} onDelete={onDeleteUser} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
