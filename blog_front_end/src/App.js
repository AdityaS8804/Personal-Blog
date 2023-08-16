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
  const baseURL2 = "http://127.0.0.1:8000/"
  const [content, setContent] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [emailID, setEmailID] = useState('');
  const [igURL, setIgURL] = useState('');
  const [twitterURL, setTwitterURL] = useState('');
  const [linkdinURL, setLinkldinURL] = useState('');
  useEffect(() => {
    fetch(baseURL2 + "api/posts/").then(data => data.json()).then(d => {
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
      <AboutMe logo={logo} baseURL={baseURL} endpoint="aboutme/" content={content} profilePic={profilePic} />
      <div className="line2" />
      {
        posts.map((element) => {
          return <Post logo={element.logo} baseURL={baseURL2} endpoint={"api/posts/" + element} heading={element.heading} subHeading={element[`sub - heading`]} date={element.date} tags={element.tags ? element.tags : []} />
        })
      }
      <Footer emailID={emailID} igURL={igURL} twitterURL={twitterURL} linkdinURL={linkdinURL} />
    </section>
  );
}

export default App;
