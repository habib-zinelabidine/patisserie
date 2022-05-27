import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models'
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom";
import Shop from './components/Shop';
import Delivery from './pages/Delivery'
import Paiement from './pages/Paiement';
import {CartProvider} from './context/CartContext'
import Login from './pages/Login';
import Register from './pages/Register';
import {ContextProvider} from './context/UserContext'


function App() {
  return (
    <>
    <ContextProvider>
    <div className="App"> 
    <CartProvider>

    <Router>
          
          <Routes>
            <Route exact path="/" element ={<Login/>} />
            <Route exact path="/register" element ={<Register/>} />
            <Route exact path="/home" element ={<Home/>} />
            <Route exact path="/models" element ={<Models/>}/>
            <Route exact path="/about"element ={<About/>} />
            <Route exact path="/contact" element ={<Contact/>} />
            <Route exact path="/Shop" element ={<Shop/>} />
            <Route exact path="/payment" element ={<Paiement/>} />
            <Route exact path="/delivery" element ={<Delivery/>} />
          </Routes>
          <Footer/>
          
    </Router>

    </CartProvider> 
    
    
    </div>
    </ContextProvider>
    </>
  );
}

export default App;
