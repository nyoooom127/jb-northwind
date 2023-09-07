import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppState } from "../../../Redux/AppState";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Menu.css";

function Menu(): JSX.Element {
    const user = useSelector((appState: AppState) => appState.user);

    return (
        <div className="Menu">
            <NavLink end to="/home" >Home</NavLink>
            <NavLink end to="/products">Products</NavLink>
            {user && (
                <NavLink end to="/products/top3">Top3 Products</NavLink>
            )}
            {user && user.role === 'Admin' && (
                <NavLink end to="/products/outOfStock">Out Of Stock Products</NavLink>
            )}
            <NavLink to="/products/new">Add Product</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactUs">Contact Us</NavLink>
            <TotalProducts />
        </div>
    );
}

export default Menu;
