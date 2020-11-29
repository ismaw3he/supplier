import React from "react";
import classes from "./style/style.module.css";

import {
    Form
} from 'semantic-ui-react';

const BusinessType = (props) => {
    return (
        <div className={classes.container}>
            <Form className={classes.customForm}>
                <div className={classes.flexContainer}>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Business Type</label>
                            {props.data.map((item) => {
                                return <Form.Checkbox
                                    key={item.name}
                                    defaultChecked={item.checked}
                                    onChange={(e, data) => { props.handler(item.name, data.checked) }}
                                    label={item.name}
                                />
                            })}
                            <p className={classes.inputInfo}> Please check minimum 1 and maximum of 3 marks</p>
                        </Form.Field>
                        {props.error ?
                            <div className={classes.info}>
                                You need to check <span className={classes.danger}>minimum 1 and maximum of 3</span> marks
                                            </div> : null
                        }

                    </div>
                </div>

            </Form>
        </div>
    )
}

export default BusinessType;