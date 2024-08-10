import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)` }}
        >
            <div className="banner-content">
                <h1>Ideas</h1>
                <p>Where all our great things begin</p>
            </div>
        </div>
    );
};

export default Banner;
