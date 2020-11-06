import React from 'react';
import classes from "./style/style.module.css"
import WindowHeader from "../windowHeader/WindowHeader";


const InfoBlock = (props) => {
    return (
        <div className={classes.container}>
            <WindowHeader
             contactInfo={props.contactInfo}
             companyInfo={props.companyInfo}
             sourcingInfo={props.sourcingInfo}
             edit={true}>{props.windowHeader}</WindowHeader>
            {props.children}
        </div>
    )
}

export default InfoBlock;