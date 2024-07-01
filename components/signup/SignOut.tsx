'use client'
import React from 'react';
import axios from 'axios';

const SignOut = () => {
  const handleSignout = async () => {
    try {
      const response = await axios.post(
        'http://social-yield-capital.vercel.app/auth/signOut',
        {},
        { withCredentials: true }
      );
      console.log(response.data);
      // Optionally, you can handle signout logic here, e.g., redirect to login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  const handleSignoutforlocal = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/signOut',
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
   <div className="pt-20 bg-red-500">
     <button onClick={handleSignout} className=''>
      Sign Out
    </button>
    <button onClick={handleSignoutforlocal} className=''>
      Sign Out for local
    </button>
   </div>
  );
};

export default SignOut;
