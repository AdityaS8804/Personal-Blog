import React from "react"
import './post.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
function post({ logo, baseURL, endpoint, heading, subHeading, date, tags, id }) {
    const picLink = (baseURL + logo).split('/').filter((a, b) => {
        return a !== '' || baseURL.split('/')[b - 1] === 'http:' || baseURL.split('/')[b - 1] === 'https:';
    }).join('/')
    console.log(picLink)
    return (
        <div className="complete">
            <Link to={`/${id}`} className="postRedirect">
                <div className="post">
                    <div className="content">
                        <div className="Heading">{heading}</div>
                        <div className="subHeading">
                            {subHeading}
                        </div>
                        <div className="date">{date}</div>
                        <div className="Tags">
                            {
                                tags.map(t => <div className="tag">{t}</div>)
                            }
                        </div>
                    </div>
                    <div className="postPic">
                        <img src={picLink} className="pic" />
                    </div>

                </div>
                <div className="line"></div>
            </Link>
        </div>
    );
}

export default post;
