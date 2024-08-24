import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //State variables are any variables that react need to consciously watch for changes in the component.And any time it's value changes setCount will be called and the component will be re-rendered.

  return (
    <div>
        <button onClick={() => setCount((Math.floor(Math.random()*100+1)))}>
          count is {count}
        </button>    
    </div>
  ) 
}  
 
export default App
