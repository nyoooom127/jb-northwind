import { useEffect, useState } from 'react';
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import useTitle from "../../../Utils/UseTitle";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import Spinner from '../../SharedArea/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { AppState } from '../../../Redux/AppState';
import TotalProducts from '../TotalProducts/TotalProducts';

function ProductList(): JSX.Element {
    useTitle('Products');

    const allProducts = useSelector((appState: AppState) => appState.products);

    // const [allProducts, setAllProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts().catch(err => alert(err.message))
    }, [])

    return (
        <div className="ProductList">
            <TotalProducts/>
            {allProducts.length === 0
                ? <Spinner />
                : allProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
}

export default ProductList;
