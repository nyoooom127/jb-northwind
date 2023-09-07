import { NavLink } from "react-router-dom";
import "./Menu.css";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink end to="/home" >Home</NavLink>
            <NavLink end to="/products">Products</NavLink>
            <NavLink to="/products/new">Add Product</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactUs">Contact Us</NavLink>
            <TotalProducts/>
        </div>
    );
}

export default Menu;
