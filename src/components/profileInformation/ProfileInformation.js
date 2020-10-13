import React from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";
import EditableList from "../editableList/EditableList";

import user from "./img/user.svg";

const ProfileInformation = (props) => {
    return (
        <>
            

           
            <div className={classes.contact}>
                <WindowHeader>Contact Information</WindowHeader>
                <div className={classes.avatar}>
                    <img src={user} className={classes.userAvatar} alt="User" />
                </div>
                <h1 className={classes.fullName}>{props.data.fullName}</h1>
                <p className={classes.companyName}>{props.data.companyName}</p>

                <div className={classes.linkContainer}>
                    <p className={classes.linkHeader}>Your profile link</p>
                    <input className={classes.linkInput} type="text" defaultValue="https://www.supplier.com/RaufIsmayilov"/>
                </div>
            </div>

            <div className={classes.contactEditable}>
                <WindowHeader>Your Account Settings</WindowHeader>
                {console.log(props)}
                <EditableList description="Full Name" content={props.data.fullName}/>
                <EditableList description="Your Profile Link" content={props.data.link}/>
                <EditableList description="Email" content={props.data.email}/>
                <EditableList description="Company Name" content={props.data.companyName}/>
                <EditableList description="Trade Role" content={props.data.tradeRole}/>
                <EditableList description="Country/Region" content={props.data.country}/>
                <EditableList description="Phone Number" content={props.data.phone}/>
            </div>
        </>
    )
}

export default ProfileInformation;