import React from "react";
import localGetter from "../../generals/localGetter";
import classes from "./style/style.module.css";
import {
    Link
} from "react-router-dom";
import Account from "../account/Account";

export default function TopNav() {
    const localData = localGetter()

    
    return (
        <div className={classes.topNav}> 
                <Link to="/" className={classes.leftLogo}>
                    <h1>YOUR LOGO.</h1>
                </Link>
            <Account
                loggedIn={localData!==null? true : false}
                // loggedIn={true}
                fullName={localData.name? localData.name + " " + localData.surname: ""}
                // fullName={"Rauf Ismayilov"}
            />
        </div>
    )
}