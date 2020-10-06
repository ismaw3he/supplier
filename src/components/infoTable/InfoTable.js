import React, { useState } from 'react';
import classes from "./style/style.module.css"

const InfoTable = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.col}>
                <p className={classes.description}>{props.description[0]}</p>
                {
                    Array.isArray(props.value[0]) ?
                        <div className={classes.multiContainer}>
                            {props.value[0].map((item, index) => {
                                return (
                                    <div className={classes.multiValue} key={index}> {item} </div>
                                )
                            })}
                        </div> :
                        <p className={classes.value}>{props.value[0]}</p>
                }
            </div>
            <div className={classes.colDivider}></div>
            <div className={classes.col}>
                <p className={classes.description}>{props.description[1]}</p>

                {Array.isArray(props.value[1]) ? props.value[1].map((item, index) => {
                    return <div className={classes.multiValue} key={index}> {item} </div>
                }) :
                    <p className={classes.value}>{props.value[1]}</p>
                }
            </div>
        </div>
    )
}

export default InfoTable;