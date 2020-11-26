import React from 'react';
import InfoTable from "../infoTable/InfoTable";
import WindowHeader from "../windowHeader/WindowHeader";

const SourcingInformationBuyer = ({ sourcingInfo }) => {
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
            <WindowHeader>PreferedIndustries</WindowHeader>

            {sourcingInfo.PreferedIndustries.map((item,index)=>{
                return (
                    <InfoTable
                    key={index}
                    description={
                        ["Industry Name:", "Sub-Industries:"]
                    }
                    value={
                        [item.Name, item.Industries]
                    }
                />
                )
            })}
        </>
    )
}

export default SourcingInformationBuyer;