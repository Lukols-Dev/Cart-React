import React, { createContext, useEffect, useState } from "react";
import { CartServices } from "../services/cart.services.jsx";

export const CardContext = createContext(undefined);

export const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [summary, setSummary] = useState({ price: 0, count: 0 });

  const readCartProducts = async () => {
    try {
      const response = await CartServices.getAllProductCart();
      const jsonData = await response.json();
      await setCart(jsonData);
    } catch (err) {
      console.log("There was an error", err);
    }
  };

  const updateQuantity = (pid, quantity) => {
    setCart((prevProducts) => {
      return prevProducts.map((item) => {
        if (item.pid === pid) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });
    });
  };

  const cartSummary = () => {
    let totalPrice = 0;
    let totalQuantity = 0;

    cart.forEach((item) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity !== undefined ? item.quantity : 1;
      totalPrice += price * quantity;
      totalQuantity += quantity;
    });
    setSummary({ price: totalPrice.toFixed(2), quantity: totalQuantity });
  };

  useEffect(() => {
    readCartProducts();
  }, []);

  useEffect(() => {
    if (cart && cart.length > 0) {
      cartSummary();
    }
  }, [cart]);

  return (
    <CardContext.Provider value={{ cart, summary, updateQuantity }}>
      {children}
    </CardContext.Provider>
  );
};
