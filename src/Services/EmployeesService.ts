import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";
import appConfig from "../Utils/AppConfig";

class EmployeesService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        const products = response.data;
        return products;
    }

    public async getEmployee(id: number): Promise<EmployeeModel> {
        const response = await axios.get<EmployeeModel>(appConfig.productsUrl + id);
        const products = response.data;
        return products;
    }
}

const employeesService = new EmployeesService();

export default employeesService;