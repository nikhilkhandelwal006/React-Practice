import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const Navigate=useNavigate()

  function handleClick(){
    Navigate('/dashboard')
  }
  return (
    <div>
      About me

      <br />

      <button onClick={handleClick}>
        move to dashboard
      </button>
    </div>
  )
}

export default About
