import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"
import ViewProduct from "./ViewProduct"
import {useEffect, useState} from "react";
import {get} from "./../../utils/httpHelper"
//reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchProducts from "../Products/SearchProducts"
//navigation side bar
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useHistory} from "react-router-dom";

export default function Index() {
    //initial 2 state of products and categories
    const [products, setProducts] = useState();
    const [categories, setCategories] = useState();

    const history = useHistory();
    return (
        <div>
            <SearchProducts/>
            <Navigation
                activeItemId="/management/members"
                onSelect={({itemId}) => {
                    // maybe push to the route
                    history.push(itemId)
                }}
                items={[
                    {
                        title: 'Add product',
                        itemId: '/admin/add-product',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        // elemBefore: () => <Icon name="inbox" />,
                    },
                    {
                        title: 'Edit product',
                        itemId: '/admin/edit-product',
                        // elemBefore: () => <Icon name="users" />,
                    },
                ]}
            />
            {/*<AddProduct/>*/}
            {/*<EditProduct/>*/}
        </div>
    );
}