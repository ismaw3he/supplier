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