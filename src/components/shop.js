import uniqid from "uniqid";
import ShopItem from "./shopItem";

const Shop = () => {

    // Put uniqid in each shopItem object and make the shopItem key=uniqid

    /* This Array Will Act as a database of items for sale */
    const shopItems = [
        {
            name: 'Item1',
            price: 25,
            src: '',
            id: uniqid(),
        },
        {
            name: 'Item2',
            price: 30,
            src: '',
            id: uniqid(),
        },
        {
            name: 'Item3',
            price: 35,
            src: '',
            id: uniqid(),
        },
        {
            name: 'Item4',
            price: 15,
            src: '',
            id: uniqid(),
        },
        {
            name: 'Item5',
            price: 45,
            src: '',
            id: uniqid(),
        },
        {
            name: 'Item6',
            price: 50,
            src: '',
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