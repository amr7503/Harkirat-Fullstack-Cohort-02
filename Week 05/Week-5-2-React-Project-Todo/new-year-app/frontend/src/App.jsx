import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
  })

  // This is a wrong way to fetch data from the server 
  // because it will make an infinite number of requests to the server
  // as the state is changing and the component is re-rendering again and again fetch getting called again rerendering the component
  // can be solved by using useEffect hook

  // Deployment
  // render network for frontend at render.com
  // vercel for backend at vercel.com

  return (
    
       <div>
           <CreateTodo /> 
          <Todos todos={todos} /> 
          
      </div>
  )
}

export default App
