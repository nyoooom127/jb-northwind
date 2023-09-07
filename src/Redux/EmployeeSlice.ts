import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EmployeeModel from "../Models/EmployeeModel";

// Reducers:

function setAll(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
    const newState = [...action.payload];

    return newState;
}

function addOne(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    const newState = [...currentState]; // Duplicate state
    newState.push(action.payload); // Perform change

    return newState; // Will replace the current state with this one in the global state.
}

function updateOne(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === action.payload.id);
    if (index >= 0) newState[index] = action.payload;

    return newState;
}

function deleteOne(currentState: EmployeeModel[], action: PayloadAction<number>): EmployeeModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === action.payload);
    if (index >= 0) newState.splice(index, 1);

    return newState;
}

const employeesSlice = createSlice({
    name: "employees", // Slice name
    initialState: [],
    reducers: { setAll, addOne, updateOne, deleteOne }
});

// Export all actions (each reducer will create it's own action)
export const employeeActions = employeesSlice.actions;

// Export reducer
export const employeeReducer = employeesSlice.reducer;