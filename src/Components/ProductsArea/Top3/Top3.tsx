import { useEffect, useState } from "react";
import productsService from "../../../Services/ProductsService";
import "./Top3.css";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import notification from "../../../Utils/Notification";

function Top3(): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getTop3Products()
            .then(products => {setProducts(products)})
            .catch(err => notification.error(err));
    }, []);

    return (
        <div className="Top3">
            {products.map(p => (
                <ProductCard key={p.id} product={p}/>
            ))}
        </div>
    );
}

export default Top3;
