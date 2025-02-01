import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {
  const { deleteBookById } = useContext(BooksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleClickDelete = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const content = <h5>{book.title}</h5>;

  const renderedTitle = showEdit ? (
    <BookEdit book={book} onSubmit={handleSubmit} />
  ) : (
    content
  );

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.title}/300/200`}
        alt="image cover"
      />
      <div>{renderedTitle}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
