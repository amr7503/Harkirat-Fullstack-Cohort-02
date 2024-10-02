import React from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("My name is Amaresh Swain")

  function updateTitle()
     {
      setTitle("My name is Amaresh "+Math.random());
     }   
    
  return (
     
      <div>
          <button onClick={updateTitle}>Update the title</button>
          <Header title={title}></Header>
          <Header title="Harkirat1"></Header>
          <Header title="Harkirat2"></Header>
          <Header title="Harkirat3"></Header>
          <Header title="Harkirat4"></Header>
      </div>
  )

}

     const Header = React.memo(function Header({title}) {
      return <div>
       {title}
      </div>
     })



export default App
