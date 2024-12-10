// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Signin from './pages/Signin/Signin';
import Signup from "./pages/Signup/Sginup.jsx";
import Main from "./pages/Main/Main";






import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';



function App() {
  return (
    <div className="App">

    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Main/>}/>

      </Routes>
      </Router>
      
      


    </div>
  );
}

export default App;