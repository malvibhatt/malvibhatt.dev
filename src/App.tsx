import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
