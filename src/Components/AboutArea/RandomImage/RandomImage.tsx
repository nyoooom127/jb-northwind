import "./RandomImage.css";
import beveragesImage from '../../../Assets/Images/beverages.jpg';
import candiesImage from '../../../Assets/Images/candies.jpg';
import cheeseImage from '../../../Assets/Images/cheese.jpg';
import fishAndChipsImage from '../../../Assets/Images/fishAndChips.jpeg';
import fruitsImage from '../../../Assets/Images/fruits.jpg';
import { useEffect, useState } from "react";

function RandomImage(): JSX.Element {
    const products = [
        fruitsImage,
        beveragesImage,
        candiesImage,
        cheeseImage,
        fishAndChipsImage
    ];

    function getRndNum() {
        return Math.floor(Math.random() * 5);
    }

    const [image, setImage] = useState<string>(fruitsImage);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setImage(products[getRndNum()]);
            // console.log(image);
        }, 3000);

        return () => window.clearInterval(interval);
    }, []);


    return (
        <div className="RandomImage">
            <img src={image} />
        </div>
    );
}

export default RandomImage;
