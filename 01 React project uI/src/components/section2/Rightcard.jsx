import React from 'react'
import Righcardtcontent from './Righcardtcontent'
import { useFormStatus } from 'react-dom'
const Rightcard = (props) => {
  return (

    
   <div className='w-3/5 overflow-x-auto gap-6 custom-scroll flex flex-nowrap mt-8  mx-1 h-115'>
    {
        props.user.map(function(elem,index){
       return ( <Righcardtcontent key={index} id={index+1} img={elem.img} tag={elem.tag}/> )
        })
    }
    </div> 
  )
}
export default Rightcard
