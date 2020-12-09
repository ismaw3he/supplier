import React from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";
import user from "./img/user.svg";
// import {
//     Link
// } from "react-router-dom"

const ProfileHome = (props) => {
    return (
        <div className={classes.container}>
            <WindowHeader>Your Profile</WindowHeader>
            {console.log(props.data)}
            <div className={classes.profileContainer}>
                <div className={classes.avatar}>
                    <img src={user} className={classes.userAvatar} alt="User" />
                </div>
                <div className={classes.textContainer}>
                    <h3>{props.data.name + " " + props.data.surname}</h3>
                    <p>Lorem Ipsum</p>
                    <h5>Verified</h5>
                </div>
                <div className={classes.buttonContainer}>
                    <div className={"button-orange " + classes.margin}
                    onClick={()=>props.modalHandler(true)}>Verify</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHome;