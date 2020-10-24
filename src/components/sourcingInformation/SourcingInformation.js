import React from 'react';
import InfoTable from "../infoTable/InfoTable";


const SourcingInformation = (props) => {
    return (
        <>
            <InfoTable
                description={
                    ["Annual Purchasing Volume:", "Primary Sourcing Purpose:"]
                }
                value={
                    ["10001 - 100000", ["To resell items", "other"]]
                }
            />
            <InfoTable
                description={
                    ["Avarage Sourcing Frequency:", "Prefered Supplier Qualifications:"]
                }
                value={
                    ["Weeky", ["Has a factory","other"]]
                }
            />
            
        </>
    )
}

export default SourcingInformation;