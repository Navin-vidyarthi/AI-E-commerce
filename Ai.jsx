import React, { useContext, useState } from 'react'
import ai from '../assets/ai.webp'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Ai() {
    let {showSearch,setShowSearch}= useContext(shopDataContext)
    let navigate =useNavigate()
    let [activeAi,setActiveAi] = useState(false)
    

    function speak(message){
        let utterence = new SpeechSynthesisUtterance(message)
        window.speechSynthesis.speak(utterence)
    }
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new speechRecognition()
    if(!recognition){
        console.log('not supported')
    }



    recognition.onresult = (e)=>{
        const transcript = e.results[0][0].transcript.trim()
        if(transcript.toLowerCase().includes('search') && transcript.toLowerCase().includes('open') && !showSearch){
            speak(" ok naveen opening search")
            setShowSearch(true)
            navigate('/collection')
        }
        else if(transcript.toLowerCase().includes('search') && transcript.toLowerCase().includes('close') && showSearch){
            speak('ok naveen closing serch')
            setShowSearch(false)

        }
        else if(transcript.toLowerCase().includes('collection') || transcript.toLowerCase().includes('Product') || transcript.toLowerCase().includes('product')){
            speak(" ok naveen opening collection page")
            navigate("/collection")

        }
        else if(transcript.toLowerCase().includes('about') && transcript.toLowerCase().includes('aboutpage')){
            speak(' ok naveen opening about page')
            navigate('/about')
            setShowSearch(false)
        }
        else if(transcript.toLowerCase().includes('home') || transcript.toLowerCase().includes('homepage') ){
            speak('ok naveen opening home page')
            navigate('/')
            setShowSearch(false)
        }
        else if(transcript.toLowerCase().includes('cart') || transcript.toLowerCase().includes('kaat') || transcript.toLowerCase().includes('caat')){
            speak('ok naveen opening your cart')
            navigate("/cart")
            setShowSearch(false)
        }
        else if(transcript.toLowerCase().includes('contact') ){
            speak(" ok naveen opening contect page")
            navigate('/contact')
            setShowSearch(false)
        }
        else if(transcript.toLowerCase().includes('order') || transcript.toLowerCase().includes('myorders') || transcript.toLowerCase().includes('orders') || transcript.toLowerCase().includes("my order")){
            speak(' ok naveen opening your orders page')
            navigate('/order')
            setShowSearch(false)
        }
        else{
            toast.error("Try Again")
        }
    }
    recognition.onend=()=>{
        setActiveAi(false)
    }
  return (
    <div className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]'onClick={()=>{recognition.start();setActiveAi(true)}}>
        <img src={ai} alt=""  className={`w-[100px] cursor-pointer rounded-full ${activeAi ? 'translate-x-[10%] translate-y-[10%] scale-125' : 'translate-x-[0] translate-y-[0] scale-100'} translate-transform`} style={{filter:`${activeAi ? "drop-shadow(0px 0px 30px #00d2fc)" :"drop-shadow(0px 20px black)"}`}}/>
      
    </div>
  )
}

export default Ai
