import beveragesImage from '../../../Assets/Images/beverages.jpg';
import candiesImage from '../../../Assets/Images/candies.jpg';
import cheeseImage from '../../../Assets/Images/cheese.jpg';
import fishAndChipsImage from '../../../Assets/Images/fishAndChips.jpeg';
import fruitsImage from '../../../Assets/Images/fruits.jpg';
import produceImage from '../../../Assets/Images/produce.png';
import snacksImage from '../../../Assets/Images/snacks.jpg';
import useTitle from "../../../Utils/UseTitle";
import Clock from '../../SharedArea/Clock/Clock';
import Orders from '../../SharedArea/Orders/Orders';
import Products from "../Products/Products";
import Search from "../Search/Search";
import "./Home.css";

function Home(): JSX.Element {
    useTitle('Home');

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

    const products = [
        { id: 1, img: fruitsImage, title: 'Fruits' },
        { id: 2, img: beveragesImage, title: 'Beverages' },
        { id: 3, img: candiesImage, title: 'Candies' },
        { id: 4, img: cheeseImage, title: 'Cheese' },
        { id: 5, img: fishAndChipsImage, title: 'Fish & Chips' },
    ]

    return (
        <div className="Home">
            <Clock format='12h'/>
            <Search />
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
                    <span key={d.id}>🤍 {d.name}, price:{d.price}</span>
                ))}
            </div>
            <Orders/>
            <Products />
            {/* <div className="Products">
                {products.map(p => (
                    <div key={p.id} className="Product">
                        <img src={p.img}/>
                        <p>{p.title}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Home;
