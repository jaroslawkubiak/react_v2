import { useState } from "react";

function BookCreate({ onCreate }) {
  const [book, setBook] = useState("");

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const handleCreateBook = (e) => {
    e.preventDefault();

    onCreate(book);
    setBook("");
  };

  return (
    <div className="book-create">
      <h3>Add new book</h3>
      <form onSubmit={handleCreateBook}>
        <label>Title: </label>
        <input className="input" value={book} onChange={handleChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
