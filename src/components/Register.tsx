import * as React from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  GoogleAuthProvider,
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "../service/config";
import "../styles/register.css";
import { User } from "../typings/user";

interface ILoginProps {}

const RegisterPage: React.FC<ILoginProps> = () => {
  const navigate: NavigateFunction = useNavigate();
  const [userInfo, setUserInfo] = React.useState<User>({
    email: "",
    password: "",
    phoneNumber: 0,
  });

  const ID = React.useId();

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const Signup = async (user: { email: string; password: string }) => {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      if (credential.user) {
        console.log("login successfully");
        console.log(credential);
      } else {
        console.log("login failed");
      }

      // Navigate to the login page after successful registration
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (auth.currentUser) {
      console.log("sorry try to login cause user is already authenticated");
    }
    Signup({ email: userInfo.email, password: userInfo.password });
    navigate("/dashboard", { replace: true });
  };

  const signInwithgoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        navigate("/dashboard", { replace: true });
        console.log(result.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const siginwithfacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        navigate("/dashboard", { replace: true });
        console.log(result.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="head">
        <div
          className="wrapper"
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <div className="title">
            <div>
              <span id="title">
                register with{" "}
                <strong className="book_reader">BookReader</strong>{" "}
              </span>
            </div>
          </div>
          <div className="form_fields">
            <form onSubmit={onSubmit} action="" method="post" className="form">
              <div className="first_field" style={{ marginBlockEnd: "10px" }}>
                <label htmlFor="">
                  Enter your email
                  <br />
                  <input
                    placeholder="Email..."
                    type="email"
                    required
                    inputMode="email"
                    name="email"
                    onChange={onChange}
                    value={userInfo.email}
                    id={`email_${ID}`}
                    style={{
                      marginBlockStart: "4px",
                      paddingBlock: "10px",
                      width: "250px",
                    }}
                  />
                </label>
              </div>
              <div className="second_field">
                <label htmlFor="">
                  Enter your password
                  <br />
                  <input
                    placeholder="Password..."
                    type="password"
                    name="password"
                    id={`password_${ID}`}
                    onChange={onChange}
                    value={userInfo.password}
                    style={{
                      marginBlockStart: "4px",
                      paddingBlock: "10px",
                      width: "250px",
                    }}
                  />
                </label>
              </div>
              <div className="third_field" style={{ marginBlockStart: "10px" }}>
                <label htmlFor="">
                  Enter your PhoneNumber
                  <br />
                  <input
                    placeholder="PhoneNumber..."
                    type="number"
                    inputMode="numeric"
                    name="phoneNumber"
                    id={`phoneNumber_${ID}`}
                    onChange={onChange}
                    value={userInfo.phoneNumber}
                    style={{
                      marginBlockStart: "4px",
                      paddingBlock: "10px",
                      width: "250px",
                    }}
                  />
                </label>
              </div>
              <div className="" style={{ marginBlockStart: "18px" }}>
                <div className="create-account">
                  <span className="login-text">already register?</span>
                  <button
                    type="button"
                    style={{
                      border: "none",
                      margin: "0px",
                      backgroundColor: "white",
                      fontSize: "0.9rem",
                    }}
                    onClick={() => navigate("/login", { replace: true })}
                  >
                    <span
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Login
                    </span>
                  </button>
                </div>
                <button className="submit" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="third-party">
            <button type="button" className="google" onClick={signInwithgoogle}>
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
              <span>google</span>
            </button>
            <button
              type="button"
              className="facebook"
              onClick={siginwithfacebook}
            >
              <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
              <span>facebook</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
