import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import WhoItsFor from "./components/WhoItsFor.jsx";
import Services from "./components/Services.jsx";
import Impact from "./components/Impact.jsx";
import Gallery from "./components/Gallery.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoItsFor />
        <Services />
        <Impact />
        <Gallery />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
