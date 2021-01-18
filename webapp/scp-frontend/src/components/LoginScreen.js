import React from 'react';

const LoginScreen = () => {
    
    return (
        <div>
            <div className='typewriter'>
            <h1 className='loginScreenHeader'>
                Use ML to segment your music.
            </h1>
            </div>
            <div>
                <button 
                    className="glow-on-hover" 
                    type="button" 
                    onClick={() => window.location = 'http://localhost:8888/login'}
                >Login</button>
            </div>
        </div>
    )
}

// export default LoginScreen;

