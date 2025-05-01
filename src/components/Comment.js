import React from 'react';
import { useContext } from 'react';
import UserInfoContext from '../context/UserInfoContext';

const Comment = () => {
  const { username, isAdmin } = useContext(UserInfoContext);

  return (
    <div>
      <p>Logged in as {username}</p>
      {isAdmin && <button>Edit comment</button>}
    </div>
  );
};

export default Comment;
