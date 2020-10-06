import React from "react";
import "./style/style.css";
import bck from "../../img/profile-bck.png"
const RightPage = (props) => {
    return (
        <div className={props.active ? "right-page-container active-width" : "right-page-container"} >
            <div className={"bck"} style={{ backgroundImage: "url(" + bck + ")" }}></div>
            <div className="prof">
                {props.children}
            </div>
        </div>
    )
}

export default RightPage;