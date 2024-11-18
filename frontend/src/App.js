import './App.css';
import Shop from './Pages/Shop.jsx';
import About from './Pages/About.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
