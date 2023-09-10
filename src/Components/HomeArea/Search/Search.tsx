import notification from "../../../Utils/Notification";
import "./Search.css";
import {useState, SyntheticEvent, ChangeEvent} from 'react';

function Search(): JSX.Element {
    const [textToSearch, setTextToSearch] = useState<string>("");

    function handleChange(args: ChangeEvent<HTMLInputElement>): void {
        const value = args.target.value;
        setTextToSearch(value);
    }

    function searchItem():void {
        notification.success(`Searching for: ${textToSearch}`);
        setTextToSearch("");
    }

    return (
        <div className="Search">
			<label>Search something:</label>
            <input type="search" value={textToSearch} onChange={handleChange}/>
            <button onClick={searchItem}>🔍</button>
            <span>{textToSearch}</span>
        </div>
    );
}

export default Search;
