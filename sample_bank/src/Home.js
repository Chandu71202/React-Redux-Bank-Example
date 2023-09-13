import React from 'react';
import './Home.css';

const HomePage = () => {
    return (
        <div className="Home">
            <header className="Home-header">
                <h1>NatWest Banking App</h1>
                <div className="button-container">
                    <button className="button">Register</button>
                    <button className="button">Service</button>
                </div>
                <div className="card-container">
                    <div class="card">
                        <img src="https://picsum.photos/400?random=1" alt="Avatar" />
                        <div className="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://picsum.photos/400?random=1" alt="Avatar" />
                        <div className="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
