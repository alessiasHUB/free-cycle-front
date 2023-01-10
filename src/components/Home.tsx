import React from "react";
import { useState } from "react";

export interface IHomeProps {}
const websiteName = "Free-Cycle";

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [logInScreen, setLogInScreen] = useState<boolean>(false);
  const [signUpScreen, setSignUpScreen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordOne, setPasswordOne] = useState<string>("");

  const handleLogInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);
    setUsername("");
    setPassword("");
  };

  // visability of sign-up and log-in screens
  const handleLogInScreen = () => {
    setLogInScreen(!logInScreen);
    if (signUpScreen) setSignUpScreen(false);
  };
  const handleSignUpScreen = () => {
    setSignUpScreen(!signUpScreen);
    if (logInScreen) setLogInScreen(false);
  };

  // checks if input is in email format
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <main className="content">
      <div className="home">
        <p>Hi, welcome to Free-cycles.</p>
        <button className="log-in-btn" onClick={handleLogInScreen}>
          Log in
        </button>
        <button className="sign-up-btn" onClick={handleSignUpScreen}>
          Sign up
        </button>
      </div>
      {logInScreen && (
        <>
          <p>Enter your details below to log in</p>
          <form onSubmit={handleLogInSubmit}>
            <label>
              Username:
              <input
                className="username-input"
                name="username"
                placeholder="your e-mail"
                value={username}
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                className="password-input"
                name="password"
                placeholder="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </>
      )}
      {signUpScreen && (
        <>
          <p>Welcome to {websiteName} enter your details to sign up!</p>
          <form onSubmit={handleLogInSubmit}>
            <label>
              Username:
              <input
                className="username-input"
                name="username"
                placeholder="your e-mail"
                value={username}
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              {!isValidEmail(username) && username.length > 5 ? (
                <p>enter a valid e-mail</p>
              ) : (
                <></>
              )}
            </label>
            <label>
              Password:
              <input
                className="password-input"
                name="password"
                placeholder="password"
                value={passwordOne}
                type="password"
                onChange={(e) => setPasswordOne(e.target.value)}
              />
              <input
                className="password-input"
                name="password"
                placeholder="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {/* not sure about the conditions here */}
            {isValidEmail(username) &&
            (password === passwordOne ||
              passwordOne.length === 0 ||
              password.length === 0) && 
              <input type="submit" value="Submit" />
            }
            {!(password === passwordOne ||
              passwordOne.length === 0 ||
              password.length === 0) && <p>your passwords don't match</p>}
          </form>
        </>
      )}
    </main>
  );
};

export default Home;
