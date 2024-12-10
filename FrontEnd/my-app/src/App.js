// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import SignUp from './pages/Signup/Sginup';
import Signin from './pages/Signin/Signin';
import Sginup from "./pages/Signup/Sginup.jsx";
// import Reset from "./pages/Reset-Pass/Reset.jsx";






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
      <Route path="/signup" element={<Sginup/>}/>
      </Routes>
      </Router>
      
      


    </div>
  );
}

export default App;