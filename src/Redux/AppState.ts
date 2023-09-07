import ProductModel from "../Models/ProductModel"
import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from "./ProductSlice";

export type AppState = {
    products: ProductModel[]
};

export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducer
    }
})