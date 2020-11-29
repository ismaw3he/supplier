import React, { useState } from 'react';
import { connect } from "react-redux";
import TopNav from "../../components/topNav/TopNav";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import RightPage from "../../components/rightPage/RightPage";
import InfoBloksContainer from "../../components/infoBloksContainer/InfoBloksContainer";


function LogIn({ userData }) {
    const [active, setActive] = useState(false)
    return (
        <div>
            <TopNav />
            <LeftMenu active={active} setActive={setActive}/>
            
            <RightPage background={true} active={active}>
                <InfoBloksContainer trade="BUYER"/>
                
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