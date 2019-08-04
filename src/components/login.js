import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import initState from '../data';

const Login = () => {
  const [hasError, setError] = useState(false);
  const [username, setUsername] = useState('');

  if (localStorage.user) {
    useEffect(() => navigate('/comments/'));
  }

  return (
    <div className="w-full max-w-md bg-white shadow-md px-8 pt-4 rounded">
      <form
        onSubmit={e => {
          e.preventDefault();

          const user = initState.users.find(u => u.name === username);

          if (user) {
            localStorage.user = user.id;
            navigate('/comments/');
          } else {
            setError(true);
          }
        }}
      >
        <div className="mb-4">
          <label className="text-grey text-sm font-bold mb-4">Username</label>
          <input
            name="username"
            value={username}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Alice"
            onChange={e => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="mb-4">
          <label className="text-grey text-sm font-bold mb-4">Password</label>
          <input
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="*********"
          ></input>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        {hasError && (
          <div className="mt-4 text-red-500">Incorrect username.</div>
        )}
      </form>
    </div>
  );
};

export default Login;
