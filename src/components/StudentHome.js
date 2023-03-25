import Navbar from './Navbar';
import Classroom from './Classroom';

// import './StudentHome.css';

function StudentHome() {
  return (
    <>
    <Navbar />
    <Classroom />
    {/* <Router>
      <Navbar />
      <Routes>
        
        <Route exact path="/" element={<Home />} />

        <Route exact path="/Classroom" element={<Classroom />} />
         
        <Route exact path="/about" element={<About />} />
          
      </Routes>
    </Router>   */}
    </>
  );
}

export default StudentHome;
