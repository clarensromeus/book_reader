import * as React from "react";
import "../styles/book.css";
import { bookForms } from "../typings/bookForm";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

interface IBookProps {}

const Book: React.FC<IBookProps> = () => {
  const [book, setBook] = React.useState<bookForms>({
    title: "",
    author: "",
    state: "create",
  });

  const changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setBook((previousBook) => ({
      ...previousBook,
      author: "romeus clarens",
      [name]: value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(book.title, book.state);
  };

  const books: { title: string; author: string; date: string }[] = [
    {
      title: "Success for life",
      author: "R. clarens",
      date: " . a few seconds ago",
    },
    {
      title: "Business mindset",
      author: "P. allrich",
      date: " . a few seconds ago",
    },
    {
      title: "Producing beats",
      author: "C. jelly",
      date: " . 1 month ago",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="bookFrame">
          <div className="title">
            <div>
              <span id="title">
                Welcome to <strong className="book_reader">BookReader</strong>{" "}
              </span>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="inputCase">
              <div className="create-search">
                <input
                  type="text"
                  className="inputText"
                  name="title"
                  value={book.title}
                  onChange={changeEvent}
                  placeholder={
                    book.state === "create"
                      ? "create a new book"
                      : "search a book"
                  }
                />
                <button type="submit" className="add-search">
                  {book.state === "create" ? "Create" : "Search"}
                </button>
              </div>
              <div className="choice">
                <input
                  type="radio"
                  name="state"
                  id="add"
                  defaultChecked
                  onChange={changeEvent}
                  value="create"
                  className="create"
                />
                <label htmlFor="create">Create</label>
                <input
                  type="radio"
                  name="state"
                  id="search"
                  onChange={changeEvent}
                  value="search"
                  className="search"
                />
                <label htmlFor="search">Search</label>
              </div>
              <div className="books">
                {books.map((book, index) => (
                  <div className="bookFrame" key={index}>
                    <div className="left-side">
                      <div className="author-date">
                        <span className="author">{book.author}</span>
                        <span className="date">{book.date}</span>
                      </div>
                      <div className="book-title">
                        <strong className="title">{book.title}</strong>
                      </div>
                    </div>
                    <div className="right-side">
                      <div className="update">
                        <FontAwesomeIcon className="upd" icon={faPen} />
                      </div>
                      <div className="delete">
                        <FontAwesomeIcon className="del" icon={faTrash} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Book;
