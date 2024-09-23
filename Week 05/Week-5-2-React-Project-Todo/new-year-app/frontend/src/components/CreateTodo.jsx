import { useState } from "react"

export function CreateTodo(props){

   const [title,setTitle]=useState("");
   const [description,setDescription]=useState("");

    return (
        <div>
            <input id="title" type="text" placeholder="title" style={{
                  padding: '10px',
                  margin: '10px',
            }}  onChange={
                function(event){
                    setTitle(event.target.value);
                }
            } /> <br />

            <input id="desc" type="text" placeholder="description" style={{
                      padding: '10px',
                      margin: '10px',
            }}  onChange={
                function(event){
                    setDescription(event.target.value);
            }}  /> <br />

            <button style={{
                 padding: '10px',
                 margin: '10px',
            }}  onClick={() =>{
                fetch('http://localhost:3000/todo',{
                    method:'POST',
                    body:JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                  .then(async function (res) {
                    const json=await res.json();
                    alert("Todo added")
                  })
            }} >Add a todo</button>

        </div>
    )
}

//or
// module.exports()


// style={{
//     padding: '10px',
//     margin: '10px',
// }} 