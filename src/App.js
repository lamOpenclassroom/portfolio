import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Error from './components/Error';
import Sent from "./components/Sent";
import About from "./pages/About";
import Project from "./pages/Project";
import Techno from "./pages/Techno";
import Contact from "./pages/Contact";

import "./assets/style/app.scss"

function App() {
  return (
    <div className="my-app">
      <BrowserRouter>
        <Header />
        <main className='my-app-change'>
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/techno" element={<Techno />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:idDetail" element={<Detail />} />
            <Route path="/*" element={<Error/>} /> 
            <Route path='/sent' element={<Sent />} /> 
          </Routes> 
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
