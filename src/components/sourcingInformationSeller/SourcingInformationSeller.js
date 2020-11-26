import React from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";

import Input from "../Input/Input";
import {
    Form
} from 'semantic-ui-react';

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

const SourcingInformationSeller = (props) => {
    return (
        <div className={classes.container}>
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
                <div style={{ width: "100%" }}></div>
                <div className={classes.flexContainer}>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Primary Sourcing Purpose</label>
                            <Form.Checkbox
                                label='To resell items'
                            />
                            <Form.Checkbox
                                label='other'
                                defaultChecked
                            />
                        </Form.Field>
                    </div>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Prefered Supplier Qualifications</label>
                            <Form.Checkbox
                            defaultChecked
                                label="Has a factory"
                            />
                            <Form.Checkbox
                            defaultChecked
                                label='other'
                            />
                        </Form.Field>
                    </div>
                </div>
                <WindowHeader cross={false} close={props.closeModal}>Prefered Industries</WindowHeader>

                <div className={classes.flexContainer}>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Electronics</label>
                            <Form.Checkbox
                                label='Computers'
                            />
                            <Form.Checkbox
                                defaultChecked
                                label='Phones'
                            />
                            <Form.Checkbox
                                defaultChecked
                                label='Monitors'
                            />
                            <Form.Checkbox
                                defaultChecked
                                label='Earphones'
                            />
                            <Form.Checkbox
                                defaultChecked
                                label='Mouses'
                            />
                        </Form.Field>
                    </div>
                    <div className={classes.checkboxContainerFlex} >
                        <Form.Field>
                            <label>Cloth</label>
                            <Form.Checkbox
                                label="Shirts"
                                defaultChecked
                            />
                            <Form.Checkbox
                                label='Trousers'
                            />
                            <Form.Checkbox
                                label="Shoes"
                                defaultChecked
                            />
                            <Form.Checkbox
                                label='Accessories'
                            />
                            <Form.Checkbox
                                label="Bags"
                                defaultChecked
                            />
                            <Form.Checkbox
                                label='Hats & Gloves'
                            />
                            <Form.Checkbox
                                label="Underwears"
                                defaultChecked
                            />
                            <Form.Checkbox
                                label='Sport'
                            />
                        </Form.Field>
                    </div>
                </div>

            </Form>
        </div>
    )
}

export default SourcingInformationSeller;