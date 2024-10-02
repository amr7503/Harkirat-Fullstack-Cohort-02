import React from 'react';
import { useState } from 'react'
import './App.css'

// //real wrapper
// function App() {
//   return <div>
//     <CardWrapper innerComponent={<TextComponent1/>} />
//     <CardWrapper innerComponent={<TextComponent2/>} />
//   </div>
// }

// function TextComponent1() {
//   return <div>
//     hii there from Text Component 1
//   </div>
// }
// function TextComponent2() {
//   return <div>
//     hii there from Text Component 2
//   </div>
// }

// function CardWrapper({innerComponent})
// {
//  // create a div which has a border (hint: the way to create a border is to use the border property in css "border: 2px solid black" ) 
//  //  and inside the div, renders the prop
//  return <div style={{border: '2px solid black'}}>
//       {innerComponent}
//  </div>
// }

//But we do this in another way

function App(){
  return <div>

    <CardWrapper>
      hii there       {/* this will be passed as children */}  
    </CardWrapper>

    <CardWrapper>
      <CardWrapper>
      hii there 2
      </CardWrapper>
    </CardWrapper>

    <CardWrapper>
      <TextComponent/>
    </CardWrapper>

  </div>
}

function CardWrapper({children}) //children is a special prop which is passed by react it refers to the content inside the component
{
  console.log(children)
  return <div style={{
    border: '2px solid black',
    padding: '10px',
    margin: '10px'
    }}>

    {children}

  </div>
}

function TextComponent(){
  return <div>
    hii there from Text Component
  </div>
}

export default App
