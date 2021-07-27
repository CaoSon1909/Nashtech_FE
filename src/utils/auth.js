//check admin is logn
import PublicHome from "../components/PublicHome";
import {Redirect, Route} from "react-router-dom";
import {useState} from "react";

export function isAdminLogin() {
    const status = localStorage.getItem("STATUS");
    const role = localStorage.getItem("ROLES");
    if (status === "true" && role === "ADMIN") {
        return true;
    } else {
        console.log("isLogin false");
        return false;
    }
}

//check if user login
export function isUserLogin() {
    const status = localStorage.getItem("STATUS");
    const role = localStorage.getItem("ROLES");
    if (status === "true" && role === "USER") {
        return true;
    } else {
        console.log("isLogin false");
        return false;
    }
}

//check either user or admin login
export function isLogin() {
    const status = localStorage.getItem("STATUS");
    const role = localStorage.getItem("ROLES");
    if (status === "true" && role !== "") {
        return true;
    } else {
        return false;
    }
}

//log out
 export async function logOut() {
    localStorage.removeItem("TOKEN")
    localStorage.removeItem("USERNAME")
    localStorage.removeItem("ROLES")
    localStorage.setItem("STATUS", "false")
    localStorage.setItem("CART", "")
       return true;
}
