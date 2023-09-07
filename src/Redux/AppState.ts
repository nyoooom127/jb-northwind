import ProductModel from "../Models/ProductModel"
import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from "./ProductSlice";
import UserModel from "../Models/UserModel";
import { authReducer } from "./AuthSlice";
import EmployeeModel from "../Models/EmployeeModel";
import { employeeReducer } from "./EmployeeSlice";

export type AppState = {
    products: ProductModel[];
    user: UserModel;
    employees: EmployeeModel[];
};

export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducer,
        user: authReducer,
        employees: employeeReducer
    }
})