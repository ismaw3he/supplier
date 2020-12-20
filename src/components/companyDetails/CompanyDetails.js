import React, { useState } from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";
import close from "../../img/close.png";
import Input from "../Input/Input";
import {
    Form,
    TextArea
} from 'semantic-ui-react'

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
const yearOptions = [
    { key: 2020, value: 2020, text: 2020 },
    { key: 2019, value: 2019, text: 2019 },
    { key: 2018, value: 2018, text: 2018 },
    { key: 2017, value: 2017, text: 2016 },
    { key: 2015, value: 2015, text: 2015 },
    { key: 2014, value: 2014, text: 2014 },
    { key: 2013, value: 2013, text: 2013 },
    { key: 2012, value: 2012, text: 2012 },
    { key: 2011, value: 2011, text: 2011 },
    { key: 2010, value: 2010, text: 2010 },
    { key: 2009, value: 2009, text: 2009 },
    { key: 2008, value: 2008, text: 2008 },
    { key: 2007, value: 2007, text: 2007 },
    { key: 2006, value: 2006, text: 2006 },
    { key: 2005, value: 2005, text: 2005 },
]

const employee = [
    { key: "1 - 10", value: "1 - 10", text: "1 - 10" },
    { key: "10 - 20", value: "10 - 20", text: "10 - 20" },
    { key: "20 - 50", value: "20 - 50", text: "20 - 50" },
    { key: "50 - 100", value: "50 - 100", text: "50 - 100" },
    { key: "100 - 500", value: "100 - 500", text: "100 - 500" },
    { key: "500+", value: "500+", text: "500+" },
]

