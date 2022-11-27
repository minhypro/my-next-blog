import React, { useState } from 'react';
import Layout from '../components/Layout';

type Props = {};

function Login({}: Props) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'password' | 'username') => {
    setLoginData((prev) => {
      switch (type) {
        case 'password':
          return { ...prev, password: e.target.value };
        case 'username':
          return { ...prev, username: e.target.value };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(loginData);
  };

  return (
    <Layout>
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col m-auto max-w-sm">
          <label htmlFor="username">Username</label>
          <input className='border-2 border-sky-500' name="username" value={loginData.username} onChange={(e) => handleChange(e, 'username')} type='text' />
          <label htmlFor="password">Password</label>
          <input className='border-2 border-sky-500' name="password" value={loginData.password} onChange={(e) => handleChange(e, 'password')} type='password' />
          <button className='border-2 border-sky-500 mt-2' type='submit' >Login</button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
