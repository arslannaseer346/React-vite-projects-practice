import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const SubmitHandler= (e)=>{
    e.preventDefault()
    console.log("form submited");
    console.log(title);
    console.log(details);
    
  }
  return (
    <div className='bg-black h-screen w-full lg:flex text-white gap-5 '>
        <form onSubmit={(e)=>{SubmitHandler(e)}} className='gap-4 p-10 flex-col flex lg:w-1/2 items-start '>
          <h1 className=' text-4xl font-bold'>Add Notes</h1>
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" className='w-full font-medium outline-none px-5 py-2 rounded border-2' placeholder='Enter Notes Title' />
          <textarea value={details} onChange={(e)=>{setDetails(e.target.value)}} className='w-full font-medium outline-none h-32 flex items-start px-5 py-2 rounded  border-2' placeholder='Enter Details ' id=""></textarea>
          <button className= 'w-full bg-white font-medium outline-none text-black px-5 py-2 rounded '>Add Notes</button>
        </form>
        <div className=' lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className=' text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 p-2 h-full overflow-auto mt-5 '>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          
        
        </div>
        </div>
    </div>
  )
}

export default App
