import { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button Click={handleClick} text="click me ">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="Nikhil khandelwal">
    <h1>Best WEB DEV Course</h1>
    <p>Trying to consistent</p>
    <p>will complete the course soon</p>
   </Card>

   <Card children="Main ek children hu">
        {/* <h3>Hello NK</h3> */}
      {/* </Card> */}
    </div>
  );
}

export default App;
