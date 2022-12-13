import { Link } from "react-router-dom";

const NavBar = (props) => {
    
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">Homepage</Link>
                <Link to="/shop">Shop</Link>
            </div>

            <div className="navbar-right">
                <Link to="/cart">Cart</Link>
                <p>{props.cart}</p>
            </div>

        </div>
    )
}
export default NavBar;