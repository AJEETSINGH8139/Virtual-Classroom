
import StudentHome from './StudentHome';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Signin';

function App() {
  return (
    <>
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Home />} />

        <Route exact path="/studenthome" element={<StudentHome />} />
         
        <Route exact path="/about" element={<About />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/signin" element={<Signin />} />
        
        <Route exact path="/signup" element={<Signin />} />
          
      </Routes>
    </Router>  
    </>
  );
}

export default App;
