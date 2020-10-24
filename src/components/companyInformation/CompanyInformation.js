import React from 'react';
import InfoTable from "../infoTable/InfoTable";

const CompanyInformation = (props) => {
    return (
        <>
            <InfoTable
                description={
                    ["Company Name:", "Year Established:"]
                }
                value={
                    ["Portflix", "2010"]
                }
            />
            <InfoTable
                description={
                    ["Official web site:", "Busines Type:"]
                }
                value={
                    ["https://mysite.com", ["Manufacturer/ Factory", "Retailer", "Individual", "other"]]
                }
            />
            <InfoTable
                description={
                    ["Number of employers:", "Platform for selling:"]
                }
                value={
                    [" 5 - 10 ", ["Offline", "Amazon", "other"]]
                }
            />
            <InfoTable
                description={
                    ["Main Products:", "About us:"]
                }
                value={
                    [["SOCKS", "UNDERPANS"], "Info about my company"]
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