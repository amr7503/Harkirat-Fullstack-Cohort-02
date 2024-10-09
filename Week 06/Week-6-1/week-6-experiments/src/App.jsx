// import { Fragment, memo, useEffect, useState } from "react";


// function App(){
//   const [firstTitle, setFirstTitle] = useState("My name is Amaresh");
//   let title= ["My name is Amaresh Swain","My name is Amaresh Tripathy","My name is Amaresh KrishnaDas"];
//    function changeTitle(){
//      setFirstTitle(title[Math.floor(Math.random()*3)]);
//    } 

//    const Header= memo(function({title}){
//     return <Fragment>
//             {title}
//            </Fragment>
//   })

//    return <div>
//      <button onClick={changeTitle}>Change My Title</button> <br /><br />
//      <Header title={firstTitle}/> <br /><br />
//      <Header title="My name is Disha Tripathy"/> <br />
//      <Header title="My name is Disha Tripathy"/> <br />
//      <Header title="My name is Disha Tripathy"/>
//      </div>

//     // function Header({title}){
//     //   return <Fragment>{title}</Fragment>
//     // }
    
// }


// export default App


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

export default App;