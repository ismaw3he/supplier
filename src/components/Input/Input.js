import React from "react";
import classes from "./style/style.module.css";

const Input = (props) => {

    switch (props.elementType) {
        case ("input"):
            return (
                <input
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