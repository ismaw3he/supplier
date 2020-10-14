import React, { useState } from 'react';
import { connect } from "react-redux";
import TopNav from "../../components/topNav/TopNav";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import RightPage from "../../components/rightPage/RightPage";
import ProfileInformation from "../../components/profileInformation/ProfileInformation";
import localGetter from "../../generals/localGetter";
function LogIn({ userData }) {
    const [active, setActive] = useState(false)
    const localData = localGetter()
    return (
        <div>
            <TopNav />
            <LeftMenu active={active} setActive={setActive}/>

            <RightPage active={active}>
                {console.log(userData)}
                <ProfileInformation 
                    data={{
                        name: localData.name,
                        surname: localData.surname,
                        link: "https://www.supplier.com/your-profile-link",
                        email: localData.email,
                        companyName: localData.companyName,
                        tradeRole: localData.tradeRole ===0? "Buyer" : "Seller",
                        country: localData.country,
                        phone: localData.phone
                     }}
                />
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