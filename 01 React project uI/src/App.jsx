import React from 'react'
import Navbar from './components/section1/navbar.jsx'
import Hero from './components/section2/Hero.jsx'

const App = () => {
  const Users=[
    { img:'https://i.pinimg.com/736x/55/61/86/55618658f7bb6ba6417989771a95e570.jpg',
      int:'',
      tag:'Satisfied'


    },
    {img:'https://i.pinimg.com/736x/3d/bb/21/3dbb21d2806caf3f93b04aa6457af482.jpg',
      int:'',
      tag:'UnderServed'
},
    {img:'https://i.pinimg.com/1200x/b5/5c/0d/b55c0d2229285a0886332b0b4e23268a.jpg',
      int:'',
      tag:'underbanked'
},
{img:'https://i.pinimg.com/1200x/b5/5c/0d/b55c0d2229285a0886332b0b4e23268a.jpg',
      int:'',
      tag:'underbanked'
}
  ]
  return (
    <div>
      <Navbar />
      <Hero user={Users} />

    </div>
  )
}

export default App
