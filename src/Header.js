import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

export default function Header() {
    const [state] = useStateValue();

    const handleAuthentication = () => {
        if (state.user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>

            <div className="header__search">
                <input className="header__searchinput" type="text"></input>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!state.user && "/Login"} >
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__line1">Hello {state.user ? state.user?.email : "Guest"}</span>

                        <span className="header__line2">{state.user ? 'Sign Out' : 'Sign In'}</span>



                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__line1">Returns</span>
                    <span className="header__line2">& Orders</span>

                </div>
                <div className="header__option">
                    <span className="header__line1">Your</span>
                    <span className="header__line2">Prime</span>

                </div>
                <Link to="/checkout">
                    <div className="header__basket">
                        <ShoppingBasketIcon />
                        <span className="header__line2 header__basketcount">{state.basket.length}</span>
                    </div>
                </Link>
            </div >
        </div >
    )
}
