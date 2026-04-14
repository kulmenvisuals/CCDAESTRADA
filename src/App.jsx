import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import About from './pages/About';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamientos" element={<Treatments />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/por-que-nosotros" element={<WhyUs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
