import React from "react";

const Banner = ({ title, className, img }) => {
  return (
    <div className={`banner ${className}`}>
      <img src={img} alt=" vue illutrant une falaise et une fôret" />
      {!title ? "" : <h3>{title}</h3>}
    </div>
  );
};
export default Banner;
