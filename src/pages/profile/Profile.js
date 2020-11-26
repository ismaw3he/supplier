import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import TopNav from "../../components/topNav/TopNav";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import RightPage from "../../components/rightPage/RightPage";
import ProfileInformation from "../../components/profileInformation/ProfileInformation";
import localGetter from "../../generals/localGetter";
import localSetter from "../../generals/localSetter";
// import {accountInfoGetAPI} from "../../API/userInfo/accountInfoGetAPI";
// import {refreshTokenAPI} from '../../API/refreshTokenAPI';

function LogIn({ userData, getUser }) {
    const [active, setActive] = useState(false)
    const localData = localGetter()
    const [data, setData] = useState(localData);

    const editHandler = (name, value) => {
        let copyData = { ...data };
        switch (name) {
            case "Name":
                copyData.name = value;
                break;
            case "Surname":
                copyData.surname = value;
                break;
            case "Company Name":
                copyData.companyName = value;
                break;
            case "Country/Region":
                copyData.country = value;
                break;
            case "Phone Number":
                copyData.phone = value;
                break;
            default:
            // code block
        }
        localSetter({
            ...copyData,
            access_token: {
                token: copyData.accessToken,
                expiration: copyData.expiration,
                refreshToken: copyData.refreshToken
            }
        });

        setData({
            ...copyData,
            access_token: {
                token: copyData.accessToken,
                expiration: copyData.expiration,
                refreshToken: copyData.refreshToken
            }
        });
    }
    useEffect(() => {
        // getUser()
        // refreshTokenAPI(localData.refreshToken)
    }, [])
    return (
        <div>
            <TopNav />
            <LeftMenu active={active} setActive={setActive} />
            <RightPage active={active}>
                <ProfileInformation
                    data={{
                        name: localData.name,
                        surname: localData.surname,
                        link: "https://www.supplier.com/your-profile-link",
                        email: localData.email,
                        companyName: localData.companyName,
                        tradeRole: localData.tradeRole === 0 ? "Buyer" : "Seller",
                        country: localData.country,
                        phone: localData.phone,
                        // name: "Rauf",
                        // surname: "Ismayilov",
                        // link: "https://www.supplier.com/your-profile-link",
                        // email: "rauf@gmail.com",
                        // companyName: "localData.companyName",
                        // tradeRole:  "Buyer" ,
                        // country: "localData.country",
                        // phone: "localData.phone"
                    }}
                    editHandler={editHandler}
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
        // getUser: (logInData) => { dispatch(accountInfoGetAPI()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);