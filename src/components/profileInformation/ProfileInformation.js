import React, { useState } from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";
import EditableList from "../editableList/EditableList";

import user from "./img/user.svg";

const ProfileInformation = (props) => {
    const editList = [
        {
            description: "Name",
            content: props.data.name
        },
        {
            description: "Surname",
            content: props.data.surname
        },
        {
            description: "Email",
            content: props.data.email
        },
        {
            description: "Your Profile Link",
            content: props.data.link
        },
        {
            description: "Company Name",
            content: props.data.companyName
        },
        {
            description: "Trade Role",
            content: props.data.tradeRole
        },
        {
            description: "Country/Region",
            content: props.data.country
        },
        {
            description: "Phone Number",
            content: props.data.phone
        },
    ]
    const [activeList, setActiveList] = useState("");

    return (
        <>
            <div className={classes.contact}>
                <WindowHeader>Contact Information</WindowHeader>
                <div className={classes.avatar}>
                    <img src={user} className={classes.userAvatar} alt="User" />
                </div>
                <h1 className={classes.fullName}>{props.data.name + " " + props.data.surname}</h1>
                <p className={classes.companyName}>{props.data.companyName}</p>

                <div className={classes.linkContainer}>
                    <p className={classes.linkHeader}>Your profile link</p>
                    <input className={classes.linkInput} type="text" defaultValue="https://www.supplier.com/RaufIsmayilov" />
                </div>
            </div>

            <div className={classes.contactEditable}>
                <WindowHeader>Your Account Settings</WindowHeader>
                {console.log(activeList)}
                {editList.map((item) => {
                    
                    return <EditableList
                        handler={setActiveList}
                        key={item.description}
                        active={activeList===item.description}
                        description={item.description}
                        content={item.content} />
                })}
            </div>
        </>
    )
}

export default ProfileInformation;