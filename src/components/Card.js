import React from "react";

export default ({ thumb, title }) => {
  return (
    <div className="card">
      <div className="thumb" style={{ backgroundImage: `url(${thumb})` }}></div>
      <div className="title">{title}</div>
    </div>
  );
};
