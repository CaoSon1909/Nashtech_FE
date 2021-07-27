import React, {useState, useEffect} from "react";
import "./style.css"
import {Link, useHistory} from "react-router-dom";
import {get} from "../../utils/httpHelper"
import {logOut} from "../../utils/auth";
// import ModalConfirm from "../ModalConfirm";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

toast.configure();
export default function Index(props) {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [cateList, setCateList] = useState([]);
    const [status, setStatus] = useState([localStorage.getItem("status")]);
    useEffect(() => {
        get("/api/v1/public/categories").then((response) => {
            if (response.status === 200) {
                setCateList([...response.data]);
            }
        });
    }, []);

    function handleLogOut(e) {
        console.log("LOG OUT PRESS");
        if (e === "YES") {
            setStatus(false);
            history.push("/");
            logOut();
        }
    }

    function handleOrder() {
        let cart = localStorage.getItem("CART")
        if (cart.trim().length !== 0) {
            history.push(`/Ordering`);
        } else {
            toast.info("The cart is still empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        }
    }

    function isLogging() {
        const name = localStorage.getItem("USERNAME")
        if (status && name !== "") {
            return (
                <div>
                    <h1>Welcome, {name}</h1>
                    <button onClick={e => handleLogOut(e)}></button>
                </div>
                // <Nav className="mr-auto" navbar>
                //     <UncontrolledDropdown nav inNavbar>
                //         <DropdownToggle nav caret>
                //             welcome, {name}
                //         </DropdownToggle>
                //         <DropdownMenu>
                //             <DropdownItem divider/>
                //             <DropdownItem>
                //                 <ModalConfirm onChoice={(e) => handleLogOut(e)}/>
                //             </DropdownItem>
                //         </DropdownMenu>
                //     </UncontrolledDropdown>
                // </Nav>
            );
        }
        return (
            <Link to={`/Login`} style={{textDecoration: "none"}}>
                Login
            </Link>
        );
    }

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            {/*<Navbar expand="md" className="fixed-nav">*/}
            {/*    <NavbarBrand href="/">Home</NavbarBrand>*/}
            {/*    <NavbarToggler onClick={toggle}/>*/}
            {/*    <Collapse isOpen={isOpen} navbar>*/}
            {/*        <Nav className="mr-auto" navbar>*/}
            {/*            <UncontrolledDropdown nav inNavbar>*/}
            {/*                <DropdownToggle nav caret>*/}
            {/*                    Bicycles*/}
            {/*                </DropdownToggle>*/}
            {/*                <DropdownMenu>*/}
            {/*                    {cateList.map((cate) => (*/}
            {/*                        <div key={cate.id}>*/}
            {/*                            <DropdownItem>*/}
            {/*                                <Link*/}
            {/*                                    to={`/Bike/${cate.id}`}*/}
            {/*                                    style={{textDecoration: "none"}}*/}
            {/*                                >*/}
            {/*                                    {cate.name}*/}
            {/*                                </Link>*/}
            {/*                            </DropdownItem>*/}
            {/*                            <DropdownItem divider/>*/}
            {/*                        </div>*/}
            {/*                    ))}*/}
            {/*                </DropdownMenu>*/}
            {/*            </UncontrolledDropdown>*/}
            {/*        </Nav>*/}
            {/*    </Collapse>*/}
            {/*    {isLogging()}*/}
            {/*    /!*<Cart/>*!/*/}
            {/*</Navbar>*/}
        </div>
    );
}