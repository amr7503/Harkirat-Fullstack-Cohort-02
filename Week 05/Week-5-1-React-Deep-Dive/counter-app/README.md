# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#APP_1

import { useState } from 'react'
//import './App.css'

// let state={
//   count:0
// }



function App() {
  const [count, setCount] = useState(0)

  function onClickHandler(){
  // Call the function with a new value
  setCount(count + 1);
 }

  return (
      <div>
           <button onClick={onClickHandler}>Counter {count}</button>
      </div>
  )
}

export default App
