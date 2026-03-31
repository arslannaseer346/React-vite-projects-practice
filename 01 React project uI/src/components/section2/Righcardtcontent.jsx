import React from 'react'

const Righcardtcontent = () => {
  return (
      <div className='w-60 h-full relative  shrink-0 overflow-hidden' >
    <img className=' rounded-3xl object-cover h-full w-full' src="https://i.pinimg.com/736x/1b/4d/df/1b4ddf8afc6c280795f0607148fefee9.jpg"  alt="" />
   <div className=' absolute left-0 top-0 w-full h-full text-white flex flex-col justify-between'>
    <div>
    <h3 className=' font-bold  mt-4 mx-5 bg-gray-200 flex rounded-full justify-center items-center w-10 h-10 text-2xl' >1</h3>
    </div>
    <div >
        <h4 className=' text-sm px-3'>Lorem ipsum, dolor sit voluptatum vero sunt odit quaerat vitae quod sit laudantium provident, explicabo tenetur cumque, quidem illum praesentium.
        </h4>
        <div className='flex justify-between mt-6'>
        <button className=' bg-blue-600 py-1 px-4 mb-2 rounded-2xl mx-1'> Satisfied</button>
        <button className=' bg-blue-600 py-1 px-4 mb-2 rounded-2xl mx-1'><i className="ri-arrow-right-line"></i></button>
        </div>
    </div>
   </div>
   </div>
    
  )
}

export default Righcardtcontent
