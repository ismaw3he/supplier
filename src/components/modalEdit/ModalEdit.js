import React from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";
import Input from "../Input/Input";
import {
    Form
} from 'semantic-ui-react'

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
                        <label>Year Established</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.companyInfo.yearEstablished}
                            changed={(event) => console.log("fax")}
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
                        <label>Number of employers</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.companyInfo.employeesCount}
                            changed={(event) => console.log("phone")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
                    </Form.Field>
                </div>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>About us</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.companyInfo.about}
                            changed={(event) => console.log("about us")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })} */}
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
                        <label>Country/Region</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={"Azerbaijan"}
                            changed={(event) => console.log("about us")}
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

                <WindowHeader cross={false} close={props.closeModal}>Operational Address</WindowHeader>

                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Country/Region</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={"Azerbaijan"}
                            changed={(event) => console.log("about us")}
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


            </Form>
        )
    }
    else if (props.sourcingInfo) {
        modal = (
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Annual Purchasing Volume</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.sourcingInfo.annualPurchasingVolume}
                            changed={(event) => console.log("annualPurchasingVolume")}
                        />
                        {/* {inputData.Email.validationMessages.map((item) => {
                        return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                    })} */}
                    </Form.Field>
                </div>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Avarage Sourcing Frequency</label>

                        <Input
                            elementType='input'
                            elementConfig={{
                                type: "text",
                                placeholder: "text"
                            }}
                            value={props.sourcingInfo.averageSourcingFrequency}
                            changed={(event) => console.log("Avarage Sourcing Frequency")}
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