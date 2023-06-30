import { useState } from "react";

const useCounter = (min, max) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count >= max) return;
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count <= min) return;
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(1);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
