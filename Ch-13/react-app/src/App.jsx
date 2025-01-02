import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // let val=0
  
let vall=useRef(0)
 let btnRef=useRef()

 
 function handleIncrement(){
   // val=val+1
   // console.log("the value of val",val)
   vall.current=vall.current+1
   console.log("the value of vall",vall.current)
   setCount(count+1)
  }
  
  useEffect(()=>{
    console.log("main firse re-render hogy hu")
  })


  function changeColor(){
  btnRef.current.style.backgroundColor="red"
  }

  return (

    <div>
  
  count:{count}

  <br />
  <br />
 
 
     <button ref={btnRef} onClick={handleIncrement}>
     Increment
     </button>
   
      <br />
      <br />
      <br />

      <button onClick={changeColor}>
    change increment button color
     </button>     



    </div>
  )
}

export default App
