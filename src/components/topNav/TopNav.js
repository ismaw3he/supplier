import React from "react";
import "./style/style.css"

import Account from "../account/Account";

export default function TopNav() {
    return (
        <div className="top-nav"> 
            <Account
                loggedIn={true}
                fullName="Rauf Ismayilov"
            />
        </div>
    )
}