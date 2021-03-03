import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {

            if (auth) {

                history.push('/')
            }

        })
            .catch(error => alert(error.message))


    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__img" src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"></img>
            </Link>
            <div className="login__form">
                <h1>Login</h1>
                <form className="login__fields">
                    <h5>Email or mobile phone number</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" ></input>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" ></input>

                    <button type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button onClick={register}>Create amazon account</button>
            </div>

        </div>

    )
}

export default Login
