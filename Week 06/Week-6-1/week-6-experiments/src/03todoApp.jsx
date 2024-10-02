import React from 'react';
import { useState } from 'react'
import './App.css'

let counter=4;

function App() {
  const [todo, setTodos] = useState([{
    id: 1,
    title: "Learn React",
    description: "Learn React and its concepts"
  }, {
    id: 2,
    title: "Learn Node",
    description: "Learn Node and its concepts"
  }, {
    id: 3,
    title: "Learn Express",
    description: "Learn Express and its concepts"
  }])

  function addTodo(){
    // setTodos([...todo, {  //The weird syntax is a spread operator
    //   id: 4,
    //   title: "Learn MongoDB",
    //   description: "Learn MongoDB and its concepts"
    // }])

    //       OR

    const newTodo = [];
    for(let i=0; i<todo.length; i++){
      newTodo.push(todo[i])
    }
    //newTodos == todos
    newTodo.push({
      id: counter++,
      title: "Learn MongoDB",
      description: "Learn MongoDB and its concepts"
    })
    //existing ones + new ones
    setTodos(newTodo)
  }

    
  return (
      <div>
        <button onClick={addTodo}>Add a todo</button>
          {todo.map(todo =><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
          {/* {todo.map(function(todo){
            return <Todo title={todo.title} description={todo.description}/>
          })} */}
      </div>
  )

}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}


export default App
