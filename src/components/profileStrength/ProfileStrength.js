import React from "react";
import classes from "./style/style.module.css";
import WindowHeader from "../windowHeader/WindowHeader";
import {
    Link
} from "react-router-dom"
import percent from "./img/percentFake.png";
const ProfileHome = (props) => {
    return (
        <div className={classes.container}>
            <WindowHeader>Profile Strength</WindowHeader>
            {console.log(props.data)}
            <div className={classes.profileContainer}>
                
                
                <div className={classes.textContainer}>
                <p className={classes.mainText}><span style={{fontWeight: "bold"}}>Strengthen your company info</span> so more suppliers can see you and connect with you.</p>
                    <p className={classes.details}>Extend your company information and improve your company’s chances of finding the best applicants significantly.</p>
                    {/* <Link className={"button-orange " + classes.bigWidth} to="/profile/buyer"></Link> */}
                    <div className={classes.buttonContainer}>
                    <Link className={"button-orange " + classes.bigWidth + " " + classes.margin} to="/profile/buyer">Update Company İnfo</Link>
                    <Link className={"button-orange " + classes.margin} to="/profile/settings">Settings</Link>
                </div>
                </div>
                <div className={classes.buttonContainer}>
                    <div style={{
                        width: "275px",
                        height: "213px",
                        marginTop: "-50px",
                        backgroundImage: `url("${percent}")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHome;