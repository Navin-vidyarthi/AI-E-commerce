import React from 'react'
import Tital from '../component/Tital'
import about from '../assets/about.webp'
import Subscribe from '../component/Subscribe'
import Footer from '../component/Footer'

function About() {
  return (
    <div className='w-[99vw] md:w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#1a1a2e] to-[#16213e]
 flex items-center flex-col justify-center gap-[50px] mt-[70px] '>
        <Tital text1={'ABOUT'} text2={'US'}/>
        <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
            <div className='lg:w-[50%] w-[100%]  flex items-center justify-center'>
                <img src={about} alt="" className='lg:w-[65%] w-[80%] h-[50%] shadow-black shadow-md rounded-sm'/>

            </div>
            <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
                <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'> AiCart born for smart, seamless shopping-create to deliver quality products, trending styles, and everyday essentials in one place. with reliable service, fast delivery, and great value, Aicart make your online shopping exprience simple, satisfing, and stress-free.</p>
                <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>Modern eCommerce is no longer about just selling online — it’s about delivering seamless, smart, scalable experiences across every possible touchpoint. Businesses that embrace headless architecture, personalization, automation, and analytics are leading the charge in this competitive landscape.</p>
                <p className='lg:w-[80%] w-[100%] text-[white] mg:text-[18px] mt-[10px] font-bold text-[15px]'>Our Mission</p>
                <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>To empower every customer with a seamless, personalized, and secure online shopping experience — built on innovation, trust, and a relentless commitment to quality.We aim to redefine eCommerce by blending cutting-edge technology with customer-first values. From product discovery to final delivery, we’re dedicated to making every step easy, fast, and reliable — no matter where you are or what you need.</p>

            </div>
        </div>
        <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
            <Tital text1={'WHY'} text2={'CHOOSE US'}/>
            <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px] '>
                <div className='lg:w-[33%] w-[110%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
                    <b className='text-[20px] font-semibold text-[#bff1f9]'> Quality Assurance</b>
                    <p>Our Quality Assurance process is designed to ensure that every product we offer, every service we deliver, and every customer interaction reflects the highest standards.</p>

                </div>
                <div className='lg:w-[33%] w-[110%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
                    <b className='text-[20px] font-semibold text-[bff1f9]'>Convenience</b>
                      <p>convenience is at the core of everything we do. From effortless browsing to smooth checkout and fast delivery, we’ve designed every step of your shopping journey to save you time and hassle.</p>
                </div>
                <div className='lg:w-[33%] w-[110%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
                    <b className='text-[20px] font-semibold text-[bff1f9]'>Exceptional Customer Service</b>
                    <p>we believe that great service isn't a feature — it's a standard. From your first click to your final delivery (and beyond), our team is here to make sure your shopping experience is smooth, stress-free, and genuinely enjoyable.</p>

                </div>

            </div>
        </div>
        <Subscribe />
        <Footer/>
      
    </div>
  )
}

export default About
