import { Link } from "react-router-dom";
import "./styles/home.css";

function App() {
  return (
    <>
      <div className="main" style={{ width: "100%" }}>
        <div className="routes">
          <div className="text-child">
            <div>
              <span id="title">
                Welcome <strong className="book_reader">BookReader</strong>{" "}
              </span>
            </div>
          </div>
          <div className="home-routes">
            <div className="login">
              <Link to="login">Login</Link>
            </div>
            <div className="register">
              <Link to="register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
