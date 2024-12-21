import React, { useState } from 'react';
import { Users, Home, PlusCircle, Edit2Icon, Trash2, LogOut } from 'lucide-react';
import { Link } from "react-router-dom";
import './Dash.css';

function Dash() {
  const [activePage, setActivePage] = useState('home'); 
  const [isAddPageVisible, setIsAddPageVisible] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', status: '', phone: '', position: '' });
  const [users, setUsers] = useState([]); 

  const handleAddItemClick = () => {
    setIsAddPageVisible(true); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', status: '', phone: '', position: '' });
    setIsAddPageVisible(false);
  };

  const handleDeleteItem = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'users':
        return (
          <>
            <div className="stats-cards">
              <div className="stat-card">
                <h2>{users.length}</h2>
                <p>Users</p>
              </div>
            </div>

            <navbar className="navbar2">
        <Link to="/">
          <img src="./home.png" alt="icon" className="icon" />
        </Link>
        <button className="buttonLan"> AR <img src="./globe.png" alt="icon" className="iconglo" /></button>
        <button className="buttonflag">
          <img src="./egypt.png" alt="icon" className="iconegy" />
        </button>
        <button className="buttonperson">
          <img src="./user.png" alt="icon" className="iconegy" />
        </button>
      </navbar>


            <div className="filters">
              <input type="text" placeholder="Search" className="search-input" />
              <div className="filter-buttons">
                <select className="filter-select">
                  <option>All</option>
                </select>
                <select className="filter-select">
                  <option>All Departments</option>
                </select>
              </div>
            </div>

            <div className="users-table">
              <table>
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>User</th>
                    <th>Status</th>
                    <th>Phone number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td><input type="checkbox" /></td>
                      <td>
                        <div className="user-cell">
                          <div className="user-avatar">
                            <img src={`https://source.unsplash.com/100x100/?portrait&${user.id}`} alt={user.name} />
                          </div>
                          {user.name}
                        </div>
                      </td>
                      <td>{user.status}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button onClick={() => handleDeleteItem(user.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );

      case 'addItem':
        return (
          <div className="add-item-page">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Status:
                <input
                  type="text"
                  name="status"
                  value={newUser.status}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={newUser.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Position:
                <input
                  type="text"
                  name="position"
                  value={newUser.position}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Add Item</button>
            </form>
            <button onClick={() => setIsAddPageVisible(false)}>Go Back</button>
          </div>
        );

      case 'home':
      default:
        return (
          <div className="welcome-section">
            <h2>Welcome to the Dashboard</h2>
            <p>Select an option from the sidebar</p>
          </div>
        );
    }
  };

  return (
    <div>
      <navbar className="navbar2">
        <img src="./home.png" alt="icon" className="icon" />
        <button className="buttonLan"> AR <img src="./globe.png" alt="icon" className="iconglo" /></button>
        <button className="buttonflag">
          <img src="./egypt.png" alt="icon" className="iconegy" />
        </button>
        <button className="buttonperson">
          <img src="./user.png" alt="icon" className="iconegy" />
        </button>
      </navbar>

      <div className="app-container">
        <aside className="sidebar">
          <div className="company-section">
            <div className="company-logo">C</div>
            <span>Company</span>
          </div>

          <nav className="nav-links">
          <Link to="/">
            <p className="nav-link" onClick={() => setActivePage('home')}><Home size={20} /> General</p></Link>
            <p className="nav-link" onClick={() => setActivePage('users')}><Users size={20} /> Users</p>
            <p onClick={() => setActivePage('addItem')} className="nav-link"><PlusCircle size={20} /> Add Item</p>
            <p className="nav-link"><Edit2Icon size={20} /> Edit Item</p>
            <p className="nav-link" onClick={() => setUsers([])}><Trash2 size={20} /> Delete All Items</p>
          </nav>

          <div className="sign-out">
            <p href="#" className="nav-link"><LogOut size={20} /> Sign out</p>
          </div>
        </aside>

        <main className="main-content">
          {renderPageContent()}
        </main>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-links">
            <a href="#">Corporate</a>
            <a href="#">Careers</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
        <hr className="divider1" />
        <div className="footer-middle">
          <div className="footer-section">
            <h3>Restaurants</h3>
            <ul>
              <li><a href="#">BreakOut</a></li>
              <li><a href="#">Gallab</a></li>
              <li><a href="#">TimeOut</a></li>
              <li><a href="#">TamrHena</a></li>
              <li><a href="#">Abo3of</a></li>
              <li><a href="#">More Restaurants...</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Popular Cuisines</h3>
            <ul>
              <li><a href="#">Pasta</a></li>
              <li><a href="#">Egyption</a></li>
              <li><a href="#">Sandwiches</a></li>
              <li><a href="#">Chkien</a></li>
              <li><a href="#">Pizza</a></li>
              <li><a href="#">More Cuisines...</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>The most famous places</h3>
            <ul>
              <li><a href="#">Faculty of Science</a></li>
              <li><a href="#">Faculty of literature</a></li>
              <li><a href="#">Media College</a></li>
              <li><a href="#">College of Commerce</a></li>
              <li><a href="#">Faculty of Rights</a></li>
              <li><a href="#">More Areas...</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow us on</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
            <hr className="divider" />
          </div>
        </div>
        <hr className="divider1" />
        <div className="footer-bottom">
          <p>©2024 Talabat.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Dash;
