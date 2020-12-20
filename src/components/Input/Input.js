import React from "react";
import classes from "./style/style.module.css";

const handleFocus = (event) => event.target.select();
const handleSubmit = (event, submitType, submitHandler) =>{
        if(event.key === "Enter"){
            console.log("here");
            submitHandler(submitType, event.target.value)
        }
}
const Input = (props) => {

    switch (props.elementType) {
        case ("input"):
            return (
                <input
                    onKeyPress={props.enter ? (event)=>handleSubmit(event, props.submitType, props.submitHandler) : null}
                    onFocus={props.focus ? handleFocus : null}
                    className={classes.Input}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            )
        default:
            return (
                <input
                className={classes.Input}
                {...props.elementConfig}
                value={props.value}

            />
            )
    }
}

export default Input;