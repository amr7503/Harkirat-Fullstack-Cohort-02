import { useState } from 'react'
import './App.css'

function App() {
  

  return (
     
      <div>
        <HeaderWithButton/>
        <Header title="My name is Jaggu"></Header>
        <Header title="kallu kalia"></Header>
      </div>
  )
  

    function HeaderWithButton(){
      const [title, setTitle] = useState("My name is Amaresh Swain")

      function updateTitle()
     {
      setTitle("My name is Amaresh "+Math.random());
     }   
      return <div>
          <button onClick={updateTitle}>Update the title</button>
          <Header title={title}></Header>
      </div>

    }


     function Header({title}) {
        //console.log('Rendered')
      return <div>
       {title}
      </div>
     }
}


export default App
