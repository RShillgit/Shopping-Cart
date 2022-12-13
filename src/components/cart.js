import { useEffect, useState } from "react";

const Cart = (props) => {

    const [cartInfo, setCartInfo] = useState(
        <div className="noCartItems"><h1>There Are No Items In Your Cart</h1></div>
    )
    const [pricing, setPricing] = useState()

    const removeItem = (obj) => {
        console.log(obj)
    }

    // On page render
    useEffect(() => {

        // If there are items in the cart
        if (props.cartItems.length > 0) {

            // Add up prices to find subtotal
            const subTotal = props.cartItems.reduce(function (total, item) {return total + (item.price * item.quantity)}, 0); 

            // 4% sales tax
            const tax = (subTotal * .04);
            const taxString = tax.toFixed(2)

            // Shipping
            const shipping = 9.99

            // Real total
            const total = (subTotal + tax + shipping).toFixed(2);

            setCartInfo(props.cartItems.map(item => {
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
    }, []);


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