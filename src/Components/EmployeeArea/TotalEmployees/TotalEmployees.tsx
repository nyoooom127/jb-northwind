import { useSelector } from "react-redux";
import "./TotalEmployees.css";
import { AppState } from "../../../Redux/AppState";

function TotalEmployees(): JSX.Element {
    const count = useSelector((appState: AppState) => appState.employees.length);

    return (
        <div className="TotalEmployees">
            <span>Total Employees: {count}</span>
        </div>
    );
}

export default TotalEmployees;
