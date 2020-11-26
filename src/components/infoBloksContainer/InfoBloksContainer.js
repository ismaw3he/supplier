import React, { useState } from "react";
import InfoBlock from "../infoBlock/InfoBlock";
import classes from "./style/style.module.css";
// Buyer
import ContactInformation from "../contactInformation/ContactInformation";
import CompanyInformation from "../companyInformation/CompanyInformation";
import SourcingInformationBuyer from "../sourcingInformationBuyer/SourcingInformationBuyer";

// Seller
import SellerEdit from "../sellerEdit/SellerEdit";


const InfoBloksContainer = (props) => {
    // BUYER
    let [contactInfo, setContactInfo] = useState({
        email: "raufraymond110@gmail.com",
        phone: "070123123",
        fax: "598876541",
        socialLinks: ["facebook", "linkedin", "instagram"]
    })
    let [companyInfo, setCompanyInfo] = useState({
        name: "Portflix",
        yearEstablished: 2010,
        webSite: "https://mysite.com",
        employeesCount: "5-10",
        // employe count gives integer
        about: "Info about my company",
        registeredAddress: {
            Country: "Azerbaijan",
            State: "Absheron",
            City: "Baku",
            Street: "20 Yanvar",
            ZipCode: "AZ1134"
        },
        operationalAddress: {
            Country: "Azerbaijan",
            State: "Absheron",
            City: "Baku",
            Street: "20 Yanvar",
            ZipCode: "AZ1134"
        },
        // needs to be fixed
        mainProducts: ["SOCKS", "UNDERPANS"],
        businessTypes: ["Manufacturer/ Factory", "Retailer", "Individual", "other"],
        sellingPlatforms: ["Offline", "Amazon", "other"]
    })
    let [sourcingInfo, setSourcingInfo] = useState({
        averageSourcingFrequency: "Monthly",
        annualPurchasingVolume: "10001  - 100000",
        // 0 when empty
        primarySourcingPurposes: ["To resell items", "other"],
        PreferedIndustries:
            [
                {
                    Name: "Electronics",
                    Industries:[
                            "Computer", "Phone"
                        ]

                },
                {
                    Name: "Electronics",
                    Industries:[
                            "Computer", "Phone"
                        ]

                },
                {
                    Name: "Electronics",
                    Industries:[
                            "Computer", "Phone"
                        ]

                }
            ],
        // needs to be fixed
        preferedSupplierQualifications: ["Has a factory", "other"]
    })
    

    // SELLER


    if(props.trade==="BUYER"){
        return (
            <div className={classes.column} >
                <InfoBlock windowHeader={"Contact Information"} contactInfo={contactInfo}>
                    <ContactInformation contactInfo={contactInfo} />
                </InfoBlock>
    
                <InfoBlock windowHeader={"Company Information"} companyInfo={companyInfo}>
                    <CompanyInformation companyInfo={companyInfo} />
                </InfoBlock>
    
                <InfoBlock windowHeader={"Sourcing Information"} sourcingInfo={sourcingInfo}>
                    <SourcingInformationBuyer sourcingInfo={sourcingInfo} />
                </InfoBlock>
                
            </div>
        )
    }
    else if (props.trade==="SELLER"){
        return (
            <div className={classes.column} >
                <SellerEdit />                
            </div>
        )
    }
}

export default InfoBloksContainer;