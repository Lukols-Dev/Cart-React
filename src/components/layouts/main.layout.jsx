import "./main.layout.css";

import React from "react";
import { HeaderNavigation } from "../navigations";

export const MainLayout = (props) => {
  return (
    <div className="mainLayout">
      <HeaderNavigation />
      <main className="mainLayout__content ">{props.children}</main>
    </div>
  );
};
