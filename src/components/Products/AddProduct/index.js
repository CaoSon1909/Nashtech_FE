import React, { useState, useEffect } from "react";
import {get, postWithToken, postAuth} from "../../../utils/httpHelper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//react strap
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

toast.configure();
export default function AddProduct(){

    const [categoryList, setCategoryList] = useState([]);

    //product states
    const [prodName, setProdName] = useState("");
    const [prodColor, setProdColor] = useState("");
    const [prodDate, setProdDate] = useState(getNow);
    const [prodPrice, setProdPrice] = useState(1);
    const [prodQuantity, setProdQuantity] = useState(1);
    const [imageURL, setImageURL] = useState("");
    const [prodDescrip, setProdDescrip] = useState("")
    const [brandID, setBrandID] = useState("");

    useEffect(() => {
        getAllCategories();
        getAllBrands();
    }, []);

    async function getAllCategories(){
        get("/api/v1/public/categories").then(res =>{
            if (res.status === 200){
                console.log(res.data)
                setCategoryList([...res.data])
            }
        })
    }

    async function getAllBrands(){
        get("/api/v1/brands/all").then(res =>{
            if (res.status === 200){
                console.log(res.data)
                setBrandID([...res.data])
            }
        })
    }

    function getNow(){
        return new Date().getTime(); //long type
    }

    function handleSubmit(e) {
        console.log("Submitted create new product")
    }

    function handleSelectCategory(e){
        console.log(e.target.value)
    }

    return (
        <div>
            {categoryList.map( (c) => (<div>{c[1]}</div>) )}
            <h1>Add new product</h1>
            <Form>
                {/*Product name*/}
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Product's Name:</Label>
                    <Col sm={10}>
                        <Input type="text" name="productName" id="exampleText" placeholder="Product's name" required maxLength="50" />
                    </Col>
                </FormGroup>
                {/*Select color*/}
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select color</Label>
                    <Col sm={10}>
                        <Input type="select" name="selectColor" id="exampleSelect">
                            <option>White</option>
                            <option>Yellow</option>
                            <option>Green</option>
                            <option>Blue</option>
                            <option>Red</option>
                        </Input>
                    </Col>
                </FormGroup>
                {/*Price*/}
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Product's Price:</Label>
                    <Col sm={10}>
                        <Input type="text"
                               name="productPrice"
                               id="exampleText"
                               placeholder="Product's price"
                               required
                               maxLength="50"
                               min="1"
                               pattern={/^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/}/>
                    </Col>
                </FormGroup>
                {/*Quantity*/}
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Product's Quantity:</Label>
                    <Col sm={10}>
                        <Input type="number"
                               name="productQuantity"
                               id="exampleText"
                               placeholder="Product's quantity"
                               required maxLength="50"
                               min="1"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>Choose picture:</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Please choose the picture lower than 50KB
                        </FormText>
                    </Col>
                </FormGroup>
                {/*Choose category and brand*/}
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select category</Label>
                    <Col sm={10}>
                        <Input
                            type="select"
                            name="selectCategory"
                            id="exampleSelect"
                            onChange={e => handleSelectCategory(e)}>
                            {categoryList.map( (c) => (<option value={c[0]}>{c[1]}</option>) )}
                            {/*<option>White</option>*/}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <button type="submit" onClick={e => handleSubmit(e)}>Create</button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
    
}