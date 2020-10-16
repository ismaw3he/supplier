import React from "react";
import "./style/style.css"
import localGetter from "../../generals/localGetter";

import Account from "../account/Account";

export default function TopNav() {
    const localData = localGetter()
    return (
        <div className="top-nav"> 
            <Account
                loggedIn={localData!==null? true : false}
                // fullName={localData.name? localData.name +" "+ localData.surname: ""}
                fullName={"Rauf Ismayilov"}
            />
        </div>
    )
}