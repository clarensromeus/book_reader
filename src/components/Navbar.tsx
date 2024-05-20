import * as React from "react";
import "../styles/navbar.css";
import { signOut, auth } from "../service/config";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <strong className="book_reader">BookReader</strong>
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
    </>
  );
};

export default Navbar;
