import { useState } from "react";

const User = ({ user, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={user.text}
          onChange={(e) => {
            onChange({
              ...user,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {user.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={user.done}
        onChange={(e) => {
          onChange({
            ...user,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </label>
  );
};

export default User;
