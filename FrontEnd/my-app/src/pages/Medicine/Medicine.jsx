import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Box from "./BoxMed";
import"./Medicine.css"
import "./Footer.css"




const Medicine = ()=>{

    


    return(
        <div>
            <navbar className="navbar2">
                <Link to="/">
                <img src="./home.png" alt="icon"  className="icon"/>   </Link>
             <button className="buttonLan"> AR <img src="./globe.png" alt="icon" className="iconglo"/></button>
             <button className="buttonflag"> <img src="./egypt.png" alt="icon" className="iconegy"/>   </button>
             <button className="buttonperson"> <img src="./user.png" alt="icon" className="iconegy"/>   </button>
            </navbar>

            <section className="section"> 
            All Medicine
            </section>

            <div style={styles.searchContainer}><Link>
      <FaSearch style={styles.searchIcon} /></Link>
      <input
        type="text"
        placeholder="Search Medicine"
        style={styles.searchInput}
      />
    </div>
  
    <div >
   <Box/>
</div>
<footer class="footer">





  <div class="footer-top">
    <div class="footer-links">
      <a href="#">Corporate</a>
      <a href="#">Careers</a>
      <a href="#">Terms and Conditions</a>
      <a href="#">FAQ</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Contact Us</a>
      <a href="#">Sitemap</a>
    </div>
  </div>


  <hr class="divider1"/>


  <div class="footer-middle">
    
    <div class="footer-section">
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




    <div class="footer-section">
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





    <div class="footer-section">
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


    
    <div class="footer-section">
      <h3>Follow us on</h3>
      <div class="social-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin" ></i>
    </a>        
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter" ></i></a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook" ></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter" ></i>
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-youtube" ></i>
    </a>
      </div>

      <hr class="divider" />

    </div>





  </div>

  <hr class="divider1" />

<div className="support">
    
</div>

  <div class="footer-bottom">
    <p>©2024 Talabat.com</p>
    
        
  </div>




</footer>

  </div>
        
    )


}


const styles = {
    searchContainer: {
      position: "relative",
      marginTop: "100px",
      marginLeft: "1550px",
      width: "300px",
    },
    searchIcon: {
      position: "absolute",
      top: "50%",
      right: "-30px",
      transform: "translateY(-50%)",
      color: "#888",
      fontSize: "16px",
    },
    searchInput: {
      width: "100%",
      padding: "10px 10px 10px 35px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
  }

export default Medicine;