import React from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";
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
const purchasingVolume = [
    { key: "1 - 100", value: "1 - 100", text: "1 - 100" },
    { key: "100 - 500", value: "100 - 500", text: "100 - 500" },
    { key: "500 - 1000", value: "500 - 1000", text: "500 - 1000" },
    { key: "1000 - 2000", value: "1000 - 2000", text: "1000 - 2000" },
    { key: "2000 - 5000", value: "2000 - 5000", text: "2000 - 5000" },
    { key: "5000+", value: "5000+", text: "5000+" },
]

const frequency = [
    { key: "Daily", value: "Daily", text: "Daily" },
    { key: "Weekly", value: "Weekly", text: "Weekly" },
    { key: "Monthly", value: "Monthly", text: "Monthly" },
    { key: "Yearly", value: "Yearly", text: "Yearly" },

]
const ModalEdit = (props) => {
    let modal;


    if (props.contactInfo) {
        modal = (
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Email</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Email"
                            }}
                            value={props.contactInfo.email}
                            changed={(event) => console.log("email")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Fax</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.contactInfo.fax}
                            changed={(event) => console.log("fax")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Phone</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.contactInfo.phone}
                            changed={(event) => console.log("phone")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>
                <div className={classes.checkboxContainer} >
                    <Form.Field>
                        <label>Social Links</label>
                        <Form.Checkbox
                            label='Facebook'
                        />
                        <Form.Checkbox
                            label='Linkedin'
                        />
                        <Form.Checkbox
                            label='Instagram'
                        />
                        <Form.Checkbox
                            label='Google'
                        />
                        <Form.Checkbox
                            label='Twitter'
                        />
                        <Form.Checkbox
                            label='Telegram'
                        />
                    </Form.Field>
                </div>

            </Form>
        )
    }
    else if (props.companyInfo) {
        modal = (
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Company Name</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "Email"
                            }}
                            value={props.companyInfo.name}
                            changed={(event) => console.log("name")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        {/* <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.companyInfo.yearEstablished}
                            changed={(event) => console.log("fax")}
                        /> */}
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
                        <label>Official Website</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.companyInfo.webSite}
                            changed={(event) => console.log("phone")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <div className={classes.checkboxContainer} >
                    <Form.Field>
                        <label>Business Types</label>
                        <Form.Checkbox
                            label='"Manufacturer/ Factory'
                        />
                        <Form.Checkbox
                            label='Retailer'
                        />
                        <Form.Checkbox
                            label='Individual'
                        />
                        <Form.Checkbox
                            label='other'
                        />
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>

                        <Form.Select
                            fluid
                            label='Number of employers'
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
                        <label>About us</label>

                        {/* <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.companyInfo.about}
                            changed={(event) => console.log("about us")}
                        /> */}
                        <TextArea placeholder='Tell us more' style={{ minHeight: 200 }} />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}

                        <p className={classes.inputInfo}>
                            Please briefly describe your company’s advantages.
                            E.g. “We have twenty years experience of product design.”
                            </p>

                    </Form.Field>
                </div>
                <div className={classes.flexContainer}>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Platforms for selling</label>
                            <Form.Checkbox
                                label='Offline'
                            />
                            <Form.Checkbox
                                label='Amazon'
                            />
                            <Form.Checkbox
                                label='Ebay'
                            />
                            <Form.Checkbox
                                label='Aliexpress'
                            />
                            <Form.Checkbox
                                label='other'
                            />
                        </Form.Field>
                    </div>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Platforms for selling</label>
                            <Form.Checkbox
                                label='Offline'
                            />
                            <Form.Checkbox
                                label='Amazon'
                            />
                            <Form.Checkbox
                                label='Ebay'
                            />
                            <Form.Checkbox
                                label='Aliexpress'
                            />
                            <Form.Checkbox
                                label='other'
                            />
                        </Form.Field>
                    </div>
                </div>

                <WindowHeader cross={false} close={props.closeModal}>Registered Address</WindowHeader>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        {/* <label>Country/Region</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={"Azerbaijan"}
                            changed={(event) => console.log("about us")}
                        /> */}
                        <Form.Select
                            fluid
                            label='Country/Region'
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
                        <label>City</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={"Baku"}
                            changed={(event) => console.log("about us")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Province/State</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={"Absheron"}
                            changed={(event) => console.log("about us")}
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
                                placeholder: "text"
                            }}
                            value={"Nizami str 16"}
                            changed={(event) => console.log("about us")}
                        />
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
                                placeholder: "text"
                            }}
                            value={"AZ1134"}
                            changed={(event) => console.log("about us")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>
                <WindowHeader cross={false} close={props.closeModal}>Operational Address</WindowHeader>

                <div className={classes.inputContainer} >
                    <Form.Field>

                        {/* <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={"Azerbaijan"}
                            changed={(event) => console.log("about us")}
                        /> */}
                        <Form.Select
                            fluid
                            label='Country/Region'
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
                        <label>City</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={"Baku"}
                            changed={(event) => console.log("about us")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Province/State</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={"Absheron"}
                            changed={(event) => console.log("about us")}
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
                                placeholder: "text"
                            }}
                            value={"Nizami str 16"}
                            changed={(event) => console.log("about us")}
                        />
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
                                placeholder: "text"
                            }}
                            value={"AZ1134"}
                            changed={(event) => console.log("about us")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

            </Form>
        )
    }
    else if (props.sourcingInfo) {
        modal = (
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Annual Purchasing Volume'
                            options={purchasingVolume}
                            placeholder='Volume'
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
                            label='Avarage Sourcing Frequency'
                            options={frequency}
                            placeholder='Frequency'
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>

                <div className={classes.flexContainer}>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Primary Sourcing Purpose</label>
                            <Form.Checkbox
                                label='To resell items'
                            />
                            <Form.Checkbox
                                label='other'
                            />
                        </Form.Field>
                    </div>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Prefered Supplier Qualifications</label>
                            <Form.Checkbox
                                label="Has a factory"
                            />
                            <Form.Checkbox
                                label='other'
                            />
                        </Form.Field>
                    </div>
                </div>
                <WindowHeader cross={false} close={props.closeModal}>Prefered Industries</WindowHeader>

                <div className={classes.flexContainer}>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Industry Name</label>
                            <Form.Checkbox
                                label='Test'
                            />
                            <Form.Checkbox
                                label='Test'
                            />
                        </Form.Field>
                    </div>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Sub Industries</label>
                            <Form.Checkbox
                                label="Test"
                            />
                            <Form.Checkbox
                                label='Test'
                            />
                        </Form.Field>
                    </div>
                </div>

            </Form>
        )
    }
    return (
        <div className={classes.ModalEdit}>
            <div className={classes.ModalActive}>
                <WindowHeader cross="true" close={props.closeModal}>{props.header}</WindowHeader>

                {modal}

                <div className={classes.footer}>
                    <div className="button-orange">Save</div>
                    <div onClick={props.closeModal} className="button-white">Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit;