import React from 'react';

import { AuthContext } from "../context/AuthContext";
//import FormSignin from "../components/FormSignin";
import Signup from "../components/SignForm/Signup";
import Signin from "../components/SignForm/Signin";

const UserPortal = () => {

    return (
        <div className='container'>
            <div className='portal'>
                <Signup />
                <Signin />
            </div>
        </div>
    )
}
export default UserPortal
