import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(newTitle, book.id);
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
