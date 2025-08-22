import React, { use, useContext } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/vcart logo.png'
import google from '../assets/google.jpg'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../util/Firebase'
import { userDataContext } from '../context/UserContext'






function Registration() {
    let {serverUrl}=useContext(authDataContext)
    let navigate = useNavigate()
    let [show,setShow] = useState(false)
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let {getCurrentUser} = useContext(userDataContext)
    
    const handleSignup = async (e) => {
        e.preventDefault()
        try {
        const result = await axios.post(serverUrl + '/api/auth/registration',{
            name,email,password
        },{withCredentials:true})
           console.log(result.data)
           toast.success("Registration Successfully")
           getCurrentUser()
           navigate("/")
           
        } catch (error) {
            console.log(error)
            toast.error("Registration Failed")
            
        }
    }
    const googleSignup= async () => {
        try {
            const response = await signInWithPopup(auth , provider)
            let user = response.user
            let name = user.displayName;
            let email = user.email

            const result = await axios.post(serverUrl + "/api/auth/googlelogin",{
                name,email
            },{withCredentials:true})
               console.log(result.data)
               toast.success("Registration Successfully")
               getCurrentUser()
               navigate("/")
            
        } catch (error) {
            console.log(error)
            toast.error("Registration Failed")
            
        }
    }
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#0f0f0f] to-[#1b2c3b]

 text-[white]
    flex flex-col items-center justify-start'>
        <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px]
             cursor-pointer' onClick={()=>navigate("/")}>
                <img className='w-[40px]' src={logo} alt=''/>
            <h1 className='text-[22px] font-sans'>AICart</h1>
           </div>
            <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
            <span className='text-[25px] font-semibold'>Registration Page</span>
            <span className='text-[16px]'>Welcome to AICart, Place your order</span>

            </div>
            <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#f42121]
            backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
                <form action="" onSubmit={handleSignup} className='w-[90%] h-[90%] flex flex-col items-center justify-start
             gap-[20px]'>
                    <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center
                    justify-center gap-[10px] py-[20px] cursor-pointer'onClick={googleSignup} >
                    <img src={google} alt='' className='w-[20px] rounded-lg'/> Registration with google

                    </div>
                    <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
                   <div className='w-[40%] h-[1px] bg-[#96969635]'></div> OR <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                </div>
                <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
                    <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm
                    rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Username' required  onChange={(e)=>setName(e.target.value)} value={name}/>
                    <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm
                    rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required
                    onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <input type={show?"text":'password'} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm
                    rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required
                    onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    {!show &&<IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[47%]' onClick={()=>setShow(prev => !prev)}/>}
                    {show &&<IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[47%]' onClick={()=>setShow(prev => !prev)} />}

                    <button className='w-[100%] h-[50px] bg-[#0808e8] rounded-lg flex flex-col items-center justify-center
                    mt-[20px] text-[17px] font-semibold cursor-pointer'> Create Account </button>
                    <p className='flex gap-[10px]'>You have any account?<span className='text-[#1616e5cf] font-semibold cursor-pointer' 
                    onClick={()=>navigate("/login")}>Create New Account</span></p>

                </div>

                </form>

            </div>

        
      
    </div>
  )
}

export default Registration



