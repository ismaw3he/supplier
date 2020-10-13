import React from 'react';
import classes from "./style/style.module.css"
import WindowHeader from "../windowHeader/WindowHeader";


const InfoBlock = (props) => {
    return (
        <div className={classes.container}>
            <WindowHeader edit={true}>{props.windowHeader}</WindowHeader>
            {props.children}
        </div>
    )
}

export default InfoBlock;