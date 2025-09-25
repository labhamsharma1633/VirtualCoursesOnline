import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'


export const serverUrl="http://localhost:8000"
import {ToastContainer} from "react-toastify"
import getCurrentUser from './customHooks/getCurrentUser'

function App() {
  getCurrentUser()
  
  return (
    <>
    <ToastContainer/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>


    </Routes>
    </>
  )
}

export default App