import React from "react";
import './footer.css';

function footer(props) {
    const { baseURL, endpoint } = props
    return (
        <div className="footer">
            <a href="mailto:email@example.com" className="connect">
                Lets Connect
            </a>
            <div className="socials">
                <a href="https://www.instagram.com/aditya_s_8804/" target="_blank" className="insta">
                    Instagram
                </a>
                <a href="https://twitter.com/Aditya88041" target="_blank" className="Twitter">
                    Twitter
                </a>
                <a href="https://www.linkedin.com/in/aditya-s-bb920b248/" target="_blank" className="LinkdIn">
                    LinkdIn
                </a>
            </div>
        </div>
    )
};
export default footer;