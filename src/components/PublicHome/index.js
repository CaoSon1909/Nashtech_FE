import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Login from "./../Login"
import {Link} from "react-router-dom";
import {isAdminLogin, isLogin, isUserLogin} from "../../utils/auth";
import Admin from "../Admin";
import User from "../User";
import SearchProducts from "../Products/SearchProducts"

class PublicHome extends Component {
    render() {
        return (
            <div>
                 <br/>
                <SearchProducts/>
                {/*if user still login , do not display login link*/}

                {/*if admin(user) at home, display welcome admin(user)*/}
                {isAdminLogin() ? (
                    <div>
                    Welcome, {localStorage.getItem("USERNAME")}
                    <Admin/>
                    </div>)
                : null}
                {isUserLogin() ? (
                    <div>
                    Welcome, {localStorage.getItem("USERNAME")}
                    <User/>
                    </div>) : null}
            </div>
        );
    }
}

PublicHome.propTypes = {};

export default PublicHome;
