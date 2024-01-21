import React from 'react';
import { Link } from 'react-router-dom';

const handleRegisterClick = () => {
    alert('You have successfully registered!');
  };


const Register = () => (
  <div className="bg-black-gradient h-screen flex items-center justify-center">
    <div className="bg-blue-gradient w-72 h-96 rounded-lg p-8 box-shadow text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Register</h1>
      <form className="flex flex-col">
        <label htmlFor="username" className="text-lg mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="p-2 mb-4 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
          required
        />

        <label htmlFor="password" className="text-lg mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="p-2 mb-6 bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-500"
          required
        />

        <button
          type="submit"
          onClick={handleRegisterClick}
          className="bg-blue-gradient text-white rounded-full py-2 px-4 mt-3 hover:bg-white hover:text-black transition duration-300"
        >
          Register
        </button>
      </form>

      
    </div>
  </div>
);

export default Register;
