import React, {Component, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Products from "../Products"
import Logout from "../Logout";

export default function Admin () {

    const [products, setProducts] = useState();
    const [isLogout, setIsLogout] = useState(false);

        return (
            <div>
                this is admin page <br/>
                <Products/>
            </div>
        );
}


