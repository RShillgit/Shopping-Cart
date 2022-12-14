import { useEffect, useState } from "react";

const Cart = (props) => {

    const [items, setItems] = useState(props.cartItems);

    const [cartInfo, setCartInfo] = useState();
    const [pricing, setPricing] = useState();

    const removeItem = (obj) => {

        const remove = props.removeCartItem(obj);

        setItems(remove);
    }

    // Any time the items array changes, rerender cart items div
    useEffect(() => {
        renderCartItems();
        renderPricing();
    }, [items]) 

    const renderCartItems = () => {

        setCartInfo(items.map(item => {
            return (
                <div className="cartItem" key={item.name}>
                    <img src={item.src} alt={item.name} />
                    <p>Price: ${item.price} each</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="removeBtn">
                        <button onClick={() => removeItem(item)}>Remove Item</button>
                    </div>
                </div>
        )}))
    }

    const renderPricing = () => {

        if (items.length > 0) {

            // Add up prices to find subtotal
            const subTotal = items.reduce(function (total, item) {return total + (item.price * item.quantity)}, 0); 

            // 4% sales tax
            const tax = (subTotal * .04);
            const taxString = tax.toFixed(2)

            // Shipping
            const shipping = 9.99

            // Real total
            const total = (subTotal + tax + shipping).toFixed(2);

            setPricing(                        
                <div className="cartPricing">
                    <div className="pricingInfo">
                        <p>Subtotal: ${subTotal}</p>
                        <p>Tax: ${taxString}</p>
                        <p>Shipping: ${shipping}</p>
                        <p>Total: ${total}</p>
                        <button>Checkout</button>
                    </div>
                </div>
            )
        }
        // Else if the cart is empty
        else {
            setCartInfo(
                <div className="noCartItems">
                    <h1>There Are No Items In Your Cart</h1>
                </div>
            )
            setPricing();
        }
    }

    return (

        <div className="cart">

            <div className="allCartItems">
                {cartInfo}
            </div>

            {pricing}

        </div>

    )
}
export default Cart;