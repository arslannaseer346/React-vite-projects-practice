import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Lefttext from './Lefttext'
import Rightcard from './Rightcard'
const Hero = (props) => {
  return (
    <div className=' flex h-full mx-24 justify-between '>
    <Lefttext />
    <Rightcard  user={props.user}/>
    </div>
  )
}

export default Hero
