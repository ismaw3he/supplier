import React from "react";
import "./style/style.css";
import bck from "../../img/profile-bck.png"
const RightPage = (props) => {
    return (
        <div className={props.active ? "right-page-container active-width" : "right-page-container"} >
            <div
                className={"bck"}
                style={props.background ?
                    { backgroundImage: "url(" + bck + ")" }
                    : null}
            ></div>
            <div className="prof" style={props.background ? { paddingTop: "160px" } : { paddingTop: "80px" }}>
                {props.children}
            </div>
        </div>
    )
}

export default RightPage;