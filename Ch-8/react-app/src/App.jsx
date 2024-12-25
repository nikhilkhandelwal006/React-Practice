import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  const [seconds, setSeconds] = useState(0);

  //first --> side-effect function
  //second --> clean-up function
  //third --> comma seperated dependencies list.


  
  //#/variation- 1:-
  // runs on every render

  // useEffect(()=>{
  //   alert("I will run on each render")
  // })




  //#/variation- 2:-
  //that runs on only first render
  // useEffect(()=>{
  //   alert("i will run on only 1st render")
  // }, [])




  //#/variation- 3:-

  //Note:- ye shuru m bhi isliye chl rha h kyuki count ki value shuru m bhi update hoti h isliye alert shuru m bhi dikha rha h.
  // useEffect(()=>{
  //   alert("I will run every time when count is updated")
  // }, [count])




  //#/variation- 4:-
  // Multiple dependencies

  //  useEffect(()=>{
  //   alert("I will run every time when count/total is updated")
  // }, [count,total])



  //  #/variation- 5:-
  // is baar let's add a cleanup function

  useEffect(() => {
    alert("count is updated");
    return () => {
      alert("count is unmounted form UI");
    };
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  function handleTotalClick() {
    setTotal(total + 1);
  }

  return (
    <>
      count is :- {count}
      <br />
      <button onClick={handleClick}>update Count</button>
      <br />
      <br />
      count is :- {total}
      <br />
      <button onClick={handleTotalClick}>update Total</button>
    </>
  );
}

export default App;
