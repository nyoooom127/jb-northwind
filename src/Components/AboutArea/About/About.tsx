import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../Utils/UseTitle';
import RandomImage from '../RandomImage/RandomImage';
import Tune from '../Tune/Tune';
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import "./About.css";
import Greeting from '../../SharedArea/Greeting/Greeting';

function About(): JSX.Element {
    useTitle('About');

    const [currDate, setCurrDate] = useState("");
    function showDate(): void {
        const now = new Date();
        setCurrDate(now.toLocaleDateString())
    }

    const [currTime, setCurrTime] = useState("");
    function showTime(args: SyntheticEvent): void {
        const now = new Date();
        setCurrTime(now.toLocaleTimeString())
    }

    function showNow(args: SyntheticEvent): void {
        console.log((args.target as HTMLButtonElement).innerHTML);
        const now = new Date();
        alert(now.toLocaleString())
    }

    const navigate = useNavigate();

    function navigateToHome(): void {
        navigate('/home');
    }
    const empty = "---";

    const [topProduct, setTopProduct] = useState<string>(empty);

    function displayTopProduct(): void {
        setTopProduct(topProduct === empty ? "Ice Coffee" : empty);
        // alert(topProduct);
    }

    const [topSeller, setTopSeller] = useState<string>(empty);

    function displayTopSeller(): void {
        setTopSeller(topSeller === empty ? "Coffee Time" : empty);
        // alert(topProduct);
    }

    const [clock, setClock] = useState("");

    useEffect(() => {
        const interval = window.setInterval(() => {
            const d = new Date().toLocaleString();
            setClock(d);
            console.log(d);
        }, 1000);

        return () => window.clearInterval(interval);
    }, [])


    return (
        <div className="About">
            <Greeting hour={new Date().getHours()}/>
            <WhoAreWe />

            <hr />

            <button onClick={showDate}>Show Current Date</button>
            <span>{currDate}</span>
            <hr />

            <button onClick={showTime}>Show Current Time: {currTime}</button>
            <hr />

            <button onClick={showNow}>Show Current Date and Time</button>
            <hr />

            <button onClick={navigateToHome}>Navigate to Home</button>
            <hr />
            <button onClick={displayTopProduct}>Display Top Product</button>
            <span>{topProduct}</span>
            <hr />
            <button onClick={displayTopSeller}>Display Top Seller</button>
            <span>{topSeller}</span>
            <hr />

            <span>{clock}</span>

            <RandomImage />

            <Tune />
        </div>
    );
}

export default About;
