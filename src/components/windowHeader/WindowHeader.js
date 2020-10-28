import React, {useState} from "react";
import classes from "./style/style.module.css";
import ModalEdit from "../modalEdit/ModalEdit";

const WindowHeader = (props) => {
    const [modal, setModal] = useState(false)
    return (
        <div className={classes.headerContainer}>
                <h3 className={classes.header}>{props.children}</h3>
                {props.edit? <div onClick={()=>{setModal(true)}} className={classes.editContainer}>
                    <p>Edit</p>
                </div>: null}
                {modal? <ModalEdit /> : null}
            
        </div>
    )
}

export default WindowHeader;