import { useEffect, useState } from "react";

/*
function App(){

 useEffect(function(){
  alert("hii, Component is mounted")
 },[]) ; //dependency array - The empty array [] passed as the second argument to useEffect ensures that the effect will only run once when the component mounts, and not on every re-render.

 // If still it runs twice it is due to react strict mode nonetheless it will run only once in production mode

 // mount - when the component is first rendered

 return <div>
   <h1>hii there</h1>
  </div>

} */

function App(){
  const [counter,setCounter] = useState(0);
  const [b,setB] = useState([]);

  useEffect(()=>{
     alert(counter);
  },[b]) //counter can be the dependency array

  /* The dependency array in the useEffect hook is the second argument passed to the useEffect function. It is an array of values that the effect depends on. When any of the values in this array change, the effect will re-run. If the array is empty, the effect will only run once, after the initial render. */

  return <div>
    <button onClick={()=>{
      setCounter(counter+1);
      if(counter%2==0) {
        setB([...b,counter]);
      }
    }}>Increase Count</button>
  </div>
  

}

export default App