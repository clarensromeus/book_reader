import * as React from "react";
import "../styles/navbar.css";
import { signOut, auth } from "../service/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Upload from "./upload";

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      {open && <Upload open={open} setOpen={setOpen} />}
      <div className="navbar">
        <div className="logo">
          <strong className="book_reader">BookReader</strong>
        </div>
        <div className="right-side">
          <div className="user">
            <div className="picture">
              <img
                src="https://ericajmitchell.com/wp-content/uploads/2023/06/Thumbnail-Portland-Headshot-Ali-Comfort-by-Erica-J-Mitchell-Photographer-010-Edit001.jpg"
                alt=""
                width="35px"
                height="35px"
              />
            </div>
            <div className="icon">
              <button
                type="button"
                className="upload"
                onClick={() => setOpen((old) => !old)}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
          </div>
          <div className="Logout">
            <button
              type="button"
              className="logout"
              onClick={() => signOut(auth)}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
