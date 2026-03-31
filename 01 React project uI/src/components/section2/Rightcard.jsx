import React from 'react'

const Rightcard = () => {
  return (
   <div className='w-3/5 relative mt-8  mx-1 max-h'>
   <div >
    <img className=' rounded-3xl object-fit h-100 w-60' src="https://i.pinimg.com/736x/1b/4d/df/1b4ddf8afc6c280795f0607148fefee9.jpg"  alt="" />
   <div className=' absolute bottom-0 top-0 w-60 text-white flex flex-col place-content-between'>
    <div>

    <h3 className=' bg-gray-200 rounded-full content-center items-center w-8 h-10' >     1</h3>
    </div>
    <div>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto reiciendis necessitatibus at eum perspiciatis voluptatum vero sunt odit quaerat vitae quod sit laudantium provident, explicabo tenetur cumque, quidem illum praesentium.
        </h4>
        <div>

        <button>Satisfied</button>
        </div>
    </div>
   </div>
   </div>
   </div>
  )
}

export default Rightcard
