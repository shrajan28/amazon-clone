import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import './Payment.css'

function Payment() {
    const [{ user, basket }, dispatch] = useStateValue();
    return (
        <div className="payment HomepageHeroGradient gradient isloaded">
            <canvas class="gradient__canvas isloaded " data-js-controller="Gradient" data-js-darken-top="" data-transition-in="" width="1600" height="800"></canvas>
            <div className="payment__section">
                <div className="payment__title" >
                    <h5>Delivery Address</h5>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>cvscaca</p>
                    <p>scscsvsvsvsv</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title" >
                    <h5>Review items and delivery</h5>
                </div>
                <div className="payment__items">
                    {
                        basket.map(item => (
                            <CheckoutProduct id={item.id} title={item.title} price={item.price} img={item.image} rating={item.rating}></CheckoutProduct>
                        ))
                    }
                </div>
            </div>
            <div className="payment__section"></div>
        </div>

    )
}

export default Payment
