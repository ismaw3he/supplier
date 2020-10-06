import React from "react";
import classes from "./style/style.module.css";

const WindowHeader = (props) => {
    return (
        <div className={classes.headerContainer}>
                <h3 className={classes.header}>{props.children}</h3>
                {props.edit? <div className={classes.editContainer}>
                    <p>Edit</p>
                </div>: null}
                
        </div>
    )
}

export default WindowHeader;