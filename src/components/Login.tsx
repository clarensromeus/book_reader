// built-in imports of resources
import * as React from "react";
// external imports of resources
import { useNavigate, NavigateFunction } from "react-router-dom";
// interanlly crafted imports of resources
import "../styles/login.css";
import { User } from "../typings/user";
import { auth, signInWithEmailAndPassword } from "../service/config";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const [userInfo, setUserInfo] = React.useState<
    Pick<User, "email" | "password">
  >({
    email: "",
    password: "",
  });

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setUserInfo((user) => ({ ...user, [name]: value }));
  };

  const ID = React.useId();

  const SignIn = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (credential.user) {
        console.log(credential.user.email, credential.user.displayName);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SignIn({ email: userInfo.email, password: userInfo.password });
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
                Login with <strong className="book_reader">BookReader</strong>{" "}
              </span>
            </div>
          </div>
          <div className="form_fields">
            <form action="" method="post" className="form" onSubmit={onSubmit}>
              <div className="first_field" style={{ marginBlockEnd: "10px" }}>
                <label htmlFor="">
                  Enter your email
                  <br />
                  <input
                    placeholder="Email..."
                    type="email"
                    onChange={changeInput}
                    name="email"
                    id={`email_${ID}`}
                    value={userInfo.email}
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
                    value={userInfo.password}
                    onChange={changeInput}
                    id={`password_${ID}`}
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
                  <span className="login-text">No account?</span>
                  <button
                    type="button"
                    style={{
                      border: "none",
                      margin: "0px",
                      backgroundColor: "white",
                      fontSize: "0.9rem",
                    }}
                    onClick={() => navigate("/register", { replace: true })}
                  >
                    <span
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Register
                    </span>
                  </button>
                </div>
                <button className="submit" type="submit">
                  {loading ? "loading..." : "LogIn"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
