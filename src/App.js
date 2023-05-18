import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Profile } from './pages/profile/profile';
import { Cart } from './pages/cart/cart';
import { Shop1 } from './pages/shop/shop1';
import { Shop2 } from './pages/shop/shop2';
import { Shop3 } from './pages/shop/shop3';
import { Shop4 } from './pages/shop/shop4';
import { Shop5 } from './pages/shop/shop5';
import { Shop6 } from './pages/shop/shop6';
import { Home } from './pages/home/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/shop1' element={<Shop1 />} />
            <Route path='/shop2' element={<Shop2 />} />
            <Route path='/shop3' element={<Shop3 />} />
            <Route path='/shop4' element={<Shop4 />} />
            <Route path='/shop5' element={<Shop5 />} />
            <Route path='/shop6' element={<Shop6 />} />



          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
