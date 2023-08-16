import React from "react";

const Book = ({ name, image, description, action }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <img src={image} alt="" />
      </div>
      <p>{description}</p>
      <button onClick={action}>click</button>
    </div>
  );
};

export default Book;
