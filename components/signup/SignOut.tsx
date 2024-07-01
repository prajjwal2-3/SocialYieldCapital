// SignoutButton.js
import React from 'react';
import axios from 'axios';

const SignOut = () => {
  const handleSignout = async () => {
    try {
      const response = await axios.post(
        'https://auth-server-bun.onrender.com/auth/signOut',
        {},
        { withCredentials: true }
      );
      console.log(response.data);
      // Optionally, you can handle signout logic here, e.g., redirect to login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button onClick={handleSignout}>
      Sign Out
    </button>
  );
};

export default SignOut;
