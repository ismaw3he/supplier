import React, { useState } from 'react';
import classes from "./style/style.module.css"
import InfoTable from "../infoTable/InfoTable";

const ContactInformation = (props) => {
    return (
        <>
            <InfoTable
                description={
                    ["Email:", "Fax:"]
                }
                value={
                    ["rauf.raymond110@gmail.com", "None"]
                }
            />
            <InfoTable
                description={
                    ["Social Links:", "Phone:"]
                }
                value={
                    [["Facebook","Linkedin","Amazon"], "+994505392909"]
                }
            />
            
        </>
    )
}

export default ContactInformation;