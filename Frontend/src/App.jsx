import React from 'react';
import Home from "./home/Home";
import Signup from './components/Signup';
import Course from "./components/Course";
import Contact from './components/Contact';
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
