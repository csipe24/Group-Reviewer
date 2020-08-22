import React, {useRef} from "react";
import app from "../utils/api";
import {useLogin} from "../utils/auth"
import api from "../utils/api";

function Login() {

    const emailInput = useRef();
    const passwordInput = useRef();

    const login = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailInput.current.value;
        const password = passwordInput.current.value;

        api.register({ email, password })
        .then( () => userAuth({email, password}))
        .then( () => window.location.href = "./")
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email" ref={emailInput}/>
                <input type="password" name="password" placeholder="password" ref={passwordInput}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;