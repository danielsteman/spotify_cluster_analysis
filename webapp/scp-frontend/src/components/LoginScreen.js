import React from 'react';
import './LoginScreenStyle.css'

const LoginScreen = () => {
    
    return (
        <div className='headerBox'>
            <div className='typewriter'>
            <h1 className='loginScreenHeader'>
                Use ML to segment your music.
            </h1>
            </div>
            <div>
                <button 
                    className="loginButton" 
                    type="button" 
                    onClick={() => window.location = 'http://localhost:8888/login'}
                >Login</button>
            </div>
        </div>
    )
}

export default LoginScreen;

