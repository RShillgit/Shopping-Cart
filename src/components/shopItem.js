import { Link } from "react-router-dom";

const ShopItem = (props) => {

    const destination = `/shop/${props.name}`
    
    return (

        <div className="shopItem">
            {/* Find a way to send the item info to the item page */}
            <Link to={destination}>
            
                <p>{props.name}</p>
                <p>${props.price}</p>
            </Link>
        </div>        
    )
}
export default ShopItem;