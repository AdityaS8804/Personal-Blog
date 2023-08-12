import logo from './logo.svg';
import './App.css';
import Nav from "./components/navbar.jsx";
import AboutMe from "./components/aboutme.jsx";
import Post from "./components/post.jsx";
import Footer from './components/footer.jsx'
function App() {
  const baseURL = ""
  return (
    <section className="hero">
      <Nav baseURL={baseURL} endpoint="" />
      <div className="line" />
      <AboutMe logo={logo} baseURL={baseURL} endpoint="" />
      <div className="line2" />
      <Post logo={logo} baseURL={baseURL} endpoint="" />
      <Post logo={logo} baseURL={baseURL} endpoint="" />
      <Post logo={logo} baseURL={baseURL} endpoint="" />
      <Footer baseURL={baseURL} endpoint="" />
    </section>
  );
}

export default App;
