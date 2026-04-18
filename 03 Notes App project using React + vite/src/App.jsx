import React, { useState } from 'react'

const App = () => {

// use state managing task here

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  // event handler function working on submition of form button

  const SubmitHandler= (e)=>{
    e.preventDefault()
    console.log("form submited");

//copy array to another array bcz previous task also remian
     const newTask=[...task]
     newTask.push({title,details})
     setTask(newTask)
     
     
     
     

    
    setTitle('')
    setDetails('')
  }
//delete notes
const deleteNotes=(idx)=>{
 const copyTask=[...task]
 copyTask.splice(idx,1)
 setTask(copyTask)
}

  // Ui designed here

  return (
    <div className='bg-black h-screen w-full lg:flex text-white gap-5 '>
        <form onSubmit={(e)=>{SubmitHandler(e)}} className='gap-4 p-10 flex-col flex lg:w-1/2 items-start '>
          <h1 className=' text-4xl font-bold'>Add Notes</h1>
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" className='w-full font-medium outline-none px-5 py-2 rounded border-2' placeholder='Enter Notes Title' />
          <textarea value={details} onChange={(e)=>{setDetails(e.target.value)}} className='w-full font-medium outline-none h-32 flex items-start px-5 py-2 rounded  border-2' placeholder='Enter Details ' id=""></textarea>
          <button className= 'w-full active:scale-95 bg-white font-medium outline-none text-black px-5 py-2 rounded '>Add Notes</button>
        </form>





        <div className=' lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className=' text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 p-2 h-full overflow-auto mt-5 '>
          {task.map((elem,idx)=>{

          return <div key={idx} className="flex justify-between items-start flex-col h-52 w-40 rounded-2xl text-black px-4 pt-5 pb-3 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
            <h3 className=' text-xl font-bold leading-tight'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-gray-500 font-medium'>{elem.details}</p>

            </div>
            <button onClick={()=>{
              deleteNotes(idx)
            }} className='w-full bg-red-500 py-1 text-xs rounded cursor-pointer active:scale-95 font-bold text-white'>Delete</button>
          </div>
          })}
          
          
        
        </div>
        </div>
    </div>
  )
}

export default App
