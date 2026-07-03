import Header from 'Components/Header';
import Home from 'Pages/Home';
import TechStack from 'Pages/TechStack';
import Career from 'Pages/Career';
import Projects from 'Pages/Projects';
import About from 'Pages/About';
import Contact from 'Pages/Contact';
import Ghost from 'Pages/ghost';
import Footer from 'Components/Footer';

const App = () => {
  return (
    <div className="dark:bg-gray-900">
      <header>
        <Header />
      </header>

      <main>
        <Home />
        <TechStack />
        <About />
        <Career />
        <Ghost />
        <Projects />
        <Contact />
      </main>

      <footer className="xl:max-w-[1200px] lg:max-w-[1100px] max-w-[1040px] md:m-auto mr-6 md:px-20 pb-2 dark:bg-gray-900">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
