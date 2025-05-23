import React from 'react';

const Comment = ({ username, isAdmin }) => {
  return (
    <div>
      <p>Logged in as {username}</p>
      {isAdmin && <button>Edit comment</button>}
    </div>
  );
};

export default Comment;
