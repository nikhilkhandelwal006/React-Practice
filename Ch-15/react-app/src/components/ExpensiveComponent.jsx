import React, { useCallback, useEffect, useRef, useState } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveCalculation) {
        console.log("Function not re-created");
      } else {
        console.log("Function got re-created");
      }
    } else {
      previousFunction.current = expensiveCalculation;
    }
  }, [expensiveCalculation]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Expensive Calculation Result: {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment Button</button>
    </div>
  );
};

export default ExpensiveComponent;

//Note:- usecallback se sirf itna hota h ki function k re-creation se bchta h mtlb function k refrence ko freeze krwa skte h. large-scale application m un-neccasary function recreation se child component ki re-rendering ho skti h uss ko bchane k chkkr m useCallback kaam aata h.

//Note: aur agar function ko run hone se bchana chahte ho toh useMemo ko use krna pdega.
