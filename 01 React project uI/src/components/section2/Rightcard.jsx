import React from 'react'
import Righcardtcontent from './Righcardtcontent'
const Rightcard = () => {
  return (
   <div className='w-3/5 overflow-x-auto gap-6 custom-scroll flex flex-nowrap mt-8  mx-1 h-115'>
      <Righcardtcontent />
      <Righcardtcontent />
      <Righcardtcontent />
      <Righcardtcontent />
      <Righcardtcontent />
   </div>
  )
}

export default Rightcard
