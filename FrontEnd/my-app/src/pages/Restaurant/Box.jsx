import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Box.css";

const Box = () => {
  const [restaurants, setRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/restaurants');
        const data = await response.json();
        setRestaurant(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-box-container">
      {restaurants.map((restaurant) => (
        <div key={restaurant._id} className="card">  
          <img src={restaurant.logo} alt="Restaurant Logo" className="card-img-top" />
          <h2 className="card-title">{restaurant.title}</h2>
          <p className="card-text">{restaurant.description}</p>
          <Link to={`/restaurant/menu`} className="btn btn-primary">More Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Box;
