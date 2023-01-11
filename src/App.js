import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from './pages/homepage';
import Cart from './pages/cart';
import LoginPage from './pages/loginPage';
import AddPost from './pages/addPost';
import SignUPPage from './pages/signUP';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Auth from './components/api';
import { render } from 'react-dom';




function App() {
  const [auth, setauth] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    auth ? navigate('/') : navigate('/login')
  },[auth])
  
  const checkauth = (data) =>{
    setauth(data)
    console.log(data)
  }


  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/mycarts' element={<Cart/>}/> 
      <Route path='/login' element={<LoginPage checkauth={checkauth}/>} />
      <Route path='/addpost' element={<AddPost/>} />
      <Route path='/signup' element={<SignUPPage/>} />
    </Routes>
    </>

    );
}

export default App;
