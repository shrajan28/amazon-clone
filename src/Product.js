import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, image, rating, price }) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price
            }
        })

    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p >☆</p>))
                    }
                </div>


            </div>
            <img className="product__img" src={image} ></img>
            <button onClick={addToBasket} className="product__button">Add to cart</button>
        </div>
    )
}

export default Product
