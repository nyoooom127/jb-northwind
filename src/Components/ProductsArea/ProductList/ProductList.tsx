import { useEffect, useState } from 'react';
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import useTitle from "../../../Utils/UseTitle";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import Spinner from '../../SharedArea/Spinner/Spinner';

function ProductList(): JSX.Element {
    useTitle('Products');

    const [allProducts, setAllProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts().then(products => {
            setAllProducts(products);
        }).catch(err => alert(err.message))
    }, [])
    return (
        <div className="ProductList">
            {allProducts.length === 0
                ? <Spinner />
                : allProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
}

export default ProductList;
