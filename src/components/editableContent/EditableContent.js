import React from "react";
import classes from "./style/style.module.css";
import {
    Form,
    TextArea
} from 'semantic-ui-react';
import Input from "../Input/Input";
import empty from "./img/file.png";
import cancel from "./img/cancel.png";
import plus from "./img/plus.png";
import cross from "./img/cross.png";


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

const dutyOptions = [
    { key: 'SALES', value: 'sales', text: 'Sales' },
    { key: 'AFTER_SALES', value: 'after_sales', text: 'After-Sale Service' },
    { key: 'OTHER', value: 'other', text: 'Other' },
]

const employee = [
    { key: "1 - 10", value: "1 - 10", text: "1 - 10" },
    { key: "10 - 20", value: "10 - 20", text: "10 - 20" },
    { key: "20 - 50", value: "20 - 50", text: "20 - 50" },
    { key: "50 - 100", value: "50 - 100", text: "50 - 100" },
    { key: "100 - 500", value: "100 - 500", text: "100 - 500" },
    { key: "500+", value: "500+", text: "500+" },
]


const EditableContent = (props) => {
    let content = null;
    if (props.showprocess) {
        content = (
            <div className={classes.inputsContainer}>
                <Form.Field className={classes.shortInput}>
                    <label>Process name</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "Process name"
                        }}
                        value={"Test"}
                        changed={(event) => console.log("name")}
                    />
                    <p className={classes.inputInfo}>Please enter the full name of your company.</p>
                    {/* {inputData.Email.validationMessages.map((item) => {
            return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
            })} */}
                </Form.Field>

                <div className={classes.customFormField}>
                    <label>Process picture</label>
                    <div className={classes.imgInputContainer}>
                        <div className={classes.avatar}>
                            <img src={empty} alt="avatar" />
                        </div>
                        <div className={classes.inputButtons}>
                            <div className={classes.browse}>
                                Browse
                    </div>
                            <p className={classes.uploadRules}>200KB max. JPEG or PNG format only.</p>

                            <div className={classes.btnRemove}>
                                <img src={cancel} alt="cancel" />
                        Remove
                    </div>
                        </div>
                    </div>
                </div>
                <Form.Field>
                    <label>Process description</label>
                    <TextArea placeholder='Tell us more' style={{ minHeight: 200 }} />


                    <p className={classes.inputInfo}>
                        Please briefly describe process description of the Quality Control.”
            </p>

                    {/* {inputData.Email.validationMessages.map((item) => {
                return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
            })} */}
                </Form.Field>
            </div>
        )
    }
    else if (props.showTesting) {
        content = (
            <div className={classes.inputsContainer}>
                <Form.Field className={classes.shortInput}>
                    <label>Equipment name</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "Name"
                        }}
                        value={"Test"}
                        changed={(event) => console.log("Equipment name")}
                    />
                    <p className={classes.inputInfo}>Please enter the full name of your company.</p>
                    {/* {inputData.Email.validationMessages.map((item) => {
                return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                })} */}
                </Form.Field>

                <Form.Field className={classes.shortInput}>
                    <label>Equipment model</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "Model"
                        }}
                        value={"Test"}
                        changed={(event) => console.log("Equipment model")}
                    />
                    <p className={classes.inputInfo}>Please enter the full name of your company.</p>
                    {/* {inputData.Email.validationMessages.map((item) => {
                return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                })} */}
                </Form.Field>

                <Form.Field className={classes.shortInput}>
                    <label>Equipment quantity</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "Quantity"
                        }}
                        value={"Test"}
                        changed={(event) => console.log("Equipment quantity")}
                    />
                    <p className={classes.inputInfo}>Please enter the full name of your company.</p>
                    {/* {inputData.Email.validationMessages.map((item) => {
                return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                })} */}
                </Form.Field>

            </div>
        )
    }
    else if (props.export) {
        content = (
            <div className={classes.inputsContainer}>
                <Form.Field className={classes.shortInput}>
                    <Form.Select
                        fluid
                        label='Country/Region'
                        options={options}
                        placeholder='Country'
                    />
                </Form.Field>

                <Form.Field className={classes.shortInput}>
                    <label>Province/State</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "State"
                        }}
                        changed={(event) => console.log("Province/State")}
                    />
                </Form.Field>

                <Form.Field className={classes.shortInput}>
                    <label>City</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "Quantity"
                        }}
                        changed={(event) => console.log("City")}
                    />
                </Form.Field>
                <Form.Field className={classes.shortInput}>
                    <label>Street adress</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "Street"
                        }}
                        changed={(event) => console.log("Street adress")}
                    />
                </Form.Field>
                
                <div className={classes.customFormField}>
                    <label>Office photos</label>
                    <div className={classes.imgInputContainer}>
                        <div className={classes.avatar}>
                            <img src={empty} alt="avatar" />
                        </div>
                        <div className={classes.inputButtons}>
                            <div className={classes.browse}>
                                Browse
                            </div>
                            <p className={classes.uploadRules}>200KB max. JPEG or PNG format only.</p>

                            <div className={classes.btnRemove}>
                                <img src={cancel} alt="cancel" />
                                Remove
                            </div>
                        </div>
                    </div>
                </div>
                
                <Form.Field className={classes.shortInput}>
                    <label>Phone number</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "Number"
                        }}
                        changed={(event) => console.log("Phone number")}
                    />
                </Form.Field>
                <Form.Field className={classes.shortInput}>
                    <Form.Select
                        fluid
                        label='Duties'
                        options={dutyOptions}
                        placeholder='Please Select'
                    />
                </Form.Field>
                <Form.Field className={classes.shortInput}>
                    <label>Person in Charge</label>

                    <Input
                        elementType='input'
                        elementConfig={{
                            type: "text",
                            placeholder: "Full Name"
                        }}
                        changed={(event) => console.log("Person in Charge")}
                    />
                </Form.Field>

                <Form.Field className={classes.shortInput}>
                    <Form.Select
                        fluid
                        label='Number of staff'
                        options={employee}
                        placeholder='Staff Count'
                    />
                </Form.Field>

                <div className={classes.customFormField}>
                    <label>Property ownership / Leas Certifications</label>
                    <div className={classes.imgInputContainer}>
                        <div className={classes.avatar}>
                            <img src={empty} alt="avatar" />
                        </div>
                        <div className={classes.inputButtons}>
                            <div className={classes.browse}>
                                Browse
                            </div>
                            <p className={classes.uploadRules}>200KB max. JPEG or PNG format only.</p>

                            <div className={classes.btnRemove}>
                                <img src={cancel} alt="cancel" />
                                Remove
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
    return (
        <div className={classes.editableContent}>
            <div className={classes.editHeader}>
                <h3 className={classes.containerLabel}>
                    {props.header}
                </h3>
                <div className={classes.saveContainer}>
                    <p className={classes.save}>Save</p>
                </div>
            </div>


            {content}


            <div className={classes.editableAbsolute}>
                <div onClick={() => { props.handler("ADD") }} className={classes.absoluteAdd}>
                    <img src={plus} alt="avatar" />
                    Add
                </div>
                {props.remove ?
                    <div onClick={() => { props.handler("REMOVE", props.id) }} className={classes.absoluteRemove}>
                        <img src={cross} alt="avatar" />
                                Remove
                            </div>
                    : null
                }

            </div>
        </div>
    )
}

export default EditableContent;