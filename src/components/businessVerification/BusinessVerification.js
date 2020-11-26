import React from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";

import Input from "../Input/Input";
import {
    Form
} from 'semantic-ui-react';


const options = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'ru', value: 'ru', text: 'Russia' },
    { key: 'tr', value: 'tr', text: 'Turkey' },
]

const SourcingInformationSeller = (props) => {
    return (
        <div className={classes.container}>
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Registered Business Name</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Business Name"
                            }}
                            value={props.data.name}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />
                        <p className={classes.inputInfo}>Please enter the full name of your company.</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>

                <WindowHeader cross={false} close={props.closeModal}>Business Address</WindowHeader>
                
                <div className={classes.inputContainer} >
                    <Form.Field>    
                        <Form.Select
                            fluid
                            label='Country'
                            options={options}
                            placeholder='Country'
                        />
                                                <p className={classes.inputInfo}>Please enter where you company is located.</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Region/Province</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Region"
                            }}
                            value={props.data.region}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />

                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>City</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "City"
                            }}
                            value={props.data.city}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Street</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Street"
                            }}
                            value={props.data.street}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />
                        <p className={classes.inputInfo}>Please enter your company address, street name & number.</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Zip/Postal Code</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Zip/Postal code"
                            }}
                            value={props.data.zipCode}
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
                        <label>Company Website URL</label>
                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Add Product"
                            }}
                            changed={(event) => console.log("locationOfRegistration")}
                        />

                        <p className={classes.inputInfo}>Company Website URL should begin with http:// or https://</p>

                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>
            </Form>
        </div>
    )
}

export default SourcingInformationSeller;