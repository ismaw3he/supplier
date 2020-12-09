import React, { useState } from "react";
import classes from "./style/style.module.css";
import {
    Form
} from 'semantic-ui-react';


import EditableContent from "../editableContent/EditableContent";

const QualityControl = (props) => {
    const [showProcess, setShowProcess] = useState(false)
    const [showTesting, setShowTesting] = useState(false)

    const [processList, setProcessList] = useState([
        {
            id: 0,
            name: "Test Name",
            photo: "test_url",
            description: "Description Here"
        }
    ])
    const processActionHandler = (actionType, payload) => {
        let list = [...processList];
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

        setProcessList(list)
    }


    const [testingList, setTestingList] = useState([
        {
            id: 0,
            name: "Test Name",
            model: "test Model",
            quantity: "Test Quantity"
        }
    ])
    const testingActionHandler = (actionType, payload) => {
        let list = [...testingList];
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

        setTestingList(list)
    }
    return (
        <div className={classes.container}>
            <Form className={classes.customForm}>
                <div className={classes.flexContainer}>
                    <Form.Group inline>
                        <label>Whether to demonstrate the quality control process</label>
                        <Form.Radio
                            label='Yes'
                            value='yes'
                            checked={showProcess}
                            onChange={() => setShowProcess(true)}
                        />
                        <Form.Radio
                            label='No'
                            value='no'
                            checked={!showProcess}
                            onChange={() => setShowProcess(false)}
                        />
                    </Form.Group>

                    {showProcess ?
                        processList.map((item, index) => {
                            return <EditableContent
                                key={item.id}
                                id={item.id}
                                remove={index === 0 ? false : true}
                                handler={processActionHandler}
                                header={"Process"}
                                showprocess={true}
                            />
                        })

                        :
                        null}


                    <Form.Group inline>
                        <label>Whether to display testing equipment</label>
                        <Form.Radio
                            label='Yes'
                            value='yes'
                            checked={showTesting}
                            onChange={() => setShowTesting(true)}
                        />
                        <Form.Radio
                            label='No'
                            value='no'
                            checked={!showTesting}
                            onChange={() => setShowTesting(false)}
                        />
                    </Form.Group>

                    {showTesting ?
                        testingList.map((item, index) => {
                            return <EditableContent
                                key={item.id}
                                id={item.id}
                                remove={index === 0 ? false : true}
                                handler={testingActionHandler}
                                header={"Equipment"}
                                showTesting={true}
                            />
                        })
                        :
                        null}
                </div>
            </Form>
        </div>
    )
}

export default QualityControl;