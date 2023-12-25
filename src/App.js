import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Techno from "./pages/Techno";
import Contact from "./pages/Contact";

import "./assets/style/App.scss"

function App() {
  return (
    <div className="my-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/techno" element={<Techno />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
