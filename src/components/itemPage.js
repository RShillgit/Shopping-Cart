import { useState } from "react";
import { useParams } from "react-router-dom";

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
            name: 'Item1',
            price: 25,
            src: '',
        },
        {
            name: 'Item2',
            price: 30,
            src: '',
        },
        {
            name: 'Item3',
            price: 35,
            src: '',
        },
        {
            name: 'Item4',
            price: 15,
            src: '',
        },
        {
            name: 'Item5',
            price: 45,
            src: '',
        },
        {
            name: 'Item6',
            price: 50,
            src: '',
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

            <img alt="item"/>

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