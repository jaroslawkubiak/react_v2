import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext } from "react";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <>
      {count}
      <button onClick={incrementCount}>Increment</button>
      <div className="book-list">{renderedBooks}</div>
    </>
  );
}

export default BookList;
