// external imports of resources
import * as React from "react";
import { signOut, auth } from "../service/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, NavigateFunction } from "react-router-dom";
// internally crafted imports of resources
import "../styles/navbar.css";
import Upload from "./upload";
import { getDownloadURL, storageRef, ref } from "../service/config";

interface NavbarProps {
  picture: string;
  setPicture: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ picture, setPicture }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  // create a reference from the users folder to get user profile image
  const pictureRef = ref(storageRef, `${auth.currentUser?.photoURL}`);
  const navigate: NavigateFunction = useNavigate();

  const Logout = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  const getUsername = (username?: string) => {
    if (username) {
      const splitUsername: string[] = username.split(" ");
      const Firstname: string = splitUsername[0].charAt(0).toUpperCase();
      const Lastname: string = `${splitUsername[1]}`.toLowerCase();
      return `${Firstname}. ${Lastname}`;
    }
  };

  React.useEffect(() => {
    getDownloadURL(pictureRef)
      .then((url) => {
        setPicture(url);
      })
      .catch((error) => console.log(error));
  }, [pictureRef]);

  return (
    <>
      {open && <Upload setOpen={setOpen} setPicture={setPicture} />}
      <div className="navbar">
        <div className="logo">
          <strong className="book_reader">BookReader</strong>
        </div>
        <div className="right-side">
          <div className="user">
            <div className="username">
              <strong>{getUsername(`${auth.currentUser?.displayName}`)}</strong>
            </div>
            <div className="picture">
              {picture.length > 0 ? (
                <img
                  //src="https://ericajmitchell.com/wp-content/uploads/2023/06/Thumbnail-Portland-Headshot-Ali-Comfort-by-Erica-J-Mitchell-Photographer-010-Edit001.jpg"
                  src={picture}
                  alt=""
                  width="35px"
                  height="35px"
                />
              ) : (
                <FontAwesomeIcon
                  style={{ fontSize: "1.7rem", color: "gray" }}
                  icon={faCircleUser}
                />
              )}
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
            <button type="button" className="logout" onClick={Logout}>
              LogOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
