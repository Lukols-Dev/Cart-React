import "./button.common.css";

import React from "react";

const MainButton = ({ title, disable, onClick }) => {
  return (
    <button
      className={disable ? "mainButton mainButton--disable" : " mainButton"}
      type="button"
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MainButton;
