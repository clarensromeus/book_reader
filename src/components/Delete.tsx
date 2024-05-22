import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// internally crafted import of resources
import { db, doc, deleteDoc } from "../service/config";

interface IDeleteProps {
  id: string;
}

const Delete: React.FC<IDeleteProps> = ({ id }) => {
  const bookRef = doc(db, "books", id);

  const deleteBook = async () => {
    try {
      await deleteDoc(bookRef);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return (
    <>
      <div className="delete">
        <button type="button" onClick={deleteBook}>
          <FontAwesomeIcon className="del" icon={faTrash} />
        </button>
      </div>
    </>
  );
};

export default Delete;
