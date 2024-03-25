import { useState } from "react"
import Cards from "../components/home/Cards.jsx"
import Hero from "../components/home/Hero.jsx"
import  FooterComponent  from "../components/Footer.jsx"


const Home = () => {
 

  return (
    <div className="">
        <Hero />
    
        <Cards />
      <FooterComponent/>
    </div>
  )
}

export default Home