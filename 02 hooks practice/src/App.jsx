import React, { useState } from 'react'

const App = () => {
  const [num,setnum]=useState(10)
  function changevalue(){
    setnum(num+1)
  }
  return (
    
    <div>
      <h1>value of num is {num}</h1>
      <button onClick={changevalue}>click here</button>
    </div>
  )
}

export default App
