import './App.css';
import Register from "./components/Register"
import { Routes, Route } from "react-router-dom"
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Navbar } from './components/commons/Navbar';
import Header from './components/commons/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='services' element={<Services />}></Route>
      </Routes>
    </div>
  );
}

export default App;
