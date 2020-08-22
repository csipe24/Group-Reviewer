import React from "react";

import {useIsAuthenicated, useLogout} from "../utils/auth";

function Home() {
    const isAuth = useIsAuthenticated;
    const logout = useLogout();

    return (
        <div>
            <h1>Home</h1>
            {
                isAuth ? <button onClick={logout}></button>
            }
        </div>
    )
}

export default Home;