import React, {useEffect} from 'react';
import InfoTable from "../infoTable/InfoTable";

// General Info
const ContactInformation = (props) => {
    useEffect(()=>{
        
    },[])
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