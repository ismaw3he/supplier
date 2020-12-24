import React, {useState} from "react";
import classes from "./style/style.module.css";
import empty from "./img/file.png";
import cancel from "./img/cancel.png";
import {
    TextArea,
    Form
} from 'semantic-ui-react';
import EditableContent from "../editableContent/EditableContent";


const CompanyIntroduction = (props) => {
    const [showTrade, setShowTrade] = useState(false);

    const [tradeList, setTradeList] = useState([
        {
            id: 0,
            name: "Test Name",
            photo: "test_url",
            description: "Description Here"
        }
    ])

    const tradeActionHandler = (actionType, payload) => {
        let list = [...tradeList];
        if (actionType === "ADD") {
            list.push({
                id: Math.random(),
                name: "Test Name",
                photo: "test Model",
                description: "Test Quantity"
            })
        }
        else if (actionType === "REMOVE" && list.length !== 1) {
            list = list.filter((item) => item.id !== payload)
        }

        setTradeList(list)
    }
    return (
        <div className={classes.container}>
            <Form className={classes.customForm}>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Company Logo</label>

                        <div className={classes.customFormField}>
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
                    </Form.Field>
                </div>
                <div style={{ width: "100%" }}></div>
                <div className={classes.inputContainer} >
                    <Form.Field>
                        <label>Detailed Company Introduction</label>
                        <TextArea placeholder='Our company ...' style={{ minHeight: 200 }} />


                        <p className={classes.inputInfo}>
                            Please briefly describe your company’s advantages.
                            E.g. “We have twenty years experience of product design.”
                            </p>
                    </Form.Field>
                </div>
                <div style={{ width: "100%" }}></div>


                <div className={classes.inputContainerLarge} >
                    <div className={classes.multiplePhotoSectionContainer}>
                        <div className={classes.imagesContainer}>
                            <div className={classes.avatar}>
                                <img src={empty} alt="avatar" />
                            </div>
                            <div className={classes.avatarSmall}>
                                <img src={empty} alt="avatar" />
                            </div>
                            <div className={classes.avatarSmall}>
                                <img src={empty} alt="avatar" />
                            </div>
                        </div>

                        <div className={classes.photoButtonsContainer}>
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
                
                <div className={classes.flexContainerEditable}>

                    <Form.Group inline>
                        <label>Have you attended or planned to attend any trade shows?</label>
                        <Form.Radio
                            label='Yes'
                            value='yes'
                            checked={showTrade}
                            onChange={() => setShowTrade(true)}
                        />
                        <Form.Radio
                            label='No'
                            value='no'
                            checked={!showTrade}
                            onChange={() => setShowTrade(false)}
                        />
                    </Form.Group>


                    {showTrade ?
                        tradeList.map((item, index) => {
                            return <EditableContent
                                key={item.id}
                                id={item.id}
                                remove={index === 0 ? false : true}
                                handler={tradeActionHandler}
                                header={"Trade Show"}
                                trade={true}
                            />
                        })
                        :
                        null}
                </div>
            </Form>
        </div>
    )
}

export default CompanyIntroduction;