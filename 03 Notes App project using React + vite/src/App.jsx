import React from 'react'

const App = () => {
  return (
    <div className='bg-black h-screen w-full text-white'>
        <form className=' flex justify-between items-start p-10'>
          <div className='w-1/2 flex flex-col items-start gap-4'>
          <input type="text" className='w-full outline-none px-5 py-2 rounded border-2' placeholder='Enter Notes Title' />
          <textarea  className='w-full outline-none h-32 flex items-start px-5 py-2 rounded  border-2' placeholder='Enter Details ' id=""></textarea>
          <button className= 'w-full bg-white  outline-none text-black px-5 py-2 rounded '>Add Notes</button>
          </div>
          
        </form>
    </div>
  )
}

export default App
