import React, { useState } from "react";
import classes from "./style/style.module.css";
import ModalEdit from "../modalEdit/ModalEdit";

const WindowHeader = (props) => {
    const [modal, setModal] = useState(false)
    return (
        <div className={classes.headerContainer}>
            <h3 className={classes.header}>{props.children}</h3>

            {props.edit ?
                <div onClick={() => { setModal(true) }} className={classes.editContainer}>
                    <p>Edit</p>
                </div> : props.cross ?
                    <div onClick={props.close} className={classes.editContainer}>
                        <p>X</p>
                    </div> : null}
            {modal ? <ModalEdit
                contactInfo={props.contactInfo? props.contactInfo : null}
                companyInfo={props.companyInfo? props.companyInfo : null}
                sourcingInfo={props.sourcingInfo? props.sourcingInfo : null}
                header={props.children}
                closeModal={() => { setModal(false) }}
            /> : null}

        </div>
    )
}

export default WindowHeader;