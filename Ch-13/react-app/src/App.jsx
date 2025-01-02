// import { useState } from 'react'

// import './App.css'
// import { useEffect } from 'react'
// import { useRef } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   // let val=0
  
// let vall=useRef(0)
//  let btnRef=useRef()

 
//  function handleIncrement(){
//    // val=val+1
//    // console.log("the value of val",val)
//    vall.current=vall.current+1
//    console.log("the value of vall",vall.current)
//    setCount(count+1)
//   }
  
//   useEffect(()=>{
//     console.log("main firse re-render hogy hu")
//   })


//   function changeColor(){
//   btnRef.current.style.backgroundColor="red"
//   }

//   return (

//     <div>
  
//   count:{count}

//   <br />
//   <br />
 
 
//      <button ref={btnRef} onClick={handleIncrement}>
//      Increment
//      </button>
   
//       <br />
//       <br />
//       <br />

//       <button onClick={changeColor}>
//     change increment button color
//      </button>     



//     </div>
//   )
// }

// export default App




import React from "react";
import './app.css'
import { useState } from "react";
import { useRef } from "react";

function App(){

  const [time,setTime]=useState(0)

  let timerRef=useRef(null)

   function startTimer(){
   timerRef.current= setInterval(() => {
      setTime((time)=>time+1)
    }, 1000);
   }

   function stopTimer(){
 clearInterval(timerRef.current)
 

   }

   function resetTimer(){
  stopTimer()
  setTime(0)
   }

  return(
    <div>
      StopWatch: {time} seconds
      <br />
      <br />
      <button onClick={startTimer}>
        Start
      </button>
      <br />
      <br />
      <button onClick={stopTimer}>
        Stop
      </button>
      <br />
      <br />
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  )



}

export default App;