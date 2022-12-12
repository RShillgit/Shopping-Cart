import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">Homepage</Link>
            <Link to="/shop">Shop</Link>
        </div>
    )
}
export default NavBar;