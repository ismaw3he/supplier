import React, { useState, useEffect } from "react";
import CompanyDetails from "../companyDetails/CompanyDetails";
import SourcingInformationSeller from "../sourcingInformationSeller/SourcingInformationSeller";
// import BusinessVerification from "../businessVerification/BusinessVerification";
import ExportCapability from "../exportCapability/ExportCapability";
import MManufacturingCapability from "../m_ManufacturingCapability/MManufacturingCapability";
import BusinessType from "../businessType/BusinessType";
import QualityControl from "../qualityControl/QualityControl";

import classes from "./style/style.module.css";



const SellerEdit = () => {
    const [section, setSection] = useState(0);

    const [active, setActive] = useState(0)

    const [marks, setMarks] = useState([
        {
            name: "Manufacturer",
            checked: false
        },
        {
            name: "Trading Company",
            checked: false
        },
        {
            name: "Buying Office",
            checked: false
        },
        {
            name: "Agent",
            checked: false
        },
        {
            name: "Distributor/WholeSaler",
            checked: false
        },
        {
            name: "Government ministry/Bureau/Commission",
            checked: false
        },
        {
            name: "Association",
            checked: false
        },
        {
            name: "Business Service (Transportation, finance, travel, Ads, etc)",
            checked: false
        },
        {
            name: "Other",
            checked: false
        }
    ])

    const [error, setError] = useState(false);

    const markChangeHandler = (name, condition) => {
        let marksCopy = [...marks];
        let qualityControl = {
            name: "Quality Control",
            component: <QualityControl/>
        }
        for (let index = 0; index < marksCopy.length; index++) {
            
            if (marksCopy[index].name === name) {
                marksCopy[index].checked = condition;
                if(name==="Manufacturer"){
                    let menuCopy = [...menu];
                    if(condition){
                        menuCopy.push(qualityControl);
                        setMenu(menuCopy)
                    }
                    else{
                        menuCopy.filter((item)=>{
                            return item.name === qualityControl.name;
                        })
                        setMenu(menuCopy)
                    }
                }
            }
        }

        setMarks(marksCopy);
        if (condition) {
            setActive(prevActive =>prevActive + 1)
        }
        else {
            setActive(prevActive =>prevActive - 1)
        }
    }

    const [menu, setMenu] = useState(
        [
            {
                name: "Business Type",
                component: <BusinessType error={error} data={marks} active={active} handler={markChangeHandler} />
            },
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
            // {
            //     name: "Business Verification",
            //     component: <BusinessVerification data={
            //         {
            //             name: "Turkey-Suppliers",
            //             country: "Azerbaijan",
            //             region: "Absheron",
            //             city: "Baku",
            //             street: "Nizami str.",
            //             zipCode: "AZ1134",
            //             businessRegistrationCert: "IMAGE",
            //             businessRegistrationCertNumber: "C21313123131",
            //             website: "https://mycompany.com"
            //         }
            //     } />
            // },
    
    
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
                name: "Manufacturing Capability",
                component: <MManufacturingCapability data={{
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
    ) 



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
                        onClick={() => {
                            if (active > 0 && active < 4) {
                                setSection(index)
                                setError(false)
                            }
                            else{
                                setError(true)
                            }
                        }}
                    >

                        {item.name}
                    </div>
                })}

                <div className={classes.headerButton} 
                style={{ 
                    // width: "310px", 
                    cursor: "not-allowed" }}
                >
                    Company Introduction 
                    {/* <span style={{ color: "#dc3545", marginLeft: "10px", fontWeight: "bold" }}>(Under Development)</span> */}
                </div>
            </div>

            {menu[section].component}

            <div className={classes.footer}>
                {section !== 0 ?
                    <div onClick={() => {
                        if (active > 0 && active < 4) {
                            setSection(section - 1)
                        }
                    }} className={classes.button}>
                        Previous
                    </div>
                    :
                    null}

                <div className={classes.button + " " + classes.buttonBig}>
                    Save
                </div>
                <div onClick={() => { 
                    if (section !== 4 && active > 0 && active < 4) 
                    { 
                        setSection(section + 1)
                        setError(false)
                     }
                    else{
                        setError(true);
                    }
            
            }} className={classes.button + " " + classes.buttonOrange}>
                    Next Tab
                </div>
            </div>
        </div>
    )
}

export default SellerEdit;