const officeSize = [
    { key: "100 - 500", value: "100 - 500", text: "100 - 500" },
    { key: "500 - 1000", value: "500 - 1000", text: "500 - 1000" },
    { key: "1000 - 2000", value: "1000 - 2000", text: "1000 - 2000" },
    { key: "2000 - 5000", value: "2000 - 5000", text: "2000 - 5000" },
    { key: "5000+", value: "5000+", text: "5000+" },
]
const CompanyDetails = (props) => {
    const [mainProducts, setMainProducts] = useState([
        {
            id: Math.random(),
            name: "Shoes"
        }
    ]);
    const [otherProducts, setOtherProducts] = useState([
        {
            id: Math.random(),
            name: "Dress"
        },
        {
            id: Math.random(),
            name: "Paper"
        }
    ]);
    const [websites, setWebsites] = useState([
        {
            id: Math.random(),
            name: "https://app.zeplin.io/project"
        }
    ]);
    const itemAddHandler = (field, value) => {
        let fieldCopy = null;
        let stateHandler = null;
        if (field === "MAIN") {
            fieldCopy = [...mainProducts];
            stateHandler = setMainProducts;
        }
        else if (field === "OTHER") {
            fieldCopy = [...otherProducts];
            stateHandler = setOtherProducts;
        }
        else if (field === "WEBSITE") {
            fieldCopy = [...websites];
            stateHandler = setWebsites;
        }

        fieldCopy.push({
            id: Math.random(),
            name: value
        })
        if (value) {
            stateHandler(fieldCopy);
        }

    }
    const itemRemoveHandler = (field, id) => {
        let fieldCopy = null;
        let stateHandler = null;
        if (field === "MAIN") {
            fieldCopy = [...mainProducts];
            stateHandler = setMainProducts;
        }
        else if (field === "OTHER") {
            fieldCopy = [...otherProducts];
            stateHandler = setOtherProducts;
        }
        else if (field === "WEBSITE") {
            fieldCopy = [...websites];
            stateHandler = setWebsites;
        }

        fieldCopy = fieldCopy.filter((item) => item.id !== id)
        stateHandler(fieldCopy);
    }
    return (
        <div className={classes.container}>
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Company Name</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Company Name"
                            }}
                            value={props.data.name}
                            changed={(event) => console.log("name")}
                        />
                        <p className={classes.inputInfo}>Please enter the full name of your company.</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        {/* value={props.data.locationOfRegistration} */}
                        <Form.Select
                            fluid
                            label='Location of Registration'
                            options={options}
                            placeholder='Country'
                        />
                        <p className={classes.inputInfo}>Location of Registration</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <WindowHeader>Company Operational Address</WindowHeader>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Street</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Location of Registration"
                            }}
                            value={props.data.street}
                            changed={(event) => console.log("locationOfRegistration")}
                        />
                        <p className={classes.inputInfo}>Please enter your company address, street name & number.</p>
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
                                placeholder: "Location of Registration"
                            }}
                            value={props.data.city}
                            changed={(event) => console.log("locationOfRegistration")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        {/* value={props.data.locationOfRegistration} */}
                        <Form.Select
                            fluid
                            label='Location of Registration'
                            options={options}
                            placeholder='Country'
                        />
                        <p className={classes.inputInfo}>Location of Registration</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>ZIP/Postal Code</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Post Code"
                            }}
                            value={props.data.zipCode}
                            changed={(event) => console.log("locationOfRegistration")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <WindowHeader>Main Category</WindowHeader>


                <div className={classes.inputContainer} >
                    <Form.Field>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Post Code"
                            }}
                            value={props.data.mainCategory}
                            changed={(event) => console.log("locationOfRegistration")}
                        />
                        <p className={classes.inputInfo}>Your decided main category will be the basis for your industry vertical for future events. Your Star Rating will be based on the secondary category with the highest product quantity under this primary category.</p>
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <WindowHeader>Main Products</WindowHeader>


                <div className={classes.inputContainer} >
                    <Form.Field onSubmit={() => console.log("submit")}>

                        <Input
                            enter={true}
                            submitHandler={itemAddHandler}
                            submitType={"MAIN"}
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Add Product"
                            }}
                            changed={(event) => console.log("locationOfRegistration")}
                        />
                        <div className={classes.info}>
                            Maximum <span className={classes.danger}>10 products</span> add and press enter
                        </div>

                        <p className={classes.inputInfo}>Added Products - {mainProducts.length}</p>

                        <div className={classes.multiple}>
                            {mainProducts.map((item) => {
                                return (
                                    <div key={item.id} className={classes.deletable}>
                                        <p className={classes.reset}>{item.name}</p>
                                        <div onClick={() => itemRemoveHandler("MAIN", item.id)} className={classes.cursor}>
                                            <img src={close} alt="close"/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Form.Field>
                </div>

                <WindowHeader>Other Products You Sell</WindowHeader>


                <div className={classes.inputContainer} >
                    <Form.Field>

                        <Input
                            enter={true}
                            submitHandler={itemAddHandler}
                            submitType={"OTHER"}
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Add Product"
                            }}
                            changed={(event) => console.log("locationOfRegistration")}
                        />
                        <div className={classes.info}>
                            Maximum <span className={classes.danger}>10 products</span> add and press Enter.
                        </div>

                        <p className={classes.inputInfo}>Added Products - {otherProducts.length}</p>

                        <div className={classes.multiple}>
                            {otherProducts.map((item) => {
                                return (
                                    <div key={item.id} className={classes.deletable}>
                                        <p className={classes.reset}>{item.name}</p>
                                        <div onClick={() => itemRemoveHandler("OTHER", item.id)} className={classes.cursor}>
                                            <img src={close} alt="close"/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Form.Field>
                </div>

                <WindowHeader>Other Company Details</WindowHeader>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Year Company Established'
                            options={yearOptions}
                            placeholder='Year'
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
                            label='Total No. Employees'
                            options={employee}
                            placeholder='Employee Count'
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
                            enter={true}
                            submitHandler={itemAddHandler}
                            submitType={"WEBSITE"}
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Add Product"
                            }}
                            changed={(event) => console.log("locationOfRegistration")}
                        />
                        <div style={{ top: "22px" }} className={classes.info}>
                            Maximum <span className={classes.danger}>3 URLs</span> allowed.
                        </div>

                        <p className={classes.inputInfo}>Each company website URL should begin with http://.
                                                            If your company owns more than one website, click "+" to add a URL.</p>

                        <div className={classes.multiple}>
                            {websites.map((item) => {
                                return (
                                    <div key={item.id} className={classes.deletable}>
                                        <p className={classes.reset}>{item.name}</p>
                                        <div onClick={() => itemRemoveHandler("WEBSITE", item.id)} className={classes.cursor}>
                                            <img src={close} alt="close"/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Form.Field>
                </div>
                <div style={{ width: "100%" }}></div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Legal Owner</label>
                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Year"
                            }}
                            value={props.data.legalOwner}
                            changed={(event) => console.log("locationOfRegistration")}
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
                            label='Office Size (Square meters)'
                            options={officeSize}
                            placeholder='Size'
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>
                <div style={{ width: "100%" }}></div>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Company Advantages</label>
                        <TextArea placeholder='Tell us more' style={{ minHeight: 200 }} />


                        <p className={classes.inputInfo}>
                            Please briefly describe your company’s advantages.
                            E.g. “We have twenty years experience of product design.”
                            </p>

                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>
            </Form>
        </div>
    )
}

export default CompanyDetails;