import React from "react"
import './post.css';

function post(props) {
    const { logo, baseURL, endpoint } = props;
    return (
        <div className="complete">
            <div className="post">
                <div className="content">
                    <div className="Heading">Heading</div>
                    <div className="subHeading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </div>
                    <div className="date">08/08/2023</div>
                    <div className="Tags">
                        <div className="tag">Tag</div>
                        <div className="tag">Tag</div>
                    </div>
                </div>
                <div className="postPic">
                    <img src={logo} className="pic" />
                </div>

            </div>
            <div className="line"></div>
        </div>
    );
}

export default post;
