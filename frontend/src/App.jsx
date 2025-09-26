import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
export const serverUrl="http://localhost:8000"
import {ToastContainer} from "react-toastify"
import getCurrentUser from './customHooks/getCurrentUser'
import { useSelector } from 'react-redux'
import Profile from './pages/Profile'

function App() {
  getCurrentUser()
  const {userData}=useSelector(state=>state.user)
  
  return (
    <>
    <ToastContainer/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={userData?<Signup/>:<Navigate to={"/"}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={userData?<Profile/>:<Navigate to={"/signup"}/>}/>


    </Routes>
    </>
  )
}

export default App