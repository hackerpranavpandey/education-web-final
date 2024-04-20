import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header_Footer/Header';
import Home from './Component/Pages/Home';
import Books from './Component/Pages/Books';
import Community from './Component/Pages/Community';
import Courses from './Component/Pages/Courses';
import Footer from './Component/Header_Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books' element={<Books />}></Route>
        <Route path='/community' element={<Community />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

