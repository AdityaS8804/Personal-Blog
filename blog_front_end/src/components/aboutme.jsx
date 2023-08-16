import React from 'react';
import { useState, useEffect } from 'react';
import './aboutme.css';
const Aboutme = ({ baseURL, endpoint, profilePic, content }) => {

    useEffect(() => {

    }
        , [])


    return (
        <div className="am">
            <img className="profilePic" src={profilePic} />

            <div className="textAboutMe">
                {content}
            </div>
        </div>
    );
}
export default Aboutme;