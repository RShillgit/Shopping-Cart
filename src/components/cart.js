const Cart = (props) => {

    return (

        <div className="allCartItems">

            {props.cartItems.map(item => {
                return (
                    <div className="cartItem" key={item.name}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
            )})}

            <div className="cartPricing">
                <p>Subtotal: $500</p>
                <p>Tax: $8</p>
                <p>Shipping: $10</p>
                <p>Total: $518</p>
            </div>

        </div>


        
    )
}
export default Cart;