import React from 'react';
import classes from './LoginScreenStyleTest.css'

const LoginScreen = () => {
    
    return (
        <div className={classes}>
            <div>
                <h1>
                    Use ML to segment your music.
                </h1>
            </div>
            <div>
                <button 
                    className="glow-on-hover" 
                    type="button" 
                    onClick={() => window.location = 'http://localhost:8888/login'}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginScreen;

