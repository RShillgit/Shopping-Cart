import uniqid from "uniqid";
import ShopItem from "./shopItem";
import blackT from '../images/black-shirt.png';
import grayT from '../images/gray-shirt.png'
import blackPolo from '../images/black-polo.png';
import orangeT from '../images/orange-shirt.png'
import whiteTshirt from '../images/white-shirt.png';
import jeans from '../images/jeans.png';

const Shop = () => {

    /* This Array Will Act as a database of items for sale */
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

    return (
        <div className="shop">

            {shopItems.map((item) => {return (<ShopItem name={item.name} price={item.price} src={item.src} key={item.id} />)})}
          
        </div>
    )
}
export default Shop;