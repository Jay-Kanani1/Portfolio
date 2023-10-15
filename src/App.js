
import './App.css';
import About from './components/About';
import BackToTopBtn from './components/BackToTopBtn';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skill from './components/Skill';
import SocialLinks from './components/SocialLinks';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <BackToTopBtn />
      <SocialLinks />
    </div>
  );
}

export default App;
