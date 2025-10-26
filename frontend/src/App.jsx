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
import ForgetPassword from './pages/ForgetPassword'
import { Navigate } from 'react-router-dom'
import EditProfile from './pages/EditProfile'
import Dashboard from './pages/Educator/Dashboard'
import Courses from './pages/Educator/Courses'
import CreateCourses from './pages/Educator/CreateCourses'
import getCreatorCourse from './customHooks/getCreatorCourse'
import EditCourses from './pages/Educator/EditCourses'
import getPublishedCourse from './customHooks/getPublishedCourse'

function App() {
  getCurrentUser()
  getCreatorCourse()
  getPublishedCourse()
  const {userData}=useSelector(state=>state.user)
  
  return (
    <>
    <ToastContainer/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={!userData?<Signup/>:<Navigate to={"/"}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={userData?<Profile/>:<Navigate to={"/signup"}/>}/>
        {/* <Route path='/forget' element={userData?<ForgetPassword/>:<Navigate to={"/forget"}/>}/> */}
        <Route path='/forget' element={<ForgetPassword />} />
        <Route path='/editprofile' element={userData?<EditProfile/>:<Navigate to={"/signup"}/>}/>
        <Route path='/dashboard' element={userData?.role==="educator"? <Dashboard/>:<Navigate to={"/signup"}/>}/>
        <Route path='/courses' element={userData?.role==="educator"? <Courses/>:<Navigate to={"/signup"}/>}/>
        <Route path='/createcourse' element={userData?.role==="educator"? <CreateCourses/>:<Navigate to={"/signup"}/>}/>
        <Route path='/editcourse/:courseId' element={userData?.role==="educator" ? <EditCourses/>:<Navigate to={"/signup"}/>}/>



        




  </Routes>
  </>
  )
}

export default App