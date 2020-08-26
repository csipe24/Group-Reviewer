import React, {useRef} from "react";
import api from "../utils/api";
import { useLogin } from "../utils/auth";

function Login(){
    
    const emailInput = useRef();
    const passwordInput = useRef();
    const password2Input = useRef();

    const login = useLogin();

    const handleSubmit = (e)=>{
        e.prevent.default();
        console.log("Submit");
        console.log(emailInput.current.value);

        const email = emailInput.Input.current.value;
        const password = passwordInput.Input.current.value;

        login( { email, password } )
        .then( userAuth => console.log( userAuth ))
        .catch( errors => errors );
    };


    return (
    <div>
    <h1>Login</h1>
    <a href="/home"></a>
    <a href="/register"></a>
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" ref={emailInput}></input>
        <input type="password" name="password" placeholder="Password Here" ref={passwordInput}></input>
        <button>Submit</button>
    </form>
    <h2>Havent Registered?</h2>
    <h2>Click <a href="/register">Here</a></h2>
    </div>
        )
}

export default Login;