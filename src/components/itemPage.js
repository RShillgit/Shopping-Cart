import { useState } from "react";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";
import blackT from '../images/black-shirt.png';
import grayT from '../images/gray-shirt.png'
import blackPolo from '../images/black-polo.png';
import orangeT from '../images/orange-shirt.png'
import whiteTshirt from '../images/white-shirt.png';
import jeans from '../images/jeans.png';

const ItemPage = (props) => {

    const [quantity, setQuantity] = useState(1);

    const {id} = useParams();

    /* 
        I am hardcoding this array again because I am assuming item information
        would come from a database rather than being passed as props from one component
        to another. Also I would assume the customer's cart would also be a database
        because cart information is saved to their account, not just locally.

        Based on these assumptions, when rendering the item clicked, the backend would
        query the database for the item information and send it to the front end.
    */
    const shopItems = [
        {
            name: 'Black T-Shirt',
            price: 25,
            src: blackT,
            id: uniqid(),
        },
        {
            name: 'Gray T-Shirt',
            price: 30,
            src: grayT,
            id: uniqid(),
        },
        {
            name: 'Black Polo',
            price: 35,
            src: blackPolo,
            id: uniqid(),
        },
        {
            name: 'Orange T-Shirt',
            price: 15,
            src: orangeT,
            id: uniqid(),
        },
        {
            name: 'White T-Shirt',
            price: 45,
            src: whiteTshirt,
            id: uniqid(),
        },
        {
            name: 'Jeans',
            price: 50,
            src: jeans,
            id: uniqid(),
        }
    ];

    const selectedItem = shopItems.find(item => item.name === id);

    const quantityChange = (e) => {
        const convertedInput = Number(e.target.value)
        setQuantity(convertedInput);
    }

    const handleAddToCart = () => {

        // Add a quantity key/value pair to the selected item
        selectedItem.quantity = quantity;

        // Send item to App's add to cart function
        props.addToCart(selectedItem);
    }

    return (
        <div className="itemPage">

            <img src={selectedItem.src} alt="item"/>

            <div className="item-specific-information">
                <h2>{id}</h2>
                <p>${selectedItem.price}</p>
            </div>


            <div className="add-to-cart">
                <button onClick={handleAddToCart}>Add To Cart</button>
                <input type="number" value={quantity} onChange={quantityChange}></input>
            </div>
        </div>
    )
}
export default ItemPage;