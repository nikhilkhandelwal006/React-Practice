
import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  // const handleClick=useCallback(()=>{
  //   setCount(count+1)
  // },[count])

  const handleClick=useCallback(()=>{
    setCount(count+1)
  },[])

  return (
    <>
   
   <div>
    Count:{count}
   </div>
<br /><br />
<button onClick={handleClick}>
 Increment
</button>
<br /><br />
<div>
<ChildComponent buttonName="click me " handleClick={handleClick} />
</div>

      
    </>
  )
}

export default App
