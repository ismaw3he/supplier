import React, {useState} from "react";
import InfoBlock from "../infoBlock/InfoBlock";
import classes from "./style/style.module.css";
import ContactInformation from "../contactInformation/ContactInformation";
import CompanyInformation from "../companyInformation/CompanyInformation";
import SourcingInformation from "../sourcingInformation/SourcingInformation";

const InfoBloksContainer = (props) => {
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
        registeredAddress: null,
        operationalAddress: null,
        // needs to be fixed
        mainProducts: ["SOCKS", "UNDERPANS"],
        businessTypes: ["Manufacturer/ Factory", "Retailer", "Individual", "other"],
        sellingPlatforms: ["Offline", "Amazon", "other"] 
    })
    let [sourcingInfo, setSourcingInfo] = useState({
        averageSourcingFrequency: "Monthly",
        annualPurchasingVolume: "10001 - 100000",
        // 0 when empty
        primarySourcingPurposes: ["To resell items", "other"],
        preferedIndustries: [],
        // needs to be fixed
        preferedSupplierQualifications: ["Has a factory","other"]
    })
    return (
        <div className={classes.column} >
            <InfoBlock windowHeader={"Contact Information"} contactInfo={contactInfo}>
                <ContactInformation contactInfo={contactInfo}/>
            </InfoBlock>

            <InfoBlock windowHeader={"Company Information"} companyInfo={companyInfo}>
                <CompanyInformation companyInfo={companyInfo}/>
            </InfoBlock>
            
            <InfoBlock windowHeader={"Sourcing Information"} sourcingInfo={sourcingInfo}>
                <SourcingInformation  sourcingInfo={sourcingInfo}/>
            </InfoBlock>
        </div>
    )
}

export default InfoBloksContainer;