import {useContext} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import './App.css';

export default function App() {

  const { user} = useContext(AuthContext);

  return (  
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to="/login" /> } />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>} />
        </Routes>
      </Router>  
  );
}


