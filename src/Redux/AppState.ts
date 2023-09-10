import ProductModel from "../Models/ProductModel"
import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from "./ProductSlice";
import UserModel from "../Models/UserModel";
import { authReducer } from "./AuthSlice";
import EmployeeModel from "../Models/EmployeeModel";
import { employeeReducer } from "./EmployeeSlice";
import logActions from "./Middleware";
import logger from "redux-logger";

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
    },
    middleware: [logger]
})