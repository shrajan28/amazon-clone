import React from 'react'
import Checkout from './Checkout'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img className="home__img"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344-c1f478aff592._CB428091778_QL85_V1_.jpg"
                />



                <div className="home__row">
                    <Product
                        id={1234}
                        title={"ABC THE PRODUCT"}
                        price={12.2}
                        image={"https://m.media-amazon.com/images/I/41sYkAlp2ML.jpg"}
                        rating={3}
                    />
                    <Product
                        id={123}
                        title={"DEF THE PRODUCT"}
                        price={234.3}
                        image={"https://cdn.theatlantic.com/assets/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg"}
                        rating={5}
                    />

                </div>
                <div>
                    <Checkout />
                </div>

            </div>


        </div>
    )
}

export default Home
