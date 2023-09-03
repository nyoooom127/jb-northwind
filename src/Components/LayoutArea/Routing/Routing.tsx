import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import About from "../../AboutArea/About/About";
import Page404 from "../Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
