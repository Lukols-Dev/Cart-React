import "./input.common.css";

import React, { useContext, useEffect, useState } from "react";
import MainButton from "./button.common.jsx";
import useCounter from "../../hooks/useCounter.hook.js";
import { CardContext } from "../../context/card.context.jsx";
import { CartServices } from "../../services/cart.services.jsx";

const Input = ({ pid, disable, min, max }) => {
  const { updateQuantity } = useContext(CardContext);
  const [count, increment, decrement, reset] = useCounter(min, max);
  const [statusQuant, setStatusQuant] = useState(null);

  const isCorrectNumber = async () => {
    try {
      const response = await CartServices.productAvailability(pid, count);
      const jsonData = await response.json();
      await setStatusQuant(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (count >= 1) {
      const debounceTimer = setTimeout(() => {
        isCorrectNumber();
        if (statusQuant && !statusQuant.isError && statusQuant.success) {
          updateQuantity(pid, count);
        } else {
          reset();
          if (statusQuant && statusQuant.message) {
            alert(statusQuant.message);
          }
        }
      }, 800);

      return () => {
        clearTimeout(debounceTimer);
      };
    }
  }, [count]);

  return (
    <div className="inputContainer">
      <MainButton title={"-"} disable={disable} onClick={decrement} />
      <span />
      <input
        className={
          disable
            ? "inputContainer__input inputContainer__input--disable"
            : "inputContainer__input"
        }
        value={count}
        onChange={() => {}}
        disabled={disable}
      />
      <span />
      <MainButton title={"+"} disable={disable} onClick={increment} />
    </div>
  );
};

export default Input;
