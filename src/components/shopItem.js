import { Link } from "react-router-dom";

const ShopItem = (props) => {

    const destination = `/shop/${props.name}`
    
    return (

        <div className="shopItem">

            <div className="shopItemInfo">
                <Link to={destination}>
                    <img src={props.src} alt={props.name}></img>
                    <p>{props.name}</p>
                    <p>${props.price}</p>
                </Link>
            </div>

        </div>        
    )
}
export default ShopItem;