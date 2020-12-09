import React, { useState } from 'react';
import { connect } from "react-redux";
import TopNav from "../../components/topNav/TopNav";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import RightPage from "../../components/rightPage/RightPage";
import localGetter from "../../generals/localGetter";
import ProfileHome from "../../components/profileHome/ProfileHome";
import ProfileStrength from "../../components/profileStrength/ProfileStrength";
import classes from "./style/style.module.css";
import ModalEdit from "../../components/modalEdit/ModalEdit";

function LogIn({ userData }) {
    const [verifyModal, setVerifyModal] = useState(false);
    const [active, setActive] = useState(false)
    const localData = localGetter()
    return (
        <div>
            <TopNav />
            <LeftMenu active={active} setActive={setActive} />

            <RightPage active={active}>
                {console.log(userData)}
                <div className={classes.flexContainer}>
                    <ProfileHome
                        modalHandler={setVerifyModal}
                        data={{
                            name: localData.name,
                            surname: localData.surname,
                            link: "https://www.supplier.com/your-profile-link",
                            email: localData.email,
                            companyName: localData.companyName,
                            tradeRole: localData.tradeRole === 0 ? "Buyer" : "Seller",
                            country: localData.country,
                            phone: localData.phone
                        }} />

                    <ProfileStrength data={{
                        name: localData.name,
                        surname: localData.surname,
                        link: "https://www.supplier.com/your-profile-link",
                        email: localData.email,
                        companyName: localData.companyName,
                        tradeRole: localData.tradeRole === 0 ? "Buyer" : "Seller",
                        country: localData.country,
                        phone: localData.phone
                    }} />
                    {verifyModal ?
                        <ModalEdit
                        verifyBusiness={true}
                            data={
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
                            }
                            header={"Business Verification"}
                            closeModal={() => { setVerifyModal(false) }}
                        />
                        : null
                    }
                </div>


            </RightPage>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.logIn.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // logInUser: (logInData) => { dispatch(logInUser(logInData)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);