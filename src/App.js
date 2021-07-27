import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
// import Header from "./components/Header/Banner"
// import Navbar from "./components/Navbar"
import Login from "./components/Login"
import PrivateRouteAdmin from "./components/privateRouteAdmin"
import PrivateRouteUser from "./components/privateRouteUser";
import Admin from "./components/Admin/"
import User from "./components/User";
import {logOut} from "./utils/auth";
import PublicHome from "./components/PublicHome";
import {  Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Container} from "reactstrap";
import Logout from "./components/Logout";
import Header from "./components/Header"
import {Cart} from "./components/Cart";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";

function App() {

    return (

        <BrowserRouter>
            <div className="App">
                <body>
                <header>
                    <Header/>
                </header>
                <br/>
                {/*Routing*/}
                <Route exact path="/login">
                    <Login/>
                </Route>

                <Route exact path="/">
                    <PublicHome/>
                </Route>

                <Route exact path="/home">
                    <PublicHome/>
                </Route>

                <Route exact path="/cart">
                    <Cart/>
                </Route>

                <Route exact path="/admin/add-product">
                    <AddProduct/>
                </Route>

                <Route exact path="/admin/edit-product">
                    <EditProduct/>
                </Route>

                <PrivateRouteAdmin exact path="/Admin" component={Admin}/>
                <PrivateRouteUser exact path="/User" component={User}/>
                </body>
            </div>
        </BrowserRouter>
    );
}

export default App;
