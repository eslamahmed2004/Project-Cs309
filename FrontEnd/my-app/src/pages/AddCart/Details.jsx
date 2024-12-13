import React from "react";
import { Link } from "react-router-dom";
import "./Details.css"
import Footer from "./Footer";

const OrderDetails = ({ order }) => {
    return (
       <div>
            <navbar className="navbar2">
                <Link to="/">
                <img src="./home.png" alt="icon"  className="icon"/>   </Link>
             <button className="buttonLan"> AR <img src="./globe.png" alt="icon" className="iconglo"/></button>
             <button className="buttonflag"> <img src="./egypt.png" alt="icon" className="iconegy"/>   </button>
             <button className="buttonperson"> <img src="./user.png" alt="icon" className="iconegy"/>   </button>
            </navbar>        
        
        <div className="container">
            <h2>تفاصيل الطلب</h2>
            <div className="order-details">
                <p>رقم الطلب: {order.orderNumber}</p>
                <p>التاريخ: {order.date}</p>
                <p>المنتجات:</p>
                <ul>
                    {order.items.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.quantity} × {item.price} {item.currency}
                        </li>
                    ))}
                </ul>
                <p>المجموع:{order.totalAmount} {order.currency}</p>
            </div>
            <Link to="/orders">عرض المزيد من الطلبات</Link>
            </div>
            <Footer/>
        </div>
    );
};

export default OrderDetails;
