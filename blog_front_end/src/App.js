import logo from './logo.svg';
import './App.css';
import Nav from "./components/navbar.jsx";
import AboutMe from "./components/aboutme.jsx";
import Post from "./components/post.jsx";
import Footer from './components/footer.jsx'
import Home from "./components/home.jsx"
import P from "./components/p.jsx"
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
function App() {
  const [posts, setPosts] = useState([])
  //const baseURL = "https://adityas8804.github.io/Data/"
  const baseURL = "http://127.0.0.1:8000/api/"
  const baseURL2 = "http://127.0.0.1:8000/"
  const [content, setContent] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [emailID, setEmailID] = useState('');
  const [igURL, setIgURL] = useState('');
  const [twitterURL, setTwitterURL] = useState('');
  const [linkdinURL, setLinkldinURL] = useState('');
  const [id, setId] = useState([])
  useEffect(() => {
    fetch(baseURL2 + "api/posts/").then(data => data.json()).then(d => {
      setPosts((p) => {
        let newPosts = []
        for (const key in d) {
          //console.log(`{ ${key}: ${d[key].heading} }`)
          newPosts.push(
            d[key])
        }
        return p.concat(newPosts)
      })
      setId((_) => {
        let i = []
        for (const j in d) {
          i.push(j)
        }
        return i
      })
    })
    fetch(baseURL + 'aboutme/').then(data => data.json()).then(d => {
      setContent((_) => d.body)
      setEmailID((_) => d.email_id)
      setIgURL((_) => d.ig_url)
      setTwitterURL((_) => d.twitterURL)
      setLinkldinURL((_) => d.linkdinURL)
      setProfilePic((_) => (baseURL.split('/').filter((a, b) => (a !== 'api' && (a !== '' || baseURL.split('/')[b - 1] === 'http:' || baseURL.split('/')[b - 1] === 'https:'))).join('/') + d.logo))
    }).catch((e) => {
      console.log(e)
    })
  }
    , [])

  return (
    <section className="hero">
      <Nav baseURL={baseURL} endpoint="" />
      <div className="line" />
      <Router>
        <Routes>
          <Route path="/" element={
            <Home logo={logo} baseURL={baseURL} content={content} profilePic={profilePic} posts={posts} baseURL2={baseURL2} id={id} />
          } />
          <Route path="" />
          <Route path="/1" element={<P />}>
          </Route>
        </Routes>
      </Router>
      <Footer emailID={emailID} igURL={igURL} twitterURL={twitterURL} linkdinURL={linkdinURL} />
    </section>
  );
}

export default App;
