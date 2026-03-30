import React from 'react'
import Navleft from './navleft'
import Navright from './navright'

const Navbar = () => {
  return (
    <div className='flex text-xs uppercase my-4 mx-22 place-content-between '>
      <Navleft/>
      <Navright/>


      
    </div>
  )
}

export default Navbar
