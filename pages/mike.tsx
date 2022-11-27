import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import { GlobalState, GlobalDispatch } from '../context/AuthContext';
import { AuthActionTypes } from '../context/authContextConstants';
import axiosClient from '../lib/api/axios/axiosClient';

export default function Login() {
  const [ inputData, setInputData] = useState({ username: '', password: '' });
  const { userInfo } = useContext(GlobalState)
  const dispatch = useContext(GlobalDispatch);
  const router = useRouter()

  if(userInfo) {
    router.push('/samsam')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'password' | 'username') => {
    setInputData((prev) => {
      switch (type) {
        case 'password':
          return { ...prev, password: e.target.value };
        case 'username':
          return { ...prev, username: e.target.value };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: AuthActionTypes.LOGIN_REQUEST, data: null });
    try {
      const result = await axiosClient.post('/login', inputData)
      dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, data: result.data })
    } catch (error: any) {
      dispatch({ type: AuthActionTypes.LOGIN_FAILED, data: error.response.data })
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col m-auto max-w-sm">
          <label htmlFor="username">Username</label>
          <input className='border-2 border-sky-500' name="username" value={inputData.username} onChange={(e) => handleChange(e, 'username')} type='text' />
          <label htmlFor="password">Password</label>
          <input className='border-2 border-sky-500' name="password" value={inputData.password} onChange={(e) => handleChange(e, 'password')} type='password' />
          <button className='border-2 border-sky-500 mt-2' type='submit' >Login</button>
        </form>
      </div>
    </Layout>
  );
}
