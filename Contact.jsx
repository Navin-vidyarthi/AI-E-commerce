import React from 'react'
import Tital from '../component/Tital'
import contect from '../assets/contect.jpg'
import Subscribe from '../component/Subscribe'
import Footer from '../component/Footer'

function Contact() {
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#1a1a2e] to-[#16213e] gap-[50px] pt-[80px]'>
        <Tital text1={'CONTECT'} text2={'US'}/>
        <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
            <div className='lg:w-[50%] w-[80%] flex items-center justify-center'>
                <img src={contect} alt='' className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-2xl'/>

            </div>
            <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
                <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px]'>Our Store</p>
                <p className='lg:w-[80%] w-[100%] text-[white]  md:text-[16px] text-[13px]'>
                    <p>Random station</p>
                    <p>patna,bihar,India</p>
                </p>
                <p className='lg:w-[80%] w-[100%] text-[white]  md:text-[16px] text-[13px]'>
                    <p>tel: +91-9334519636</p>
                    <p>admin@aicart.com</p>
                </p>
                <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px] mt-[10px]'>Careers at AiCart</p>
                <p className='lg:w-[80%] w-[100%] text-[white]  md:text-[16px] text-[13px]'>Learn more about our team and job opening</p>

            </div>

            

        </div>
        <Subscribe/>
        <Footer/>
      
    </div>
  )
}

export default Contact
