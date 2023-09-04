import "./Products.css";
import beveragesImage from '../../../Assets/Images/beverages.jpg';
import candiesImage from '../../../Assets/Images/candies.jpg';
import cheeseImage from '../../../Assets/Images/cheese.jpg';
import fishAndChipsImage from '../../../Assets/Images/fishAndChips.jpeg';
import fruitsImage from '../../../Assets/Images/fruits.jpg';

function Products(): JSX.Element {
    const products = [
        {id: 1, img: fruitsImage, title: 'Fruits'},
        {id: 2, img: beveragesImage, title: 'Beverages'},
        {id: 3, img: candiesImage, title: 'Candies'},
        {id: 4, img: cheeseImage, title: 'Cheese'},
        {id: 5, img: fishAndChipsImage, title: 'Fish & Chips'},
    ]

    return (
        <div className="Products">
			{products.map(p => (
                    <div key={p.id} className="Product">
                        <img src={p.img}/>
                        <p>{p.title}</p>
                    </div>
                ))}
        </div>
    );
}

export default Products;
