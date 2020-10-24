import React from "react";
import InfoBlock from "../infoBlock/InfoBlock";
import classes from "./style/style.module.css";
import ContactInformation from "../contactInformation/ContactInformation";
import CompanyInformation from "../companyInformation/CompanyInformation";
import SourcingInformation from "../sourcingInformation/SourcingInformation";

const InfoBloksContainer = (props) => {
    return (
        <div className={classes.column} >
            <InfoBlock windowHeader={"Contact Information"}>
                <ContactInformation />
            </InfoBlock>

            <InfoBlock windowHeader={"Company Information"}>
                <CompanyInformation />
            </InfoBlock>
            
            <InfoBlock windowHeader={"Sourcing Information"}>
                <SourcingInformation />
            </InfoBlock>
        </div>
    )
}

export default InfoBloksContainer;