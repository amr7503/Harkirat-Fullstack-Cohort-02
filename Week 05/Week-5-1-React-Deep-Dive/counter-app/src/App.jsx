import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Learn React",
    description: "Learn ReactJS library",
    completed: false
  }, {
     title: "Study DSA",
      description: "Learn Data Structures and Algorithms",
      completed: true
  },{
    title: "Learn Node",
    description: "Learn NodeJS library",
    completed: false
  }
])



 const [count,setCount] = useState(0);

  function addTodo(){
    // todos = [1 , 2]
    // [...todos, 3] -> [1 , 2, 3]
    setTodos([...todos, {
      title: "Random Todo " + count,
      description: "Random Description",
      completed: false
    }])
    setCount(count + 1);
  }

  return (
      <div><button onClick={addTodo}>Add a random Todo</button>
          <h1>Todo App</h1>
          {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
          <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
          
          {todos.map((todo) => {
              return <Todo title={todo.title} description={todo.description} />
          })
          }

           

      </div>
  )
}

// component 
function Todo(props){


  return <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      
  </div>

}


export default App
















































// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//       <div>
//            <CustomButton count={count} setCount={setCount}></CustomButton> <br /> <br />
//            <ResetButton count={count} setCount={setCount}></ResetButton>
//       </div>
//   )
// }

// // component 
// function CustomButton(props){

//   function onClickHandler(){
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>
//       Counter {props.count}
//   </button>

// }
// function ResetButton(props){

//   function onClickHandler(){
//     props.setCount(0 );
//   }

//   return <button onClick={onClickHandler}>
//       Reset
//   </button>

// }

// export default App
























// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   function onClickHandler(){
//   // Call the function with a new value
//   setCount(count + 1);
//  }

//   return (
//       <div>
//            <button onClick={onClickHandler}>Counter {count}</button>
//       </div>
//   )
// }

// export default App
