import React from "react";
import ReactLoading from "react-loading";

export default ({color}) => {
  return (
    <div className="loader">
      <ReactLoading type="bubbles" color={color} height="2rem" width="3rem" />
    </div>
  );
};
