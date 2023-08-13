import React from "react"
import './post.css';

function post({ logo, baseURL, endpoint, heading, subHeading, date, tags }) {
    return (
        <div className="complete">
            <a href="" className="postRedirect">
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
                        <img src={logo} className="pic" />
                    </div>

                </div>
                <div className="line"></div>
            </a>
        </div>
    );
}

export default post;
