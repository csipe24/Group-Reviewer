import React from "react";

import {useIsAuthenticated, useLogout} from "../utils/auth";

function Home() {
    const isAuth = useIsAuthenticated;
    const logout = useLogout();

    return (
        <div>
            <h1>Home</h1>
            <button name="login" href="">Login</button>
            {/* {
                isAuth ? <button onClick={logout}></button>
            } */}
        </div>
    )
}

export default Home;