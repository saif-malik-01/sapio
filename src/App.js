import {useContext,useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Token from './utils/expire';
import { AuthContext } from './context/AuthContext';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import './App.css';

export default function App() {

  const {user,dispatch} = useContext(AuthContext);

  useEffect(()=>{
    const user = Token.validate();
     if(!user) return;
     dispatch({ type: "LOGIN_SUCCESS", payload: user });
  },[dispatch])

  return (  
      <Router>
        <Routes>
          <Route path="/*" element={user ? <Home/> : <Navigate to="/login" /> } />
          <Route path="/login" element={user ? <Navigate to="/store" /> : <Login/>} />
          <Route path="/register" element={user ? <Navigate to="/store" /> : <Register/>} />
        </Routes>
      </Router>  
  );
}


