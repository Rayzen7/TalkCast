import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import ScrollToTop from '../components/ui/ScrollToTop'
import Form from '../components/login/Form';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
