import React from "react";
import classes from "./style/style.module.css";

import Input from "../Input/Input";
import {
    Form
} from 'semantic-ui-react';

const officeSize = [
    { key: "100 - 500", value: "100 - 500", text: "100 - 500" },
    { key: "500 - 1000", value: "500 - 1000", text: "500 - 1000" },
    { key: "1000 - 2000", value: "1000 - 2000", text: "1000 - 2000" },
    { key: "2000 - 5000", value: "2000 - 5000", text: "2000 - 5000" },
    { key: "5000+", value: "5000+", text: "5000+" },
]
const annualRevenue = [
    { key: " - 1", value: " - 1", text: "Below US $1 Million" },
    { key: "1 - 2.5", value: "1 - 2.5", text: "US $1 Million - US $2.5 Million" },
    { key: "2.5 - 5", value: "2.5 - 5", text: "US $2.5 Million - US $5 Million" },
    { key: "5 - 10", value: "5 - 10", text: "US $5 Million - US $10 Million" },
    { key: "10 - 50", value: "10 - 50", text: "US $10 Million - US $50 Million" },
    { key: "50 - 100", value: "50 - 100", text: "US $50 Million - US $100 Million" },
    { key: "100 - ", value: "100 - ", text: "Above US $100 Million" },
]
const employee = [
    { key: "1 - 10", value: "1 - 10", text: "1 - 10" },
    { key: "10 - 20", value: "10 - 20", text: "10 - 20" },
    { key: "20 - 50", value: "20 - 50", text: "20 - 50" },
    { key: "50 - 100", value: "50 - 100", text: "50 - 100" },
    { key: "100 - 500", value: "100 - 500", text: "100 - 500" },
    { key: "500+", value: "500+", text: "500+" },
]

const MManufacturingCapability = (props) => {
    return (
        <div className={classes.container}>
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Factory Location</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.data.name}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />

                        <p className={classes.inputInfo}> Please enter City & Street</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>
                <div className={classes.inputContainer} >
                    <Form.Field>

                        <Form.Select
                            fluid
                            label='Factory Size (Square meters)'
                            options={officeSize}
                            placeholder='Size'
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>
                
                <div className={classes.inputContainer} >
                    <Form.Field>

                        <Form.Select
                            fluid
                            label='Number of QC staff'
                            options={employee}
                            placeholder='Count'
                        />
                        <p className={classes.inputInfo}>Please enter how many people are working on Quality Control</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>
                
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Number of Production Lines</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.data.productionLines}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>
                <div style={{ width: "100%" }}></div>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Total Annual Output'
                            options={annualRevenue}
                            placeholder='Revenue'
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>
            </Form>
        </div>

    )
}

export default MManufacturingCapability;