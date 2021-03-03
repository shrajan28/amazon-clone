import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move'

function CheckoutProduct({ id, title, price, rating, img }) {
    const [state, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <FlipMove easing="cubic-bezier(1, 0, 0, 1)" appearAnimation="accordionVertical"
            leaveAnimation="fade"
            className="checkout__product" maintainContainerHeight="true" >


            <div className="product__left">
                <img src={img}></img>
                {console.log(img)}
            </div>
            <div className="product__right">
                <h2>{title}</h2>
                <p><small>$</small><strong>{price}</strong></p>
                <div className="product__rating">{Array(rating).fill().map((_, i) => <p  >★</p>)}</div>
                <button onClick={removeFromBasket}>Remove from basket</button>

            </div>


        </FlipMove >
    )
}

export default CheckoutProduct
