import React from 'react'
import App from './App'

export default function Child({datachild}) {
const[data,setdata]=React.useState({name:'',age:''});

function handleChange(e){
 setdata({
      ...data,
      [e.target.name]: e.target.value
    });
}
   function onsubmit(e){
    e.preventDefault();
        console.log(data);
   }
    
  return (
    <>
    
    <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
          required
        /><br/><br/>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
          required
        /><br/><br/>
      <button onClick={onsubmit}>submit</button>
    </>
  )
}

/*

*/