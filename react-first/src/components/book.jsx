import React from "react";

const Book = ({ name, image, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <img src={image} alt="" />
      </div>
      <p>{description}</p>
      <button>click</button>
    </div>
  );
};

export default Book;
