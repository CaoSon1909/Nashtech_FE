import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import "./style.css";
// import ModalAdd from "./ModalSignUp"
import {postAuth} from "../../utils/httpHelper";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";

toast.configure();
export default function Index(props) {
    const history = useHistory();
    const [loginError, setLoginError] = useState("");
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // useEffect({
    //     setUsername: "",
    //     setPassword: ""
    // },[])

    function handleSubmitLogin(e) {
        e.preventDefault();
        const body = JSON.stringify({
            email: username,
            password: password
        });
        console.log(body);
        postAuth("/public/signin", body).then((res) => {
            if (res.status === 200) {
                // props.onStatus(response.data);
                toast.info(`Welcome back, ${res.data.username}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
                if (res.data.roles[0] === "USER") {
                    localStorage.setItem("STATUS", "true");
                    localStorage.setItem("USERNAME", res.data.username);
                    localStorage.setItem("TOKEN", res.data.jwt);
                    localStorage.setItem("ROLES", res.data.roles[0])
                    // history.goBack();
                    history.push("/User")
                } else if (res.data.roles[0] === "ADMIN") {
                    localStorage.setItem("STATUS", "true");
                    localStorage.setItem("USERNAME", res.data.username);
                    localStorage.setItem("TOKEN", res.data.jwt);
                    localStorage.setItem("ROLES", res.data.roles[0])
                    history.push("/Admin")
                }
            }
        }).catch(error => {
            setLoginError("Login Failed! Please check email and password again");
        });

    }

    function handleUsername(e){
        setUsername(e.target.value.trim())
    }

    function handlePassword(e){
        setPassword(e.target.value.trim())
    }

    function handleFieldChange(e) {
        setLoginError("");
    }

    return (
        <>
            Login to continue...
            <div style={{color: "red", "text-align": "left"}}>{loginError}
                <form onSubmit={(e) => handleSubmitLogin(e)}>
                    Username: <input type="text"
                                     name="txtUsername"
                                     value=""
                                     required="required"
                                     placeholder="example@gmail.com"
                                     maxLength="50"
                                     value={username}
                                     onChange={e => handleUsername(e)}
                                /> <br/>
                    Password: <input type="password"
                                     name="txtPassword"
                                     value=""
                                     required="required"
                                     value={password}
                                     onChange={e => handlePassword(e)}/> <br/>
                    <input type="submit" value="Login" name="btAction"/>
                </form>
            </div>
        </>
    );
}
