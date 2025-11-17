import './SignInForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SignInForm () {
    return (
        <div className="form-container">

            <div className="form">
                <h1>Sign In</h1>

                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>

            </div>

                <div className="input-remember">
                    <label htmlFor="remember-me">Remember me</label>
                    <input type="checkbox" id="remember-me" />
                </div>

                <button type="submit" className="sign-in-button">Sign In</button>
            
        </div>
    )
}

export default SignInForm