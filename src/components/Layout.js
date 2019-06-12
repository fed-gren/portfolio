import React from "react";
import "../../styles/layout.scss";
import Header from "./Header";

export default ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header title="Portfolio" />
        {children}
      </div>
    </>
  );
};
