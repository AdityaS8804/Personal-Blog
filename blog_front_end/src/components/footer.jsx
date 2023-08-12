import React from "react";
import './footer.css';

function footer(props) {
    const { baseURL, endpoint } = props
    return (
        <div className="footer">
            <button className="connect">
                Lets Connect
            </button>
            <div className="socials">
                <button className="insta">
                    Instagram
                </button>
                <button className="Twitter">
                    Twitter
                </button>
                <button className="LinkdIn">
                    LinkdIn
                </button>
            </div>
        </div>
    )
};
export default footer;