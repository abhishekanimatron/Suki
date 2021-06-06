import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import FirebaseContext from "../../context/firebase";
import * as ROUTES from "../../constants/routes";

export default function Login() {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = password === "" || emailAddress === "";

  const [error, setError] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.CART);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <div>
      <Container>
        <h3>Login</h3>
        <HeroContent>
          <p>
            Don't have an account? <span>Sign up here.</span>
          </p>
          {error && <p>{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter email address"
              type="text"
              placeholder="Email "
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter Password"
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              // if invalid the display of button is dimmed
              className={`bg-blue-medium w-full rounded h-8 font-bold`}
            >
              Log In
            </button>
          </form>
          <p id="return-btn">Return to store</p>
        </HeroContent>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 3rem;
    display: block;
    font-weight: normal;
  }
`;
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  p {
    margin-top: 1rem;
  }
  #return-btn {
    letter-spacing: 1px;
    &:hover {
      color: #f4e0ea;
      cursor: pointer;
    }
  }
  span {
    &:hover {
      color: #f4e0ea;
      cursor: pointer;
    }
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 2px;
    border: 1.5px solid black;
    margin-bottom: 1.2rem;
  }
  button {
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 2px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    background-color: #f4e0ea;
    transition: cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
    &:hover {
      background-color: pink;
    }
  }
`;
