import { useEffect, useState } from "react";


function App(){
  const [firstTitle, setFirstTitle] = useState("My name is Amaresh");
  let title= ["My name is Amaresh Swain","My name is Amaresh Tripathy","My name is Amaresh KrishnaDas"];
   function changeTitle(){
     setFirstTitle(title[Math.floor(Math.random()*3)]);
   } 
   return <div>
     <h1>{firstTitle}</h1>
     <button onClick={changeTitle}>Change My Title</button>
     </div>
}


 /*   USING MEMO FUNCTION
  import React, { useState, memo, Fragment } from 'react';

 const Header = memo(function({ title }) {
  return (
    <Fragment>
      {title}
    </Fragment>
  );
 });

 function App() {
  const [counter, setCounter] = useState(0);

  return (
     <div>
      <Header title="Welcome to My App" /><br />
      <Header title="Another Header" /><br />
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
      <p>Counter: {counter}</p>
     </div>
   );
 }


 */

export default App