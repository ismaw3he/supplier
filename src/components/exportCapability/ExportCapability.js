import React, { useState } from "react";
import classes from "./style/style.module.css";
import EditableContent from "../editableContent/EditableContent";
import Input from "../Input/Input";
import {
    Form
} from 'semantic-ui-react';
import close from "../../img/close.png";

const annualRevenue = [
    { key: "-1", value: "-1", text: "Below US $1 Million" },
    { key: "1 - 2.5", value: "1 - 2.5", text: "US $1 Million - US $2.5 Million" },
    { key: "2.5 - 5", value: "2.5 - 5", text: "US $2.5 Million - US $5 Million" },
    { key: "5 - 10", value: "5 - 10", text: "US $5 Million - US $10 Million" },
    { key: "10 - 50", value: "10 - 50", text: "US $10 Million - US $50 Million" },
    { key: "50 - 100", value: "50 - 100", text: "US $50 Million - US $100 Million" },
    { key: "100 - ", value: "100 - ", text: "Above US $100 Million" },
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
const exportPercentage = [
    { key: "1% - 10%", value: "1% - 10%", text: "1% - 10%" },
    { key: "10% - 20%", value: "10% - 20%", text: "10% - 20%" },
    { key: "20% - 30%", value: "20% - 30%", text: "20% - 30%" },
    { key: "30% - 40%", value: "30% - 40%", text: "30% - 40%" },
    { key: "40% - 50%", value: "40% - 50%", text: "40% - 50%" },
    { key: "50% - 60%", value: "50% - 60%", text: "50% - 60%" },
    { key: "60% - 70%", value: "60% - 70%", text: "60% - 70%" },
    { key: "70% - 80%", value: "70% - 80%", text: "70% - 80%" },
    { key: "80% - 90%", value: "80% - 90%", text: "80% - 90%" },
    { key: "90% - 100%", value: "90% - 100%", text: "90% - 100%" },
]
const employee = [
    { key: "1 - 10", value: "1 - 10", text: "1 - 10" },
    { key: "10 - 20", value: "10 - 20", text: "10 - 20" },
    { key: "20 - 50", value: "20 - 50", text: "20 - 50" },
    { key: "50 - 100", value: "50 - 100", text: "50 - 100" },
    { key: "100 - 500", value: "100 - 500", text: "100 - 500" },
    { key: "500+", value: "500+", text: "500+" },
]

const SourcingInformationSeller = (props) => {
    const [percentage, setPercentage] = useState(0);
    const [mainMarkets, setMainMarkets] = useState([
        {
            name: "North America",
            percentage: 0
        },
        {
            name: "Southeast Asia",
            percentage: 0
        },
        {
            name: "Mid East",
            percentage: 0
        },
        {
            name: "Central America",
            percentage: 0
        },
        {
            name: "South Asia",
            percentage: 0
        },
        {
            name: "South America",
            percentage: 0
        },
        {
            name: "Africa",
            percentage: 0
        },
        {
            name: "Eastern Asia",
            percentage: 0
        },
        {
            name: "Northern Europe",
            percentage: 0
        },
        {
            name: "Domestic Market",
            percentage: 0
        },
        {
            name: "Eastern Europe",
            percentage: 0
        },
        {
            name: "Oceania",
            percentage: 0
        },
        {
            name: "Western Europe",
            percentage: 0
        },
        {
            name: "outhern Europe",
            percentage: 0
        },
    ])

    const percentInputChangeHandler = (name, value) => {
        let marketsCopy = [...mainMarkets];
        let counter = 0;
        if (!isNaN(value)) {
            for (let index = 0; index < marketsCopy.length; index++) {
                if (marketsCopy[index].name === name) {
                    marketsCopy[index].percentage = value;
                }

                counter += Number(marketsCopy[index].percentage)
            }
        }

        setPercentage(counter)
        setMainMarkets(marketsCopy);
    }
    // ******************************************
    const [multipleIndustries, setMultipleIndustries] = useState(false);

    // ******************************************
    const [showOffices, setShowOffices] = useState(false)

    const [officesList, setOfficesList] = useState([
        {
            id: 0,
            name: "Test Name",
            model: "test Model",
            quantity: "Test Quantity"
        }
    ])

    const officesActionHandler = (actionType, payload) => {
        let list = [...officesList];
        if (actionType === "ADD") {
            list.push({
                id: Math.random(),
                name: "Test Name",
                model: "test Model",
                quantity: "Test Quantity"
            })
        }
        else if (actionType === "REMOVE" && list.length !== 1) {
            list = list.filter((item) => item.id !== payload)
        }

        setOfficesList(list)
    }

    const [products, setProducts] = useState([
        {
            id: Math.random(),
            name: "Shoes"
        }
    ]);
    const itemAddHandler = (field, value) => {
        let fieldCopy = null;
        let stateHandler = null;
        if (field === "PRODUCTS") {
            fieldCopy = [...products];
            stateHandler = setProducts;
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
        if (field === "PRODUCTS") {
            fieldCopy = [...products];
            stateHandler = setProducts;
        }

        fieldCopy = fieldCopy.filter((item) => item.id !== id)
        stateHandler(fieldCopy);
    }

    return (
        <div className={classes.container}>
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>

                        <Form.Select
                            fluid
                            label='Total Annual Revenue'
                            options={annualRevenue}
                            placeholder='Revenue'
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
                            label='Export Percentage (%)'
                            options={exportPercentage}
                            placeholder='%'
                        />

                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>
                <div className={classes.inputContainerFull} >
                    <h2>Main Markets and Distribution</h2>
                    <div className={classes.percentLoaderContainer}>
                        <div className={classes.percentLoader}>
                            <div className={classes.percentLoaderFull}
                                style={percentage <= 100 ? { width: percentage + "%" } : {
                                    width: percentage + "%",
                                    backgroundColor: "#dc3545"
                                }}
                            >

                            </div>
                        </div>

                        <p className={classes.percentNumber}
                            style={percentage > 100 ? {
                                color: "#dc3545"
                            } : {}}
                        >
                            {percentage}%
                        </p>
                    </div>
                    <div className={classes.percentageContainer}>
                        {mainMarkets.map((item, index) => {
                            return (
                                <div key={index} className={classes.shortInputContainer} >
                                    <div className={classes.shortInput}>
                                        <Input

                                            elementType='input'
                                            elementConfig={{
                                                type: "text",
                                                placeholder: "%"
                                            }}
                                            focus={true}
                                            value={item.percentage}
                                            changed={
                                                (event) =>
                                                    percentInputChangeHandler(item.name, event.target.value)
                                            }
                                        />
                                    </div>
                                    <label className={classes.percentLabel}>% {item.name}</label>
                                </div>
                            )
                        })}
                        {percentage !== 100 ?
                            <div className={classes.info}>
                                Main markets percentage should be
                         <span className={classes.danger}>100%</span>
                            </div>
                            :
                            null}

                    </div>
                </div>



                <div className={classes.inputContainer} >
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Year When your company started exporting'
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
                            label='Number of Employees in Trade Department'
                            options={employee}
                            placeholder='Employee Count'
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>


                <div className={classes.flexContainer}>
                    <Form.Group inline>
                        <label>Are you able to source across multiple industries?</label>
                        <Form.Radio
                            label='Yes'
                            value='yes'
                            checked={multipleIndustries}
                            onChange={() => setMultipleIndustries(true)}
                        />
                        <Form.Radio
                            label='No'
                            value='no'
                            checked={!multipleIndustries}
                            onChange={() => setMultipleIndustries(false)}
                        />
                    </Form.Group>

                </div>

                <div className={classes.inputContainerWidth} >
                    <Form.Field>

                        <Input
                            enter={true}
                            submitHandler={itemAddHandler}
                            submitType={"PRODUCTS"}
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Add Product"
                            }}
                            changed={(event) => console.log("locationOfRegistration")}
                        />
                        <div className={classes.infoWarning}>
                            Maximum <span className={classes.danger}>10 products</span> add and press enter
                        </div>

                        <p className={classes.inputInfo}>Added Products - {products.length}</p>

                        <div className={classes.multiple}>
                            {products.map((item) => {
                                return (
                                    <div key={item.id} className={classes.deletable}>
                                        <p className={classes.reset}>{item.name}</p>
                                        <div onClick={() => itemRemoveHandler("PRODUCTS", item.id)} className={classes.cursor}>
                                            <img src={close} alt="close"/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>

                        <Form.Select
                            fluid
                            label='Number of Quality Control Staff'
                            options={employee}
                            placeholder='Employee Count'
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>

                </div>


                <div className={classes.flexContainerEditable}>

                    <Form.Group inline>
                        <label>Does your company have an overseas office?</label>
                        <Form.Radio
                            label='Yes'
                            value='yes'
                            checked={showOffices}
                            onChange={() => setShowOffices(true)}
                        />
                        <Form.Radio
                            label='No'
                            value='no'
                            checked={!showOffices}
                            onChange={() => setShowOffices(false)}
                        />
                    </Form.Group>


                    {showOffices ?
                        officesList.map((item, index) => {
                            return <EditableContent
                                key={item.id}
                                id={item.id}
                                remove={index === 0 ? false : true}
                                handler={officesActionHandler}
                                header={"OverSeas Office"}
                                export={true}
                            />
                        })
                        :
                        null}
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Avarage lead time (days)</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.data.avarageLeadDays}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />
                        <p className={classes.inputInfo}> Please enter the average production time. Numbers only.</p>

                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>

                <div className={classes.flexContainer}>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Accepted Delivery Terms</label>
                            <Form.Checkbox
                                label='FOB'
                            />
                            <Form.Checkbox
                                label='DDP'
                            />
                            <Form.Checkbox
                                label='EXV'
                            />
                            <Form.Checkbox
                                label='FCA'
                            />
                            <Form.Checkbox
                                label='DAF'
                            />
                            <Form.Checkbox
                                label='CFR'
                            />
                            <Form.Checkbox
                                label='Express delivery'
                            />

                        </Form.Field>
                    </div>

                </div>
                <div style={{ width: "100%" }}></div>
                <div className={classes.flexContainer}>

                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Accepted Payment Currency</label>
                            <Form.Checkbox
                                label='USD'
                            />
                            <Form.Checkbox
                                label='EUR'
                            />
                            <Form.Checkbox
                                label='TRY'
                            />
                            <Form.Checkbox
                                label='AZN'
                            />
                            <Form.Checkbox
                                label='CAD'
                            />
                            <Form.Checkbox
                                label='AUD'
                            />
                            <Form.Checkbox
                                label='CNY'
                            />
                        </Form.Field>
                    </div>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Accepted Payment Type</label>
                            <Form.Checkbox
                                label='PayPal'
                            />
                            <Form.Checkbox
                                label='Cash'
                            />
                            <Form.Checkbox
                                label='Bank Transfer'
                            />
                            <Form.Checkbox
                                label='Credit Card'
                            />
                            <Form.Checkbox
                                label='T/T'
                            />
                            <Form.Checkbox
                                label='Western Union'
                            />
                            <Form.Checkbox
                                label='Cash'
                            />
                        </Form.Field>
                    </div>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Language spokens</label>
                            <Form.Checkbox
                                label='English'
                            />
                            <Form.Checkbox
                                label='Russian'
                            />
                            <Form.Checkbox
                                label='Turkish'
                            />
                            <Form.Checkbox
                                label='Chinese'
                            />
                            <Form.Checkbox
                                label='Spanish'
                            />
                            <Form.Checkbox
                                label='Japanese'
                            />
                            <Form.Checkbox
                                label='Arabic'
                            />
                            <Form.Checkbox
                                label='Korean'
                            />
                        </Form.Field>
                    </div>
                </div>
            </Form>
        </div>

    )
}

export default SourcingInformationSeller;