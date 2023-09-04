import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./ProductDetails.css";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import { NavLink } from "react-router-dom";

function ProductDetails(): JSX.Element {
    const params = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductModel>();

    useEffect(() => {
        const id = +params.id;
        productsService.getProduct(id)
            .then(p => setProduct(p))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />
            <br/>
            <NavLink to="/products">Back</NavLink>
        </div>
    );
}

export default ProductDetails;
