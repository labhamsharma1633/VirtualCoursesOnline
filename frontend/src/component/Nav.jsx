import React from 'react'
import logo from "../assets/logo.jpg"
import { IoPersonCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import { toast } from 'react-toastify';
import axios from "axios";
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSplitCross } from "react-icons/gi";

function Nav(){
    const {userData}=useSelector(state=>state.user)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [show,setShow]=useState(false);
    const [showHam,setShowHam]=useState(false);

    const handleLogout=async()=>{
        try{
            const result=await axios.get(serverUrl+"/api/auth/logout",{withCredentials:true})
            
            dispatch(setUserData(null));
            console.log(result.data);
            toast.success("Logout Successful");

        }
        catch(error){
            console.log(error);
            toast.error(error.response?.data?.message||"Logout failed");


        }
    }
  return (
    <div>
    <div className='w-[100%] h-[70px] fixed top-0 px-[20px] py-[10px] flex items-center justify-between bg-[#00000047] z-10'>
        <div className='lg:w-[20%] w-[40%] lg:pl-[50px]'>
            <img src={logo} alt="" className='w-[60px] rounded-[5xl] border-2 border-white'/>
        </div>
        <div className='w-[30%] lg:flex items-center justify-center gap-4 hidden'>
            {!userData &&<IoPersonCircleSharp className='w-[50px] h-[50px] fill-black cursor-pointer' onClick={()=>setShow(prev=>!prev)}/>}
            {userData && <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white cursor-pointer'onClick={()=>setShow(prev=>!prev)}>
                {userData?.name.slice(0,1).toUpperCase()}

            </div>}

            {userData?.role==="educator" &&<div className='px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[18px] font-light cursor-pointer'>Dashboard</div>}
            {!userData?<span className='px-[20px] py-[10px] border-2 border-white text-white rounded-[10px] text-[18px] font-light cursor-pointer bg-[#000000d5]' onClick={()=>navigate("/login")}>Login</span>:
            <span className='px-[20px] py-[10px] bg-white text-black rounded-[10px] shadow-sm shadow-black text-[18px] cursor-pointer'onClick={handleLogout}>Logout</span>}
            {show && <div className='absolute top-[110%] right-[15%] flex items-center flex-col justify-center gap-2 text-[16px] rounded-md bg-[white] px-[15px] py-[10px] border-[2px] border-black hover:border-white hover:text-white cursor-pointer hover:bg-black'>
                <span className='bg-[black] text-white px-[30px] py-[10px] rounded-2xl hover:bg-gray-600'onClick={()=>navigate("/profile")}>My Profile</span>
                <span className='bg-[black] text-white px-[30px] py-[10px] rounded-2xl hover:bg-gray-600'>My Courses</span>
                {!userData?<span className='bg-[black] text-white px-[30px] py-[10px] rounded-2xl hover:bg-gray-600' onClick={()=>navigate("/login")}>Login</span>:
            <span className='px-[20px] py-[10px] bg-white text-black rounded-[10px] shadow-sm shadow-black text-[18px] cursor-pointer'onClick={handleLogout}>Logout</span>}
                

            </div>}
            




        </div>
        <RxHamburgerMenu className='w-[35px] h-[35px] lg:hidden text-black cursor-pointer'onClick={()=>setShowHam(prev=>!prev)}/>

        <div className={`fixed top-0 w-[100vw] h-[100vh] bg-[#000000d6] flex items-center justify-center flex-col gap-5 z-10 lg:hidden ${showHam ? "translate-x-0 transition duration-600":"-translate-x-full transition duration-600"}`}>
        <GiSplitCross className='w-[35px] h-[35px] text-white absolute top-5 right-[4%]'onClick={()=>setShowHam(prev=>!prev)}/>
            {!userData && <IoPersonCircleSharp className='w-[50px] h-[50px] fill-black cursor-pointer'/>}
            {userData && <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white cursor-pointer'>
            {userData?.name.slice(0,1).toUpperCase()}
            </div>}
            {userData?.role==="educator" &&<div className='w-[200px] h-[65px] border-2 border-white text-white bg-[black] flex items-center justify-center rounded-[10px] text-[18px] font-light cursor-pointer'onClick={()=>navigate("/profile")}>MyProfile</div>}
            {userData?.role==="educator" &&<div className='w-[200px] h-[65px] border-2 border-white text-white bg-[black] flex items-center justify-center rounded-[10px] text-[18px] font-light cursor-pointer'>Dashboard</div>}
            {userData?.role==="educator" &&<div className='w-[200px] h-[65px] border-2 border-white text-white bg-[black] flex items-center justify-center rounded-[10px] text-[18px] font-light cursor-pointer'>MyCourses</div>}
            {!userData ?<span className='w-[200px] h-[65px]border-2 border-white flex items-center justify-center text-white bg-[black] rounded-[10px]text-[18px] font-light cursor-pointer'onClick={()=>navigate("/login")}>Login</span>:<span  className='w-[200px] h-[65px]border-2 border-white flex items-center justify-center text-white bg-[black] rounded-[10px]text-[18px] font-light cursor-pointer'onClick={handleLogout}>LogOut</span>}
            
            


        </div>

    </div>
    </div>
  )
}

export default Nav