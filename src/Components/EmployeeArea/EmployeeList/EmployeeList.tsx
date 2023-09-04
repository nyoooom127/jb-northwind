import EmployeeModel from "../../../Models/EmployeeModel";
import { useState, useEffect } from 'react';
import "./EmployeeList.css";
import employeesService from "../../../Services/EmployeesService";

function EmployeeList(): JSX.Element {
    const fields = [
        "Image",
        "FirstName",
        "LastName",
        "Title",
        "Country",
        "City",
        "BirthDate",
    ];

    const [allEmployees, setAllEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {
        employeesService.getAllEmployees().then(employees => {
            console.log(employees);
            setAllEmployees(employees);
        }).catch(err => alert(err.message))
    }, [])
    return (
        <table className="EmployeeList">
            <thead>
                <tr>
                    {fields.map(f => (
                        <th>{f}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    allEmployees.map(employee => (
                        <tr key={employee.id}>
                            <td>
                                <img src={employee.imageUrl} />
                            </td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.title}</td>
                            <td>{employee.country}</td>
                            <td>{employee.city}</td>
                            <td>{employee.birthDate}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default EmployeeList;
