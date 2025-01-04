import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside expensive Task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  // let doubleValue=expensiveTask(input) // this take time and re-render everytime count increases, that's why we use useMemo

  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  //Used to memoize the result of expensiveTask to prevent unnecessary recalculations.
// Dependency [input] ensures that expensiveTask is only called when input changes.



// The expensiveTask function will only execute when input changes, significantly improving performance when clicking the button to increment the count.

  return (
    <>
      <h1>Count:{count}</h1>
      <br />
      <br />
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      Double:{doubleValue}
    </>
  );
}

export default App;
