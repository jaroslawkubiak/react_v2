import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const booksFromDB = await axios.get("http://localhost:3001/books");

    setBooks(booksFromDB.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });

    setBooks([...books, response.data]);
  };

  const editBook = async (title, id) => {
    const result = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return result.data;
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    fetchBooks();
  };

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, deleteBookById, editBook, createBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
