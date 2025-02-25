import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('')
    const navigate = useNavigate()

    const {user, setUser} = React.useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newUser = 
        {
          fullname: fullname,
          email: email,
          password: password
        }
      
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, newUser)
  
        if(response.status === 201){
          const data = response.data
  
          setUser(data.user)
          localStorage.setItem('token', data.token)
  
          navigate('/')
        }
  
      setFirstname('')
      setLastname('')
      setEmail('')
      setPassword('')
    }
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border-1 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center ">Sign Up</h2>
        <form onSubmit={(e) => {
       submitHandler(e)
     }}>
          <input type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value)
          }}
          placeholder="Full Name" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}  placeholder="Email" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="password" 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}placeholder="Password" className="w-full p-3 mb-4 border rounded-lg" />
          <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <a href="/login" className="text-pink-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
