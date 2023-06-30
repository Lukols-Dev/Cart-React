import "./App.css";

import React, { useContext } from "react";
import { MainLayout } from "./components/layouts";
import { CardContext } from "./context/card.context.jsx";
import { formatCurrency } from "./ulits/formatPrice.util.js";
import ProductList from "./components/products/list.product.jsx";
import NumberProduct from "./components/products/number.product.jsx";

function App() {
  const { cart, summary } = useContext(CardContext);

  return (
    <MainLayout>
      <section className="card__container">
        <h3>Lista produktów</h3>
        <NumberProduct number={summary.quantity || 0} />
        <ProductList data={cart} />
        <h3>Łączna wartość koszyka: {formatCurrency(summary.price)}</h3>
      </section>
    </MainLayout>
  );
}

export default App;
