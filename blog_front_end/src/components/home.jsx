import React from "react";
import AboutMe from "./aboutme";
import Post from "./post"
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
function Home({ logo, baseURL, content, profilePic, posts, baseURL2, id }) {
    return (
        <section>
            <AboutMe logo={logo} baseURL={baseURL} endpoint="aboutme/" content={content} profilePic={profilePic} />
            <div className="line2" />
            {

                posts.map((element, i) => {
                    return <Post logo={element.logo} baseURL={baseURL2} endpoint={"api/posts/" + element} heading={element.heading} subHeading={element[`sub - heading`]} date={element.date} tags={element.tags ? element.tags : []} id={id[i]} />

                })

            }
        </section>
    )
}
export default Home;


