import React from 'react'
import "./Checkout.css"
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { useHistory } from 'react-router-dom';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    const getProducts = ({ basket }) => (


        basket.map((item) => (<CheckoutProduct id={item.id} title={item.title} price={item.price} img={item.image} rating={item.rating} />))


    );

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://www.code-ship.com/wp-content/uploads/2020/01/classified-advertisement-web-development-1024x347.jpg" className="checkout__ad" />
                <h2>Your Shopping Basket</h2>


                <div className="checkout__products">

                    {getProducts({ basket: basket })}

                </div>



            </div>
            <div className="checkout__right">
                <div className="subtotal">
                    <p>
                        Subtotal ({basket?.length} items):<strong>{getBasketTotal(basket)}</strong>
                    </p>
                    <small className="subtotal__checkbox" ><input type="checkbox" />This order contains a gift</small>

                </div>
                <button onClick={e => history.push("/payment")}>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default Checkout
