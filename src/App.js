import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Certificates from "./components/certificates";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
