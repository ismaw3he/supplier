import React, { useState } from "react";
import classes from "./style/style.module.css";

import {
    Form,
    Input
} from 'semantic-ui-react'

const options = [
    { key: 'af', value: 'Afghanistan', text: 'Afghanistan' },
    { key: 'ax', value: 'Aland Islands', text: 'Aland Islands' },
    { key: 'al', value: 'Albania', text: 'Albania' },
    { key: 'dz', value: 'Algeria', text: 'Algeria' },
    { key: 'as', value: 'American Samoa', text: 'American Samoa' },
    { key: 'ad', value: 'Andorra', text: 'Andorra' },
    { key: 'ao', value: 'Angola', text: 'Angola' },
    { key: 'ai', value: 'Anguilla', text: 'Anguilla' },
    { key: 'ag', value: 'Antigua', text: 'Antigua' },
    { key: 'ar', value: 'Argentina', text: 'Argentina' },
    { key: 'am', value: 'Armenia', text: 'Armenia' },
    { key: 'aw', value: 'Aruba', text: 'Aruba' },
    { key: 'au', value: 'Australia', text: 'Australia' },
    { key: 'at', value: 'Austria', text: 'Austria' },
    { key: 'az', value: 'Azerbaijan', text: 'Azerbaijan' },
    { key: 'bs', value: 'Bahamas', text: 'Bahamas' },
    { key: 'bh', value: 'Bahrain', text: 'Bahrain' },
    { key: 'bd', value: 'Bangladesh', text: 'Bangladesh' },
    { key: 'bb', value: 'Barbados', text: 'Barbados' },
    { key: 'by', value: 'Belarus', text: 'Belarus' },
    { key: 'be', value: 'Belgium', text: 'Belgium' },
    { key: 'ru', value: 'Russia', text: 'Russia' },
    { key: 'tr', value: 'Turkey', text: 'Turkey' },
]
const EditableList = (props) => {
    // props.editHandler
    const [value, setValue] = useState(props.content)
    return (
        <div

            className={!props.active ? classes.container : classes.container + " " + classes.activeContainer}>
            <div onClick={ props.description!=="Trade Role" && props.description !== "Your Profile Link"? () => props.handler(props.description) : null} className={classes.fixed}>
                <h3 className={classes.description}>{props.description}</h3>
                <h3 className={classes.content}>{props.content}</h3>
                {props.description !== "Trade Role" && props.description !== "Your Profile Link" ?
                    <div className={classes.editContainer}>
                        <p>Edit</p>
                    </div> :
                    null
                }

            </div>
            {props.active ?
                <div className={classes.activeContent}>
                    <div className={classes.inputField}>
                        <p className={classes.description}>{props.description}</p>
                        {props.description === "Country/Region" ?
                            <Form.Select
                                fluid
                                options={options}
                                placeholder='Country'
                                onChange={(e, data) => {
                                    setValue(data.value)
                                }}
                            /> :
                            <Input
                                className={classes.input}
                                defaultValue={value}
                                onChange={(e) => { setValue(e.target.value) }}
                                type="text" />
                        }

                    </div>
                    <div className={classes.editButtonsContainer}>
                        <div
                            onClick={() => {
                                props.editHandler(props.description, value)
                                props.handler("")
                            }}
                            className={classes.button + " " + classes.save}>
                            Save
                            </div>
                        <div
                            onClick={() => props.handler("")}
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