import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import {isLogin} from "../../utils/auth";
import {Link} from "react-router-dom";

function Index(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Car Shop</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/home">Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {!isLogin() ? <div>Welcome to car shop</div> :
                                    <div>Welcome, {localStorage.getItem("USERNAME")}</div>}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    {!isLogin() ? <div><NavLink href="/login">Login to view cart</NavLink></div> :
                                        <NavLink href="/cart">Your cart</NavLink>
                                    }
                                </DropdownItem>
                                {isLogin() ?
                                    <div>
                                <DropdownItem divider/>
                                    <DropdownItem>
                                        <NavLink href="/logout">Logout</NavLink>
                                    </DropdownItem>
                                    </div> : null}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Index;