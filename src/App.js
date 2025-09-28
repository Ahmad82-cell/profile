import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import NavBar from "./Components/Navbar";
import About from "./Page/AboutPage";
import CardPage from "./Page/CardPage";
import ConnectPage from "./Page/ConnectPage";
import HomePage from "./Page/HomePage";
import Footer from "./Components/Footer";
import SkillsPage from "./Page/Skillspage";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);


  return (
    <div style={{ background: "lineargradient( to bottom ,#F9FAFB, #E5E7EB)" }}>

      <NavBar />
      <HomePage />
      <About />
      <SkillsPage />
      <CardPage />
      <ConnectPage />
      <Footer />
    </div>
  );
}

export default App;
