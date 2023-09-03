import "./Home.css";
import produceImage from '../../../Assets/Images/produce.png';
import snacksImage from '../../../Assets/Images/snacks.jpg';

function Home(): JSX.Element {
    // const imageNumber = Math.floor(Math.random() * 2) + 1;
    const now = new Date();
    const day = now.getDay();
    const isWeekEnd = day === 5 || day === 6;

    const desserts = [
        { id: 1, name: "Ice Cream", price: 10.5 },
        { id: 2, name: "Brownie", price: 15.7 },
        { id: 3, name: "Cake", price: 20.6 },
        { id: 4, name: "Cookie", price: 10.5 },
        { id: 5, name: "Cupcake", price: 11.9 },
    ];

    return (
        <div className="Home">
            {isWeekEnd ? (
                <div>
                    <img src={produceImage} />
                    <p>This produce basket is on sale</p>
                </div>
            ) : (
                <div>
                    <img src={snacksImage} />
                    <p>This snack basket is on sale</p>
                </div>
            )}
            <div className="desserts">
                {desserts.map(d => (
                    <span key={d.id}>🤍{d.name}, price:{d.price}</span>
                ))}
            </div>
        </div>
    );
}

export default Home;
