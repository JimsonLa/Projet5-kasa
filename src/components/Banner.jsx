import React from "react";

const Banner = ({ title, img, classname }) => {
  return (
    <div className={`banner ${classname}`}>
      <img src={img} alt="vue falaise et foret" />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
