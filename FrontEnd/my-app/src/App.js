// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Signin from './pages/Signin/Signin';
import Signup from "./pages/Signup/Signup.jsx";
import Main from "./pages/Main/Main";
import Detalis from "./pages/AddCart/Details.jsx";
import Restaurant from "./pages/Restaurant/Restaurant.jsx";
import Drink from './pages/Drinks/Drink.jsx';
import Medicine from './pages/Medicine/Medicine.jsx';
import ProfileData from './pages/ProfileData/ProfileData.jsx';
import Additem from './pages/Admin/Additem/Additem.jsx';
import Dash  from './pages/Admin/Dash/Dash.jsx';
import Menu from './pages/Restaurant/Menu.jsx';





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
    <Route path="/restaurant" element={<Restaurant/>}/>

    <Route path="/medicine" element={<Medicine/>}/>

    <Route path="/drink" element={<Drink/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/AddCart" element={<Detalis/>}/>
      <Route path="/ProfileData" element={<ProfileData/>}/>
      <Route path="/admin" element={<Dash/>}/>
      <Route path="/admin/add" element={<Additem/>}/>
      <Route path="/restaurant/menu" element={<Menu/>}/>


      </Routes>
      </Router>
    </div>
  );
}

export default App;