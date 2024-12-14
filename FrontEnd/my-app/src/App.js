// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Signin from './pages/Signin/Signin';
import Signup from "./pages/Signup/Signup.jsx";
import Main from "./pages/Main/Main";
import Restaurant from "./pages/Restaurant/Restaurant.jsx";
import Details from "./pages/AddCart/Details.jsx"
import Drink from './pages/Drinks/Drink.jsx';
import Medicine from './pages/Medicine/Medicine.jsx';






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
    <Route path="/AddCart" element={<Details/>} />
    <Route path="/restaurant" element={<Restaurant/>}/>

    <Route path="/medicine" element={<Medicine/>}/>

    <Route path="/drink" element={<Drink/>}/>
    <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Main/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;