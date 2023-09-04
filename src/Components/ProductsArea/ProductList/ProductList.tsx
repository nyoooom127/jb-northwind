import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import { useEffect, useState } from 'react';
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductList(): JSX.Element {
    const [allProducts, setAllProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts().then(products => {
            console.log(products);
            setAllProducts(products);
        }).catch(err => alert(err.message))
    })
    return (
        <div className="ProductList">
            {allProducts.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default ProductList;
