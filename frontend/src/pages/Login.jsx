import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext} from '../context/UserContext'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const LoginUser =  {
            email: email,
            password: password
          }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, LoginUser)

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/')
    }
    setEmail('')
    setPassword('')

    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border-1 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={(e) => {
      submitHandler(e)
    }}>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg" />
          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-lg" />
          <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600">
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <a href="/signup" className="text-pink-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
