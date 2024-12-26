import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
 const [count, setCount]=useState(0)
 const [seconds, setSeconds]=useState(0)
 

 useEffect(()=>{
    console.log("Count Changed:", count);

 },[count])
 //side-effect logic will run only when count is changed.

  useEffect(()=>{
    const intervalId=setInterval(() => {
        console.log("SetInterval started")
        setSeconds(seconds=>seconds+1)
    }, 1000);

    return ()=>{
        console.log("time to stop")
        clearInterval(intervalId)
    }
  },[])
// it will run only on first render


  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment button</button>
      <br />
 <h3>Seconds:{seconds}</h3>
    </div>
  )
}

export default MultiEffectComponent
