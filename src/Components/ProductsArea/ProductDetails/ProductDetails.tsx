import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./ProductDetails.css";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import { NavLink } from "react-router-dom";
import notification from "../../../Utils/Notification";

function ProductDetails(): JSX.Element {
    const params = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductModel>();
    const navigate = useNavigate();

    useEffect(() => {
        const id = +params.id;
        productsService.getProduct(id)
            .then(p => setProduct(p))
            .catch(err => notification.error(err));
        // IIFE:
        // (async () => {
        //     try {
        //         const id = +params.id;
        //         const product = await productsService.getProduct(id);
        //         setProduct(product);
        //     } catch (err: any) {
        //         notification.error(err);
        //     }
        // })();
    }, []);

    async function deleteMe() {
        try {
            const sure = window.confirm("Are you sure?");
            if (!sure) return;

            await productsService.deleteProduct(product.id);

            notification.success('Product has been deleted');
            navigate('/products');
        } catch (err: any) {
            notification.error(err);
        }
    }

    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />
            <br />
            <NavLink to="/products">Back</NavLink>
            <span> | </span>
            <NavLink to={`/products/edit/${product?.id}`} >Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>

        </div>
    );
}

export default ProductDetails;
