import { useEffect, useState } from 'react';
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
import "./OutOfStock.css";

function OutOfStock(): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getOutOfStockProducts()
            .then(products => { setProducts(products) })
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="OutOfStock">
            {products.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}

export default OutOfStock;
