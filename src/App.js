
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/productDetail';
import Category from './pages/category';
import Cart from './pages/cart';

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products/:id' element={<Detail />} />
      <Route path='/category/:name' element={<Category/>} />
    </Routes>
    </>
    );
}

export default App;
