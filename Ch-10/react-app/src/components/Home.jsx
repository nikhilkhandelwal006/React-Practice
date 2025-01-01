import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate=useNavigate()

  function handleClick(){
    Navigate('/about')
  }
  return (
    <div>
      Home
     
     <br />

     <button onClick={handleClick}>
      Move to about
     </button>
  


    </div>
  )
}

export default Home
