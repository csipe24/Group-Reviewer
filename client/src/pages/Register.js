import React, {useRef} from "react";
import app from "../utils/api";
import {useLogin} from "../utils/auth"
import api from "../utils/api";

function Register() {

    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const password2Input = useRef();
    const stateInput = useRef();

    const login = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameInput.current.value;
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        const password2 = password2Input.current.value;
        const state = stateInput.current.value;

        api.register({name, email, password, password2, state})
        .then( () => login({email, password}))
        .then( () => window.location.href = "./")
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="username" ref={nameInput}/>
                <input type="email" name="email" placeholder="email" ref={emailInput}/>
                <input type="password" name="password" placeholder="password" ref={passwordInput}/>
                <input type="passowrd" name="password2" placeholder="password2" ref={password2Input}/>
                <input type="text" name="state" placeholder="state" ref={stateInput}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register;