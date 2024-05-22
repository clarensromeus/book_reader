import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./update.css";

interface IUpdateProps {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Update: React.FC<IUpdateProps> = ({ id, setOpen }) => {
  return (
    <>
      <div className="frame">
        <div className="updateFrame">
          <button className="backbutton" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: "1.1rem" }} />
          </button>
          <div className="framecontent">
            <form action="update_title">
              <input type="text" placeholder="title..." />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
