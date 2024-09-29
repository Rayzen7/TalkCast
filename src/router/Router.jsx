import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import ScrollToTop from '../components/ui/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
