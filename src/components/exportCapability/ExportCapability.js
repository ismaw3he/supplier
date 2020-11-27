import React from "react";
import classes from "./style/style.module.css";

import Input from "../Input/Input";
import {
    Form,
    Checkbox
} from 'semantic-ui-react';

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
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            {/* <label>Are you able to source across multiple industries?</label>
                            <Form.Checkbox
                                label='Yes'
                            />
                            <Form.Checkbox
                                label='No'
                            /> */}
                            <label>Are you able to source across multiple industries?</label>
                            <Checkbox toggle label='No (Under Development)' disabled />
                        </Form.Field>
                    </div>
                </div>


                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Number of Quality Control Staff</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.data.qualityControlStaffCount}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>


                <div className={classes.flexContainer}>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            {/* <label>Are you able to source across multiple industries?</label>
                            <Form.Checkbox
                                label='Ələt'
                            />
                            <Form.Checkbox
                                label='GYD cargo'
                            /> */}

                            <label>Are you able to source across multiple industries?</label>
                            <Checkbox toggle label='No (Under Development)' disabled />
                        </Form.Field>
                    </div>
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