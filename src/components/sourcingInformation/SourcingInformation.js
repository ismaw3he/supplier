import React from 'react';
import InfoTable from "../infoTable/InfoTable";


const SourcingInformation = ({sourcingInfo}) => {
    return (
        <>
            <InfoTable
                description={
                    ["Annual Purchasing Volume:", "Primary Sourcing Purpose:"]
                }
                value={
                    [sourcingInfo.annualPurchasingVolume, sourcingInfo.primarySourcingPurposes]
                }
            />
            <InfoTable
                description={
                    ["Avarage Sourcing Frequency:", "Prefered Supplier Qualifications:"]
                }
                value={
                    [sourcingInfo.averageSourcingFrequency, sourcingInfo.preferedSupplierQualifications]
                }
            />
            
        </>
    )
}

export default SourcingInformation;