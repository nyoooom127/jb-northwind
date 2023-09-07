import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";
import appConfig from "../Utils/AppConfig";
import { appStore } from "../Redux/AppState";
import { employeeActions } from "../Redux/EmployeeSlice";

class EmployeesService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        let employees = appStore.getState().employees;

        if (employees.length === 0) {
            const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
            employees = response.data;
            appStore.dispatch(employeeActions.setAll(employees));
        }

        return employees;
    }

    public async getEmployee(id: number): Promise<EmployeeModel> {
        let employees = appStore.getState().employees;
        let employee = employees.find(p => p.id === id);

        if (!employee) {
            const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
            employee = response.data;
        }

        return employee;
    }
}

const employeesService = new EmployeesService();

export default employeesService;