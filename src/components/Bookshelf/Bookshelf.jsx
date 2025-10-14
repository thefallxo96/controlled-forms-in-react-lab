// src/components/Bookshelf/Bookshelf.jsx
import { useState } from "react";

const Bookshelf = () => {
  // Initial books
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  // Form state
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;

    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      {/* Form */}
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
            />
          </div>
          <div>
            <label>Author: </label>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              placeholder="Enter author's name"
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      {/* Books display */}
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
