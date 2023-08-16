import React from "react";
import './footer.css';

function footer({ emailID, igURL, twitterURL, linkdinURL }) {
    return (
        <div className="footer">
            <a href={`mailto:${emailID}`} className="connect">
                Lets Connect
            </a>
            <div className="socials">
                <a href={igURL} target="_blank" className="insta">
                    Instagram
                </a>
                <a href={twitterURL} target="_blank" className="Twitter">
                    Twitter
                </a>
                <a href={linkdinURL} target="_blank" className="LinkdIn">
                    LinkdIn
                </a>
            </div>
        </div>
    )
};
export default footer;