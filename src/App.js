import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from './pages/homepage';
import Cart from './pages/cart';
import LoginPage from './pages/loginPage';
import AddPost from './pages/addPost';
import SignUPPage from './pages/signUP';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';




function App() {
  const [auth, setauth] = useState(false)
//  const [token, setToken] = useState('')
  const navigate = useNavigate()


  const checkauth = (data) => {
    setauth(data)
  }
  useEffect(()=>{
    localStorage.getItem('token')
  //  console.log(jwtDecode(localStorage.getItem('token')))
  })


  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage Auth={auth}/>}/>
      <Route path='/mycarts' element={<Cart/>}/> 
      <Route path='/auth/login' element={<LoginPage checkauth={checkauth}/>} />
      <Route path='/addpost' element={<AddPost/>} />
      <Route path='/auth/signup' element={<SignUPPage />} />
    </Routes>
    </>

    );
}

export default App;
