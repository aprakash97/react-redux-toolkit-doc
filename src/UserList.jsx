import User from "./User";

const UserList = ({ users, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
