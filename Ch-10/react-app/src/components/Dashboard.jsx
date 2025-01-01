import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
 
  const Navigate=useNavigate()

  function handleClick(){
    Navigate('/')
  }

  return (
    <div>
      Dashboard

      <br />
      <button onClick={handleClick}>
        move to Home
      </button>
    </div>
  )
}

export default Dashboard
