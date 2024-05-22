import * as React from "react";
// internally crafted imports of resources
import "../styles/book.css";
import { bookForms, IbookList } from "../typings/bookForm";
import Navbar from "./Navbar";
import {
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  collection,
  query,
  Timestamp,
  db,
} from "../service/config";
// exteranl imports of resources
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

interface IBookProps {}

const Book: React.FC<IBookProps> = () => {
  const [book, setBook] = React.useState<bookForms>({
    title: "",
    author: "",
    state: "create",
  });

  const [bookList, setBookList] = React.useState<IbookList[]>([]);

  const changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setBook((previousBook) => ({
      ...previousBook,
      author: "romeus clarens",
      [name]: value,
    }));
  };

  const createBook = async () => {
    try {
      const docRef = await addDoc(collection(db, "books"), {
        author: book.author,
        title: book.title,
        date_created: Timestamp.fromDate(new Date()),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createBook();
  };

  React.useEffect(() => {
    const allbooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const books = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          date_publish: "1 year ago",
          id: doc.id,
        })) as IbookList[];

        setBookList(books);
      } catch (error) {
        console.error(error);
      }
    };
    allbooks();
  }, []);

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
                {bookList.map((book, index) => (
                  <div className="bookFrame" key={index}>
                    <div className="left-side">
                      <div className="author-date">
                        <span className="author">{book.author}</span>
                        <span className="date"> .{book.date_publish}</span>
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
