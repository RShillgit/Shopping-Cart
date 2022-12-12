import { useParams } from "react-router-dom";

const ItemPage = () => {

    const {id} = useParams();

    return (
        <div className="itemPage">

            <img alt="item"/>

            <div className="item-specific-information">
                <h2>{id}</h2>
                <p>$25</p>
            </div>

            <div className="add-to-cart">
                <button>Add To Cart</button>
                <input type="number"></input>
            </div>
        </div>
    )
}
export default ItemPage;