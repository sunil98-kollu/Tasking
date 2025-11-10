import React, { use } from 'react'
import { useRef } from 'react';
export default function UnControll() {
const inputRef = useRef(null);
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Form submitted with input:' ${inputRef.current.value}`);
};
  return (
    <div>
    <form onSubmit={handleSubmit}> 
      <h1>UnControll</h1>
      <input type="text" ref={inputRef} placeholder='Enter Name'/>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}
