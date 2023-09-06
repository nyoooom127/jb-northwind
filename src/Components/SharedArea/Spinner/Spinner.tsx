import "./Spinner.css";
import loadingSource from '../../../Assets/Images/loading.gif';

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={loadingSource}/>
        </div>
    );
}

export default Spinner;
