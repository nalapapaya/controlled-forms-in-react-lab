import React from "react";
import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target; //no value = string, now we are using kvp
    setNewBook((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //stop default submit
    setBooks((prevState) => [...prevState, newBook]); //adding new book to list
    setNewBook({ title: "", author: "" }); // clear form
  };
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        ></input>

        <button className="submit" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="bookCardsDiv">
        <ul>
          {books.map((book, idx) => (
            <div key={idx} className="bookCard">
              <h3>{book.title}</h3>
              by: {book.author}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bookshelf;
