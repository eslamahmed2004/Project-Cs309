import React, { useState } from 'react';
import { Search, ShoppingBag, Star, Info, Menu as MenuIcon } from 'lucide-react';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";



const styles = {
  header: {
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logo: {
    color: '#ff4400',
    fontSize: '2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr 350px',
    gap: '2rem',
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  categories: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  menuItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  cart: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#ff4400',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  categoryItem: {
    padding: '0.5rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  price: {
    color: '#ff4400',
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#999',
    marginRight: '0.5rem',
  },
};



const menuItems = [
  {
    id: 1,
    name: 'Share Combo Single',
    description: '1 Single beef or chicken sandwich + 1 single beef burger + Drink + medium fries',
    price: 185.00,
    originalPrice: 279.00,
  },
  {
    id: 2,
    name: 'Zinger Supreme Combo',
    description: 'Zinger Supreme Sandwich + Combo (Fries + Drink)',
    price: 130.00,
    originalPrice: 184.00,
  },
  {
    id: 3,
    name: 'Boom Box Single',
    description: 'Single Box with 1 single beef burger + chicken piece + medium coleslaw + Drink + 1 cup of rice',
    price: 145.00,
    originalPrice: 239.00,
  },
  {
    id: 4,
    name: 'Medium Coleslaw',
    // description: 'Single Box with 1 single beef burger + chicken piece + medium coleslaw + Drink + 1 cup of rice',
    price: 20.00,
    originalPrice: 35.00,
  },
  {
    id: 5,
    name: 'Duetto 1 (6 Pieces)',
    description: '6 Pieces of Chicken + 2 Medium Slaw + 2 Bread',
    price: 200.00,
    originalPrice: 350.00,
  },
  {
    id: 6,
    name: 'Hormone El Sa3ada',
    description: '2 Chicken Pcs+ Rice + Coleslaw Bread + Drink',
    price: 145.00,
    originalPrice: 239.00,
  },
  {
    id: 7,
    name: 'Share Combo Single',
    description: '1 Single beef or chicken sandwich + 1 single beef burger + Drink + medium fries',
    price: 185.00,
    originalPrice: 279.00,
    category: 'Combos',
  },
  {
    id: 8,
    name: 'Zinger Supreme Combo',
    description: 'Zinger Supreme Sandwich + Combo (Fries + Drink)',
    price: 130.00,
    originalPrice: 184.00,
    category: 'Combos',
  },
  {
    id: 9,
    name: 'Boom Box Single',
    description: 'Single Box with 1 single beef burger + chicken piece + medium coleslaw + Drink + 1 cup of rice',
    price: 145.00,
    originalPrice: 239.00,
    category: 'Boxes',
  },
  {
    id: 10,
    name: 'Classic Cheeseburger',
    description: 'Beef patty, cheddar cheese, lettuce, tomato, onions, and special sauce',
    price: 85.00,
    originalPrice: 110.00,
    category: 'Burgers',
  },
  {
    id: 11,
    name: 'Chicken Wings (8 pcs)',
    description: 'Crispy chicken wings with choice of BBQ, Buffalo, or Garlic Parmesan sauce',
    price: 120.00,
    originalPrice: 150.00,
    category: 'Appetizers',
  },
  {
    id: 12,
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce, parmesan cheese, croutons, and caesar dressing',
    price: 75.00,
    originalPrice: 95.00,
    category: 'Salads',
  },
  {
    id: 13,
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese sauce, bacon bits, and green onions',
    price: 65.00,
    originalPrice: 85.00,
    category: 'Sides',
  },
  {
    id: 14,
    name: 'Chocolate Milkshake',
    description: 'Rich and creamy chocolate milkshake topped with whipped cream',
    price: 55.00,
    originalPrice: 70.00,
    category: 'Beverages',
  },
  {
    id: 15,
    name: 'Family Feast',
    description: '2 large pizzas + 2 sides + 4 drinks + dessert',
    price: 399.00,
    originalPrice: 550.00,
    category: 'Family Meals',
  },
  {
    id: 16,
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with chocolate sauce, nuts, and cherry on top',
    price: 45.00,
    originalPrice: 60.00,
    category: 'Desserts',
  }
 
];

const categories = [
  'Picks for you',
  'Discounts',
  'Up To 50%',
  'Up To 40%',
  'Family Meals',
  'Sandwiches',
  'Appetizers',
  'Salads',
  'Beverages',
];

function Menu() {
  const [cart, setCart] = useState([]);

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* <navbar className="navbar2">
                <Link to="/">
                <img src="./home.png" alt="icon"  className="icon"/>   </Link>
                <button className="buttonLan"> AR <img src="C:\Project-CS309\FrontEnd\my-app\public\globe.pngg" alt="icon" className="iconglo"/></button>             <button className="buttonflag"> <img src="./egypt.png" alt="icon" className="iconegy"/>   </button>
             <button className="buttonperson"> <Link to="/ProfileData"> <img src="./user.png" alt="icon" className="iconegy"/> </Link>  </button>
            </navbar> */}
           
      <header style={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={styles.logo}>TalabatK</a>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Star />
            <ShoppingBag />
          </div>
        </div>
      </header>

      <div style={styles.mainContent}>
        {/* Categories */}
        <div style={styles.categories}>
          <h2 style={{ marginBottom: '1rem' }}>Categories</h2>
          {categories.map((category) => (
            <div key={category} style={styles.categoryItem}>
              {category}
            </div>
          ))}
        </div>

        {/* Menu Items */}
        <div>
          <div style={styles.searchBar}>
            <Search size={20} style={{ marginRight: '0.5rem' }} />
            <input
              type="text"
              placeholder="Search menu items..."
              style={{
                border: 'none',
                background: 'none',
                outline: 'none',
                width: '100%',
              }}
            />
          </div>
          <div><h2>Picks for you</h2></div>
          {menuItems.map((item) => (
            <div key={item.id} style={styles.menuItem}>
                
              <div>
                <h3>{item.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.description}</p>
                <div style={{ marginTop: '0.5rem' }}>
                  <span style={styles.originalPrice}>EGP {item.originalPrice.toFixed()}</span>
                  <span style={styles.price}>EGP {item.price.toFixed(2)}</span>
                </div>
              </div>
              <button style={styles.button}>Add</button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div style={styles.cart}>
          <h2 style={{ marginBottom: '1rem' }}>Your Cart</h2>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#666' }}>
              <ShoppingBag size={48} style={{ margin: '1rem auto' }} />
              <p>There are no items in your cart</p>
            </div>
          ) : (
            <div>Cart items will appear here</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;