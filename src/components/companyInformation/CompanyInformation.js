import React from 'react';
import InfoTable from "../infoTable/InfoTable";
import WindowHeader from "../windowHeader/WindowHeader";

const CompanyInformation = ({ companyInfo }) => {
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
            <WindowHeader>Registered Address</WindowHeader>
            <InfoTable
                description={
                    ["Country/Region:", "City:"]
                }
                value={
                    [companyInfo.registeredAddress.Country, companyInfo.registeredAddress.City]
                }
            />
            <InfoTable
                description={
                    ["Province/State:", "Street:"]
                }
                value={
                    [companyInfo.registeredAddress.State, companyInfo.registeredAddress.Street]
                }
            />
            <InfoTable
                description={
                    ["Zip Code:", ""]
                }
                value={
                    [companyInfo.registeredAddress.ZipCode, ""]
                }
            />

            <WindowHeader>Operational Address</WindowHeader>
            <InfoTable
                description={
                    ["Country/Region:", "City:"]
                }
                value={
                    [companyInfo.operationalAddress.Country, companyInfo.operationalAddress.City]
                }
            />
            <InfoTable
                description={
                    ["Province/State:", "Street:"]
                }
                value={
                    [companyInfo.operationalAddress.State, companyInfo.operationalAddress.Street]
                }
            />
            <InfoTable
                description={
                    ["Zip Code:", ""]
                }
                value={
                    [companyInfo.operationalAddress.ZipCode, ""]
                }
            />
        </>
    )
}

export default CompanyInformation;