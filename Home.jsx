import React, { useEffect, useState } from 'react'
import Background from '../component/Background'
import Hero from '../component/Hero'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import Subscribe from '../component/Subscribe'
import Footer from '../component/Footer'


function Home() {
    let heroData=[
        {text1:"Special Launch Deal", text2: "Flat 35% OFF for New Customers!"},
        {text1:"Unleash Your Style with Confidence", text2: "Limited Time Only!"},
        {text1: "Uncover Your Next Favorite Look ",text2:"Shop Now!"},
        {text1: "Choose your Perfect Fasion Fit", text2: "Now on Sale!"}
    ]
    let [heroCount,setHeroCount] = useState(0)
    useEffect(()=>{
        let interval = setInterval(()=>{
            setHeroCount(prevCount => (prevCount === 3 ? 0: prevCount + 1))
            },3000) 
            return ()=> clearInterval(interval)
        },[]
    )

  return (
    <div className='overflow-x-hidden relative top-[70px] bg-gradient-to-l from-[#1a1a2e] to-[#16213e]'>
    <div className=' w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] md:bg-gradient-to-l from-[#1a1a2e] to-[#16213e]'>
        <Background heroCount={heroCount}/>
        <Hero
           heroCount={heroCount}
           setHeroCount={setHeroCount}
           heroData={heroData[heroCount]}
        />
      
    </div>
    
    <Product/>
    <OurPolicy/>
    <Subscribe/>
    <Footer/>
    </div>
  )
}

export default Home
