import React from 'react'
import Child from './child'
import UnControll from './UnControll'

export default function App() {
  const data ={
    name:'react data props',
    age:30
  }
  return (
    <>
      <h1>react form</h1>
      <Child/>
      <UnControll/>
    </>
  )
}
