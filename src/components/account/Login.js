import styled from "styled-components";
import { useState } from "react";

export default function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const [error, setError] = useState("");

  return (
    <div>
      <Container>
        <h3>Login</h3>
        <HeroContent>
          <p>
            Don't have an account? <span>Sign up here.</span>
          </p>
          <form>
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
        </HeroContent>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
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
  display: block;
  p {
    margin-top: 1rem;
  }
  span {
    &:hover {
      color: #f4e0ea;
      cursor: pointer;
    }
  }
`;
