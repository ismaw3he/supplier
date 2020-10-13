import React from "react";
import InfoBlock from "../infoBlock/InfoBlock";
import classes from "./style/style.module.css";
import ContactInformation from "../contactInformation/ContactInformation";
const InfoBloksContainer = (props) => {
    return (
        <div className={classes.column} >
            <InfoBlock windowHeader={"Contact Information"}>
                <ContactInformation />
            </InfoBlock>

            <InfoBlock windowHeader={"Company Information"}>
                <ContactInformation />
                <ContactInformation />
            </InfoBlock>
            
            <InfoBlock windowHeader={"Sourcing Information"}>
                <ContactInformation />
            </InfoBlock>
        </div>
    )
}

export default InfoBloksContainer;