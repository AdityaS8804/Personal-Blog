import React from 'react';
import { useState, useEffect } from 'react';
import './aboutme.css';
const Aboutme = ({ baseURL, endpoint }) => {
    const [content, setContent] = useState('');
    const [profilePic, setProfilePic] = useState('');
    useEffect(() => {
        console.log(baseURL + endpoint)
        fetch(baseURL + endpoint).then(data => data.json()).then(d => {
            setContent((_) => d.body)
            setProfilePic((_) => (baseURL.split('/').filter((a, b) => (a !== 'api' && (a !== '' || baseURL.split('/')[b - 1] === 'http:' || baseURL.split('/')[b - 1] === 'https:'))).join('/') + d.logo))
        }).catch((e) => {
            console.log(e)
        })
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