import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import Tour from "./components/tour/Tour";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tour />
      <Footer />
    </>
  );
}

export default App;
