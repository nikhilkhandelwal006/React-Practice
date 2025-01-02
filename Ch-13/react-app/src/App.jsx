import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // let val=0
  
  let vall=useRef(0)

  useEffect(()=>{
    console.log("main firse re-render hogy hu")
  })
  
  function handleIncrement(){
    // val=val+1
    // console.log("the value of val",val)
    vall.current=vall.current+1
    console.log("the value of vall",vall.current)
    setCount(count+1)
  }

  return (

    <div>
  
  count:{count}


  <br />
   
 <br />
     <button onClick={handleIncrement}>
     Increment
     </button>
   
      <br />

     


    </div>
  )
}

export default App
