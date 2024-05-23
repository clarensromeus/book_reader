import * as React from "react";
// internally crafted imports of resources
import "../styles/book.css";
import { bookForms, IbookList } from "../typings/bookForm";
import Navbar from "./Navbar";
import {
  getDocs,
  addDoc,
  collection,
  Timestamp,
  db,
  auth,
  onSnapshot,
} from "../service/config";
import Update from "./ Update";
import Delete from "./Delete";
// exteranl imports of resources
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

interface IBookProps {}

const Book: React.FC<IBookProps> = () => {
  const [book, setBook] = React.useState<bookForms>({
    title: "",
    author: "",
    state: "create",
  });

  const [open, setOpen] = React.useState<boolean>(false);

  const [bookList, setBookList] = React.useState<IbookList[]>([]);
  const [bookId, setBookId] = React.useState<string>("");

  const changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setBook((previousBook) => ({
      ...previousBook,
      author: `${auth.currentUser?.displayName}`,
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
    /* const allbooks = async () => {
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
    allbooks(); */
    const allBooks = async () => {
      try {
        onSnapshot(collection(db, "books"), (querySnapshot) => {
          const books = querySnapshot.docs.map((book) => ({
            ...book.data(),
            date_publish: "1 year ago",
            id: book.id,
          })) as IbookList[];
          setBookList(books);
          console.log(books);
        });
      } catch (error) {
        console.error(error);
      }
    };

    allBooks();
  }, []);

  return (
    <>
      <Navbar />
      {open && <Update id={bookId} setOpen={setOpen} />}
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
                        <span
                          className="author"
                          style={{ textTransform: "capitalize" }}
                        >
                          {book.author}
                        </span>
                        <span className="date"> .{book.date_publish}</span>
                      </div>
                      <div className="book-title">
                        <strong className="title">{book.title}</strong>
                      </div>
                    </div>
                    <div className="right-side">
                      <div className="update">
                        <button
                          type="button"
                          onClick={() => {
                            setOpen(true);
                            setBookId(book.id);
                          }}
                        >
                          <FontAwesomeIcon className="upd" icon={faPen} />
                        </button>
                      </div>
                      <Delete id={book.id} />
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
