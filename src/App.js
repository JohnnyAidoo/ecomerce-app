import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage';
import Cart from './pages/cart';
import LoginPage from './pages/loginPage';
import AddPost from './pages/addPost';
import SignUPPage from './pages/signUP';



function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/mycarts' element={<Cart/>}/> 
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/addpost' element={<AddPost/>} />
        <Route path='/signup' element={<SignUPPage/>} />
      </Routes>
    </Router>

    );
}

export default App;
