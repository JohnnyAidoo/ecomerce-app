
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/productDetail';

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:id' element={<Detail />} />
    </Routes>
    </>
    );
}

export default App;
