import "./index.css";

import React from "react";
import { render } from "react-dom";
import App from "./App";
import { CardProvider } from "./context/card.context.jsx";

render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
