import React, {useEffect, useState} from 'react';
import {get} from "../../../utils/httpHelper";
import axios from "axios";
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
    //initial 2 state
    const [searchValue, setSearchValue] = useState();
    const [productsResult, setProductsResult] = useState([]);

    useEffect(() => {
        //get all products and categories
        getAllProducts()
    }, []);

    async function getAllProducts() {
        return get("/api/v1/vehicles/all?keyword=")
            .then(res => {
                if (res.status === 200) {
                    setProductsResult([...res.data])
                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>Products List</h1>
            <Table striped>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Date of manufacturer</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Brand</th>
                </tr>
                </thead>
                <tbody>
                {productsResult.map((product) => (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.color}</td>
                        <td>{product.dateOfManufacture}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.status == true ? (<div>ACTIVE</div>) : (<div>INACTIVE</div>)}</td>
                        <td>
                            <img src={product.imageURL}/>
                        </td>
                        <td>{product.description}</td>
                        <td>{product.categoryID}</td>
                        <td>{product.brandID}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

