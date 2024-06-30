'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter()
  const [cookie,setcookie]=useState()
 
  
  
  
 
  
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const userData = {
       otp,
    };

    // Retrieve cookies


    try {
      const response = await axios.post('https://auth-server-bun.onrender.com/auth/verifySignUpOtp', userData, {
        
        withCredentials:true
      });

      if (response.status === 200) {
        router.push('/dashboard')
        console.log('OTP verification successful:', response.data);
      } else {
        console.error('OTP verification failed:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleSubmittolocal = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const userData = {
       otp,
    };

    // Retrieve cookies


    try {
      const response = await axios.post('http://localhost:8080/auth/verifySignUpOtp', userData, {
        
        withCredentials:true
      });

      if (response.status === 200) {
        router.push('/dashboard')
        console.log('OTP verification successful:', response.data);
      } else {
        console.error('OTP verification failed:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Verify OTP
        </button>
        <button onClick={handleSubmittolocal} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Verify OTP for local
        </button>
      </form>
    
        
    </div>
  );
};

export default VerifyOtp;
