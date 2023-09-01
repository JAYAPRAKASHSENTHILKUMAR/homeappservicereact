import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function HomePage() {
    return (
        <div className="container">
            <h2>Welcome to the Home Page</h2>
            <div className="button-container">
                <Link to="/customer-details">
                    <button className="button">Customer Details</button>
                </Link>
                <Link to="/appliance-details">
                    <button className="button">Appliance Details</button>
                </Link>
                <Link to="/feedback">
                    <button className="button">Feedback</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
