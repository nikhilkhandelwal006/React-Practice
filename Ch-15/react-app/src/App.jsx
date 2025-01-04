
import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }

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
