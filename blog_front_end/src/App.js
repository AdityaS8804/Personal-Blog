import logo from './logo.svg';
import './App.css';
import Nav from "./components/navbar.jsx";
import AboutMe from "./components/aboutme.jsx";
import Post from "./components/post.jsx";
import Footer from './components/footer.jsx'
import { useState, useEffect } from 'react';
function App() {
  const [posts, setPosts] = useState([])
  //const baseURL = "https://adityas8804.github.io/Data/"
  const baseURL = "http://127.0.0.1:8000/api/"
  /*
  useEffect(() => {
    fetch(baseURL + "posts.json").then(data => data.json()).then(d => {
      setPosts((p) => {
        let newPosts = []
        for (const key in d) {
          //console.log(`{ ${key}: ${d[key].heading} }`)
          newPosts.push(
            d[key])
        }
        console.log(p.concat(newPosts))
        return p.concat(newPosts)
      })
    })
  }
    , [])
    */

  return (
    <section className="hero">
      <Nav baseURL={baseURL} endpoint="" />
      <div className="line" />
      <AboutMe logo={logo} baseURL={baseURL} endpoint="aboutme/" />
      <div className="line2" />
      {
        posts.map((element) => {
          return <Post logo={element.MainPic} baseURL={baseURL} endpoint={"posts/" + element} heading={element.heading} subHeading={element[`sub - heading`]} date={element.date} tags={element.tags ? element.tags : []} />
        })
      }
      <Footer baseURL={baseURL} endpoint="" />
    </section>
  );
}

export default App;
