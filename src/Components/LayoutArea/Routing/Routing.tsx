import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import "./Routing.css";
// import About from "../../AboutArea/About/About";
import ContactUs from "../../AboutArea/ContactUs/ContactUs";
import EmployeeList from "../../EmployeeArea/EmployeeList/EmployeeList";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import Spinner from "../../SharedArea/Spinner/Spinner";
import Page404 from "../Page404/Page404";

function Routing(): JSX.Element {

    function delay() {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 3000)
        })
    }
    const LazyAbout = lazy(async () => {
        await delay();
        return import("../../AboutArea/About/About")
    })

    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/employees" element={<EmployeeList />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/about" element={
                    <Suspense fallback={<Spinner />}>
                        <LazyAbout />
                    </Suspense>
                } />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
