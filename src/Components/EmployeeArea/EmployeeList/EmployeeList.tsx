import { useEffect, useState } from 'react';
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import useTitle from "../../../Utils/UseTitle";
import "./EmployeeList.css";
import { useSelector } from 'react-redux';
import { AppState } from '../../../Redux/AppState';
import notification from '../../../Utils/Notification';

function EmployeeList(): JSX.Element {
    useTitle('Employees');

    const fields = [
        "Image",
        "FirstName",
        "LastName",
        "Title",
        "Country",
        "City",
        "BirthDate",
    ];
    
    const allEmployees = useSelector((appState: AppState) => appState.employees);

    useEffect(() => {
        employeesService.getAllEmployees().catch(err => notification.error(err))
    }, []);

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
