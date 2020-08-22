import React, {useRef} from "react";
import {useIsAuthenticated} from "../utils/auth"
import api from "../utils/api";

function Login() {

    const emailInput = useRef();
    const passwordInput = useRef();

    const userAuth = useIsAuthenticated();

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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email" ref={emailInput}/>
                <input type="password" name="password" placeholder="password" ref={passwordInput}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;