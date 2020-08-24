import React, { useRef } from "react";
import api from "../utils/api";
import { useLogin } from "../utils/auth";
import Navbar from "../components/Navbar";
import PageFooter from "../components/Footer";

function Register() {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const password2Input = useRef();

  const login = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const password2 = password2Input.current.value;

    api
      .register({ name, email, password, password2 })
      .then(() => login({ email, password }))
      .then(() => (window.location.href = "./"));
  };

  return (
    <div>
      <Navbar/>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="username" ref={nameInput} />
        <input type="email" name="email" placeholder="email" ref={emailInput} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordInput}
        />
        <input
          type="password"
          name="password2 "
          placeholder="Retype password"
          ref={password2Input}
        />
        <button>Submit</button>
      </form>
      <PageFooter/>
    </div>
  );
}

export default Register;
