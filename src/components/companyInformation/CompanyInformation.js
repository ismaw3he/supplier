import React from 'react';
import InfoTable from "../infoTable/InfoTable";

const CompanyInformation = ({companyInfo}) => {
    return (
        <>
            <InfoTable
                description={
                    ["Company Name:", "Year Established:"]
                }
                value={
                    [companyInfo.name, companyInfo.yearEstablished]
                }
            />
            <InfoTable
                description={
                    ["Official web site:", "Busines Type:"]
                }
                value={
                    [companyInfo.webSite, companyInfo.businessTypes]
                }
            />
            <InfoTable
                description={
                    ["Number of employers:", "Platform for selling:"]
                }
                value={
                    [companyInfo.employeesCount, companyInfo.sellingPlatforms]
                }
            />
            <InfoTable
                description={
                    ["Main Products:", "About us:"]
                }
                value={
                    [companyInfo.mainProducts, companyInfo.about]
                }
            />
            <InfoTable
                description={
                    ["Country/Region:", "City:"]
                }
                value={
                    ["Azerbaijan", "Baku"]
                }
            />
            <InfoTable
                description={
                    ["Province/State:", "Street:"]
                }
                value={
                    ["Absheron", "Nizami str 16"]
                }
            />
        </>
    )
}

export default CompanyInformation;