import React, { useState } from "react";
import classes from "./style/style.module.css";

import {
    Input
} from 'semantic-ui-react'

const EditableList = (props) => {
    const [value, setValue] = useState(props.content)
    return (
        <div onClick={() => props.handler(props.description)}
            className={!props.active ? classes.container : classes.container + " " + classes.activeContainer}>
            <div className={classes.fixed}>
                <h3 className={classes.description}>{props.description}</h3>
                <h3 className={classes.content}>{props.content}</h3>

                <div className={classes.editContainer}>
                    <p>Edit</p>
                </div>

            </div>
            {props.active ?
                <div className={classes.activeContent}>
                    <div className={classes.inputField}>
                        <p className={classes.description}>{props.description}</p>
                        <Input
                            className={classes.input}
                            defaultValue={props.content}
                            type="text" />
                    </div>
                    <div className={classes.editButtonsContainer}>
                        <div className={classes.button + " " + classes.save}>Save</div>
                        <div
                            onClick={() => props.handler(" ")}
                            className={classes.button + " " + classes.cancel}
                        >
                            Cancel
                        </div>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default EditableList;