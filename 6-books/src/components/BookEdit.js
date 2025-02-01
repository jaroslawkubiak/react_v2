import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const { editBook } = useBooksContext();

  const [newTitle, setNewTitle] = useState(book.title);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editBook(newTitle, book.id);
    onSubmit();
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Tilte</label>
      <input className="input" value={newTitle} onChange={handleChange} />
      <button className="button is-primary">SAVE</button>
    </form>
  );
}

export default BookEdit;
