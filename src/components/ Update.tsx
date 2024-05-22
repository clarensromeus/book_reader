import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { updateDoc, doc, db } from "../service/config";
import "../styles/update.css";

interface IUpdateProps {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Update: React.FC<IUpdateProps> = ({ id, setOpen }) => {
  const bookRef = doc(db, "books", id);

  const [title, setTitle] = React.useState<string>("");

  const changeEvent = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const target = ev.target as typeof ev.target & { value: { value: string } };
    setTitle(target.value);
  };

  const updateBook = async () => {
    try {
      const book = await updateDoc(bookRef, {
        title: title,
      });

      console.log(book);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return (
    <>
      <div className="frameforupdate">
        <div className="updateFrame">
          <button className="backbutton" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: "1.1rem" }} />
          </button>
          <div className="updateText">
            <strong className="update"> Update the book </strong>
          </div>
          <div className="framecontent">
            <div className="title">
              <label htmlFor="titlefor">
                <span>Enter the book title</span>
                <br />
                <input
                  name="titlefor"
                  className="titleinput"
                  type="text"
                  placeholder="enter a title..."
                  value={title}
                  onChange={changeEvent}
                />
              </label>
            </div>
            <div className="updatebutton">
              <button type="button" onClick={updateBook}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
