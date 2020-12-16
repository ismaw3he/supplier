import React from "react";
import classes from "./style/style.module.css";

const handleFocus = (event) => event.target.select();

const Input = (props) => {

    switch (props.elementType) {
        case ("input"):
            return (
                <input
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