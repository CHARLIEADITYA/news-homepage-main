import React from "react";

const Box = ({heading,heading2,para,image}) => {
  return (
    <div className="box">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="sentences">
        <h1>{heading}</h1>
        <h2>{heading2}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Box;
