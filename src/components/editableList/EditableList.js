import React from "react";
import classes from "./style/style.module.css";

const EditableList = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.fixed}>
                <h3 className={classes.description}>{props.description}</h3>
                <h3 className={classes.content}>{props.content}</h3>
                
                <div className={classes.editContainer}>
                    
                    <p>Edit</p>
                </div>
            </div>
        </div>
    )
}

export default EditableList;