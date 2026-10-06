import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Citizens from "./components/Citizens";
import Managers from "./components/Managers";

export const App = () => {
  return (
    <div>
        <Header />
        <About />
        <Services />
        <Citizens />
        <Contact />
        <Managers />
        <Footer />
    </div>
  )
}

export default App
