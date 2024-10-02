import { useEffect } from "react";

function App(){

 useEffect(function(){
  alert("hii, Component is mounted")
 },[]) ; //dependency array - The empty array [] passed as the second argument to useEffect ensures that the effect will only run once when the component mounts, and not on every re-render.

 // If still it runs twice it is due to react strict mode nonetheless it will run only once in production mode

 // mount - when the component is first rendered

 return <div>
   <h1>hii there</h1>
  </div>

}

export default App