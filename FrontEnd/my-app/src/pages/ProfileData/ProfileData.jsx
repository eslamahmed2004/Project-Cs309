import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProfileData.css";
import Footer from "./Footer";
const ProfileData = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [activeSection, setActiveSection] = useState("profile"); // لتحديد القسم النشط (Profile, Addresses, Orders)
    useEffect(() => {
        setTimeout(() => {
            setUser({
                name: "John Doe",
                email: "john.doe@example.com",
                phone: "123-456-7890",
                address: "123 Main St, Anytown, USA",
                orders: ["Order #1234", "Order #5678", "Order #91011"],
                addresses: ["123 Main St, Anytown, USA", "456 Elm St, AnotherTown"],
            });
            setLoading(false);
        }, 1000);
    }, []);
    const handleEdit = () => {
        setIsEditing(true);
        setEditedUser({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
        });
    };
    const handleSave = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/user/1", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editedUser),
            });
            const data = await response.json();
            setUser(data);
            setIsEditing(false);
        } catch (error) {
            setError(error);
        }
    };
    const handleCancel = () => {
        setIsEditing(false);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSectionChange = (section) => {
        setActiveSection(section); // تغيير القسم النشط
    };
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <navbar className="navbar2">
                <Link to="/">
                    <img src="./home.png" alt="icon" className="icon" />
                </Link>
                <button className="buttonLan">
                    AR <img src="./globe.png" alt="icon" className="iconglo" />
                </button>
                <button className="buttonflag">
                    <img src="./egypt.png" alt="icon" className="iconegy" />
                </button>
            </navbar>
            <div className="profile-page">
                <div className="profile-container">
                    {activeSection === "profile" && (
                        <div>
                            {isEditing ? (
                                <div>
                                    <h2>Edit Profile</h2>
                                    <label>
                                        Name:
                                        <input
                                            type="text"
                                            name="name"
                                            value={editedUser.name}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                    <br />
                                    <label>
                                        Email:
                                        <input
                                            type="email"
                                            name="email"
                                            value={editedUser.email}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                    <br />
                                    <label>
                                        Phone:
                                        <input
                                            type="text"
                                            name="phone"
                                            value={editedUser.phone}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                    <br />
                                    <label>
                                        Address:
                                        <input
                                            type="text"
                                            name="address"
                                            value={editedUser.address}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                    <br />
                                    <button onClick={handleSave}>Save</button>
                                    <button onClick={handleCancel}>Cancel</button>
                                </div>
                            ) : (
                                <div>
                                    <h2>Profile Data</h2>
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Phone:</strong> {user.phone}</p>
                                    <p><strong>Address:</strong> {user.address}</p>
                                    <button onClick={handleEdit}>Edit</button>
                                </div>
                            )}
                        </div>
                    )}
                    {activeSection === "addresses" && (
                        <div>
                            <h3>Previous Addresses</h3>
                            <ul>
                                {user.addresses.map((address, index) => (
                                    <li key={index}>{address}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeSection === "orders" && (
                        <div>
                            <h3>Previous Orders</h3>
                            <ul>
                                {user.orders.map((order, index) => (
                                    <li key={index}>{order}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="sidebar">
                    <button onClick={() => handleSectionChange("profile")}>
                        Profile Data
                    </button>
                    <button onClick={() => handleSectionChange("addresses")}>
                        Previous Addresses
                    </button>
                    <button onClick={() => handleSectionChange("orders")}>
                        Previous Orders
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ProfileData;