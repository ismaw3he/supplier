import React from 'react';
import InfoTable from "../infoTable/InfoTable";

// General Info
const ContactInformation = ({contactInfo}) => {
    return (
        <>
            <InfoTable
                description={
                    ["Email:", "Fax:"]
                }
                value={
                    [contactInfo.email, contactInfo.fax]
                }
            />
            <InfoTable
                description={
                    ["Social Links:", "Phone:"]
                }
                value={
                    [contactInfo.socialLinks, contactInfo.phone]
                }
            />
            
        </>
    )
}

export default ContactInformation;