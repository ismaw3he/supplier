import React, { useState, useEffect } from "react";
import CompanyDetails from "../companyDetails/CompanyDetails";
import SourcingInformationSeller from "../sourcingInformationSeller/SourcingInformationSeller";
import BusinessVerification from "../businessVerification/BusinessVerification";
import ExportCapability from "../exportCapability/ExportCapability";
import M_ManufacturingCapability from "../m_ManufacturingCapability/M_ManufacturingCapability";

import classes from "./style/style.module.css";

const menu = [
    {
        name: "Basic Company Details",
        component: <CompanyDetails data={
            {
                name: "Portflix",
                locationOfRegistration: "Azerbaijan",
                street: "20 Yanvar, 023B",
                city: "Baku",
                operationalCountry: "Azerbaijan",
                zipCode: "AZ1134",
                mainCategory: "Health and Beauty",
                mainProducts: [
                    "Shoes", "Bags", "T-Shirts"
                ],
                otherProducts: [
                    "Trousers", "SweatShirts", "Accessories", "Glasses"
                ],
                websites: [
                    "https://app.zeplin.io/project/",
                    "https://app.zeplin.io/project/5e3f17021177fb9204a31a31/screen/5fa851fc26003e6ab3a1d22c",
                    "https://app.zeplin"
                ],
                yearEstablished: "2010",
                legalOwner: "Rauf Ismayilov",
                officeSize: "100 - 500",
                numOfEmployees: "50-100",
                companyAdvantages: ""
            }
        } />
    },
    {
        name: "Sourcing Info",
        component: <SourcingInformationSeller
            data={{
                annualPurchasingVolume: [10001, 100000],
                averageSourcingFrequency: "Weekly"
            }}
        />
    },
    {
        name: "Business Verification",
        component: <BusinessVerification data={
            {
                name: "Turkey-Suppliers",
                country: "Azerbaijan",
                region: "Absheron",
                city: "Baku",
                street: "Nizami str.",
                zipCode: "AZ1134",
                businessRegistrationCert: "IMAGE",
                businessRegistrationCertNumber: "C21313123131",
                website: "https://mycompany.com"
            }
        } />
    },
    // Company Introduction
    {
        name: "Export Capability",
        component: <ExportCapability data={{
            minAnnualRevenue: 1.0,
            maxAnnualRevenue: 10.0,
            exportPercentage: [31, 40],
            startingYear: 2010,
            employeeCount: [5, 10],
            canAcrossMultipleIndustries: true,
            qualityControlStaffCount: 5,
            nearestPort: ["Ələt", "GYD cargo"],
            avarageLeadDays: 24,
            deliveryterms: ["FOB", "DDP", "Express delivery"],
            paymentCurrencies: ["USD", "EUR"],
            paymentType: ["PayPal", "Cash"],
            languageSpoken: ["English", "Russian"]
        }} />
    },
    {
        name: "M_Manufacturing Capability",
        component: <M_ManufacturingCapability data={{
            name: "Baku, Nizami str",
            size: [1000, 3000],
            numQCStaff: [5, 10],
            productionLines: 4,
            annualOutput: [1, 2.5],

        }} />
    }
    // ,
    // {
    //     name: "Quality Control",
    //     component: <CompanyDetails />
    // },
    // {
    //     name: "Manufacturing Capability",
    //     component: <CompanyDetails />
    // }
]

const SellerEdit = () => {
    const [section, setSection] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [section])
    return (
        <div className={classes.container}>
            <div className={classes.header}>

                {menu.map((item, index) => {
                    return <div key={index}
                        className={
                            section === index ?
                                classes.headerButton + " " + classes.activeButton
                                :
                                classes.headerButton
                        }
                        onClick={() => { setSection(index) }}
                    >

                        {item.name}
                    </div>
                })}

                <div className={classes.headerButton} style={{width: "310px", cursor: "not-allowed"}}>
                    Company Introduction <span style={{color: "#dc3545", marginLeft: "10px" ,fontWeight: "bold"}}>(Under Development)</span>
                </div>
            </div>

            {menu[section].component}

            <div className={classes.footer}>
                {section !== 0 ?
                    <div onClick={() => { setSection(section - 1) }} className={classes.button}>
                        Previous
                    </div>
                    :
                    null}

                <div className={classes.button + " " + classes.buttonBig}>
                    Save
                </div>
                <div onClick={() => { if (section !== 4) { setSection(section + 1) } }} className={classes.button + " " + classes.buttonOrange}>
                    Submit and Next Tab
                </div>
            </div>
        </div>
    )
}

export default SellerEdit;