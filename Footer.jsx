import React from 'react'
import logo from '../assets/vcart logo.png'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77Px] md:mb-[0px]'>
        <div className='w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-[#b9d1f8] flex items-center justify-center md:px-[50px] px-[5px]'>
            <div className='md;w-[30%] w-[35%] h-[100%] flex  justify-center flex-col gap-[5px]'>
                <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src={logo} alt='' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'/>
                    <p className='text-[19px] md:text-[20px] text-[black]'>AiCart</p>
                </div>
                <p className='text-[15px] text-[#1e2223] hidden md:block'>AiCart is Your aii-in-one online shopping destination, offering top-equlity products, unbeatable deals, and fast delivery-all backed by trusted service designed to make your life easier every day.</p>
                <p className='text-[15px] text-[#1e2223] flex md:hidden'>Fast. Easy. Reliable. AiCart Shopping</p>
                

        </div>
        <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
                <div className='flax items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                    <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>COMPANY</p>
                 </div>
                 
                   <ul>
                    <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Home</li>
                    <li className='text-[15px] text-[#1e2223] md:block cursor-pointer'>About us</li>
                    <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Delivery</li>
                    <li className='text-[15px] text-[#1e2223] md:block cursor-pointer'>Privacy Policy</li>
                  </ul>

                </div>
                <div className='md:w-[25%] w-[40%] h-[100%] flex items-center justify-center flex-col text-center'>
                    <div className='flax items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                    <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>GET IN TOUCH</p>
                 </div>
                 <ul>
                    <li className='text-[15px] text-[#1e2223]  md:block cursor-pointer'>+91-9334519636</li>
                    <li className='text-[15px] text-[#1e2223]  md:block cursor-pointer'>contect@aicart.com</li>
                    <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>+1-123-456-7890</li>
                    <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>admin@aicart.com</li>
                  </ul>

                </div>
        </div>
        <div className='w-[100%] h-[2px] bg-slate-400'></div>
        <div className='w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center'>
            © {currentYear} AiCart. All rights reserved.
        </div>
      
    </div>
  )
}

export default Footer
