import { Link } from "react-router-dom";
import ShopItem from "./shopItem";

const Shop = () => {

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

    return (
        <div className="shop">

            {shopItems.map((item) => {return (<ShopItem name={item.name} price={item.price} src={item.src} />)})}
          
        </div>
    )
}
export default Shop;