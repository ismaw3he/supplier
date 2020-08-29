import React, { useState } from 'react';
import { connect } from "react-redux";

import {
    Redirect,
    Link
} from "react-router-dom";

import { verifyUser } from "../../API/verifyUserAPI"

function Verification({ data, verifyUser }) {
    const [verificationCode, setVerificationCode] = useState("")
    return (
        data.loading ? <h1>Loading...</h1> :
            data.verified && data.email ?
                <div>
                    <h1>{data.email} has been verified</h1>

                    <Link to="/logIn">Log In</Link>

                </div>
                :
                data.email ?
                    <div>
                        <h1>Verification Page</h1>
                        <h3>Please verify {data.email}</h3>
                        <p>Enter 6 digit code</p>
                        <div>
                            <input
                                type={"text"}
                                value={verificationCode}
                                placeholder={"Verification Code"}
                                onChange={(e) => { setVerificationCode(e.target.value) }}
                            />
                        </div>
                        <button onClick={() => {
                            verifyUser({
                                Email: data.email,
                                VerificationCode: verificationCode
                            })
                        }}>Verify</button>
                        {data.error? <p>{data.error}</p> : null}
                    </div> :
                    <Redirect to="/signUp" />
    );
}

const mapStateToProps = state => {
    return {
        data: state.verify
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyUser: (verifyData) => { dispatch(verifyUser(verifyData)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification);