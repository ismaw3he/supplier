import React, { useState } from 'react';
import { connect } from "react-redux";
import TopNav from "../../components/topNav/TopNav";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import RightPage from "../../components/rightPage/RightPage";
import InfoBloksContainer from "../../components/infoBloksContainer/InfoBloksContainer";

import ProfileInformation from "../../components/profileInformation/ProfileInformation";
import classes from "./style/style.module.css"
import bck from "../../img/profile-bck.png"
function LogIn({ userData }) {
    const [active, setActive] = useState(false)
    return (
        <div>
            {/* <h1>My Profile</h1>

            <div>
                <h2>Logged in as {userData.user.name} {userData.user.surname}</h2>
                <h5>Company Name: {userData.user.companyName}</h5>
                <h5>Country: {userData.user.country}</h5>
                <h5>Email: {userData.user.email}</h5>
                <h5>Phone Number: {userData.user.phoneNumber}</h5>
                <h5>Trade Role: {userData.user.tradeRole}</h5>
            </div> */}
            <TopNav />
            <LeftMenu active={active} setActive={setActive}/>
            
            <RightPage active={active}>
                <InfoBloksContainer />
                
            </RightPage>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.logIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // logInUser: (logInData) => { dispatch(logInUser(logInData)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);