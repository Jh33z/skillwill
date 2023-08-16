import React from "react";
import Book from "./book";
import GOTImg from "../assets/GOT.jpg";
import HarryImg from "../assets/Harry.jpg";
import HobbitImg from "../assets/Hobbit.jpg";
import MetroImg from "../assets/Metro.jpg";

const data = [
  {
    id: 1,
    name: "Game of Thrones",
    image: GOTImg,
    description: "This book is called GOT",
  },
  {
    id: 2,
    name: "Harry Potter",
    image: HarryImg,
    description: "This book is called Harry Potter",
  },
  {
    id: 3,
    name: "Hobbit",
    image: HobbitImg,
    description: "This book is called Hobbit",
  },
  {
    id: 4,
    name: "Metro",
    image: MetroImg,
    description: "This book is called Metro",
  },
];

const BookList = () => {
  function action(name) {
    alert(`this alert comes from ${name}`);
  }
  return (
    <div>
      {data.map((book) => (
        <Book
          key={book.id}
          name={book.name}
          image={book.image}
          description={book.description}
          action={() => action(book.name)}
        />
      ))}
    </div>
  );
};

export default BookList;
