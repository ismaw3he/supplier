import React, { useState } from "react";
import classes from "./style/style.module.css";

import Input from "../Input/Input";
import {
    Form
} from 'semantic-ui-react';

import EditableContent from "../editableContent/EditableContent";
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
    const [showCorporate, setShowCorporate] = useState(false)

    const [corporateList, setCorporateList] = useState([
        {
            id: 0,
            name: "Test Name",
            photo: "test_url",
            description: "Description Here"
        }
    ])

    const corporateActionHandler = (actionType, payload) => {
        let list = [...corporateList];
        if (actionType === "ADD") {
            list.push({
                id: Math.random(),
                name: "Test Name",
                photo: "test_url",
                description: "Description Here"
            })
        }
        else if (actionType === "REMOVE" && list.length !== 1) {
            list = list.filter((item) => item.id !== payload)
        }

        setCorporateList(list)
    }

    return (
        <div className={classes.container}>
            <Form className={classes.customForm}>
                <div className={classes.flexContainer}>
                    <Form.Group inline>
                        <label>Do you cooperate with a factory?</label>
                        <Form.Radio
                            label='Yes'
                            value='yes'
                            checked={showCorporate}
                            onChange={() => setShowCorporate(true)}
                        />
                        <Form.Radio
                            label='No'
                            value='no'
                            checked={!showCorporate}
                            onChange={() => setShowCorporate(false)}
                        />
                    </Form.Group>

                    {showCorporate ?
                        corporateList.map((item, index) => {
                            return <EditableContent
                                key={item.id}
                                id={item.id}
                                remove={index === 0 ? false : true}
                                handler={corporateActionHandler}
                                header={"Process"}
                                showCorporate={true}
                            />
                        })

                        :
                        null}

                </div>



                {props.manufacturer ?
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

                        </Form.Field>
                    </div>
                    : null}

                {props.manufacturer ?
                    <div className={classes.inputContainer} >
                        <Form.Field>

                            <Form.Select
                                fluid
                                label='Factory Size (Square meters)'
                                options={officeSize}
                                placeholder='Size'
                            />
                        </Form.Field>
                    </div>
                    : null}

                {props.manufacturer ?
                    <div className={classes.inputContainer} >
                        <Form.Field>

                            <Form.Select
                                fluid
                                label='Number of QC staff'
                                options={employee}
                                placeholder='Count'
                            />
                            <p className={classes.inputInfo}>Please enter how many people are working on Quality Control</p>

                        </Form.Field>
                    </div>
                    : null}


                {props.manufacturer ?
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
                        </Form.Field>
                    </div>
                    : null}

                <div style={{ width: "100%" }}></div>
                {props.manufacturer ?
                    <div className={classes.inputContainer} >
                        <Form.Field>
                            <Form.Select
                                fluid
                                label='Total Annual Output'
                                options={annualRevenue}
                                placeholder='Revenue'
                            />
                        </Form.Field>
                    </div>
                    : null}


            </Form>
        </div>

    )
}

export default MManufacturingCapability;