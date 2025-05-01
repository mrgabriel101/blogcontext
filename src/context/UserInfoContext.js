import React, { createContext } from 'react';

// Create the context
const UserInfoContext = createContext({
  username: 'Guest',
  isAdmin: false,
});

export default UserInfoContext;
