import React from 'react';
import { useState, useHook } from 'react';
import './aboutme.css';
const Aboutme = ({ logo, baseURL, endpoint }) => {
    const [content, useContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    useHook(() => {
        fetch(baseURL + endpoint).then(data => data.json).then(d => useContent((_) => d));
    }
        , [])

    return (
        <div className="am">
            <img className="profilePic" src={logo} />

            <div className="textAboutMe">
                {content}
            </div>
        </div>
    );
}
export default Aboutme;