
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ka sync krwadunga
 const [name,setName]=useState("")
  return (
    <>
      <Card title="card1" name={name} setName={setName} />
      <Card  title="card2" name={name} setName={setName} />
      {/* <p>I am inside Parent component and value of name is {name} </p> */}
    </>
  )
}

export default App
