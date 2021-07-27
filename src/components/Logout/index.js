import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isLogin, logOut} from "../../utils/auth";
import {useHistory} from "react-router-dom";

function Logout () {

    const history = useHistory();

   function handleLogout(e) {
        logOut();
        history.push("/");
    }
        return (
            <div>
                <button onClick={e => handleLogout(e)}>Logout</button>
            </div>
        );
}

export default Logout;
