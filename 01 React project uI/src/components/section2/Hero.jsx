import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Lefttext from './Lefttext'
import Rightcard from './Rightcard'
const Hero = () => {
  return (
    <div className=' flex h-full mx-24 place-content-between '>
    <Lefttext />
    <Rightcard />
    </div>
  )
}

export default Hero
