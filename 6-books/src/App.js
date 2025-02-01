import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const defaultBooks = [
    { id: "8548", title: "Star Wars" },
    { id: "1250", title: "Wiedźmin" },
    { id: "6538", title: "Dziki Gon" }
  ];
  const [books, setBooks] = useState(defaultBooks);

  const createBook = (title) => {
    const newBook = { id: Math.floor(Math.random() * 100000), title };
    setBooks([...books, newBook]);
  };

  const editBook = (title, id) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
