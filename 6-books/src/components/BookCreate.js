import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const { createBook } = useContext(BooksContext);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCreateBook = (e) => {
    e.preventDefault();

    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add new book</h3>
      <form onSubmit={handleCreateBook}>
        <label>Title: </label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
