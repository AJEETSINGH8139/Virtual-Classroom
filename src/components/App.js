import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        
        <Route exact path="/" element={<Home />} />

        <Route exact path="/home" element={<Home />} />
         
        <Route exact path="/about" element={<About />} />
          
        
      </Routes>
    </Router>  
    </>
  );
}

export default App;
