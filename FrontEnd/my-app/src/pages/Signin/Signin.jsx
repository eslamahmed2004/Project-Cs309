import React, { useState } from "react";
import { useForm } from "react-hook-form"; 
import { Link,useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      navigate("/")
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        // محاولة الحصول على التفاصيل من استجابة الخطأ
        const errorData = await response.json(); // أو response.text() في حالة عدم وجود JSON
        console.error('Error response:', errorData);
        throw new Error(errorData.message || 'Login Failed'); // في حال كانت هناك رسالة خطأ محددة
      }
  
      const data = await response.json();
      setMessage('Login Successful!');
      console.log('Response:', data);
    } catch (error) {
      // طباعة رسالة الخطأ التي تم استلامها
      setMessage(error.message);
      console.error('Error:', error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div style={styles.background}>
        <div style={styles.overlay}></div>
      </div>

      <div style={styles.container}>
        <h2 style={styles.heading}>Sign In</h2>
        <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p style={styles.error}>{errors.email.message}</p>}
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              style={styles.input}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p style={styles.error}>{errors.password.message}</p>}
          </div>

          <div style={styles.field}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => setShowPassword(e.target.checked)}
              />{" "}
              Show Password
            </label>

            <div>
              <Link style={{ textDecoration: "none" }} onClick={openPopup}>
                <h4 style={styles.loan}>Forget My password</h4>
              </Link>

              {isOpen && (
                <div style={styles.overlay2}>
                  <div style={styles.popup}>
                    <header style={styles.header}>
                      <h1 style={styles.title}>Forgotten Password</h1>
                      <button style={styles.closeButton2} onClick={closePopup}>✖</button>
                    </header>
                    <p style={styles.content}>
                      Enter your email address and we’ll send a link to change your password
                    </p>
                    <div style={styles.field}>
                      <label style={styles.label}>Email</label>
                      <input
                        type="email"
                        style={styles.fieldPop}
                        {...register("email", { required: "Email is required" })}
                      />
                      {errors.email && <p style={styles.error}>{errors.email.message}</p>}
                    </div>
                    <button onClick={() => alert("Send to email")} style={styles.closeButton}>
                      Reset my password
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <button type="submit" style={styles.button}>
              Sign In
            </button>
          </div>
        </form>

        <p style={styles.signupText}>
          Don't have an account? <span style={styles.signupLink}>
            <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>Create an account</Link>
          </span>
        </p>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 My Website. All rights reserved.</p>
        <p style={styles.footerText}>
          <a href="/privacy-policy" style={styles.link}>Privacy Policy</a> |
          <a href="/terms" style={styles.link}>Terms of Service</a>
        </p>
        <div style={styles.socialIcons}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" style={styles.icon}></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" style={styles.icon}></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" style={styles.icon}></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube" style={styles.icon}></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    maxWidth: "600px",
    marginTop: "350px",
    marginLeft: "950px",
    padding: "20px",
    border: "1px solid #c14400",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 250, 240, 0.6)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: "1",
  },
  heading: {
    marginBottom: "20px",
    color: "#c14400",
    fontSize: "30px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  field: {
    textAlign: "left",
    color: "#c14400",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    color: "#c14400",
  },
  input: {
    width: "590px",
    padding: "10px",
    border: "1px solid #c14400",
    borderRadius: "4px",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  button: {
    backgroundColor: "#c14400",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    marginTop: "20px",
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('/wallpaper-signin.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    zIndex: "-1",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  footerText: {
    fontSize: "14px",
    margin: "5px 0",
  },
  link: {
    color: "#ff7f00",
    textDecoration: "none",
    margin: "10px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  icon: {
    fontSize: "24px",
    color: "#ffffff",
    margin: "0 10px",
    transition: "color 0.3s",
    cursor: "pointer",
  },
  iconHover: {
    color: "#fff",
  },

  signupText: {
    marginTop: "20px",
    color: "#c14400",
    textAlign: "center",
    fontWeight: "bold",
  },
  signupLink: {
    color: "#c14400",
  },
  loan:{
    color:"#c14400",
    textDecoration:"none",
  },
  openButton: {
    padding: "10px 20px",
    backgroundColor: "rgba(255, 250, 240, 0.6)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  overlay2: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
  },
  popup: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    width: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#c14400",
  },
  closeButton2: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#c14400",
  },
  content: {
    marginTop: "20px",
    color: "#555",
    fontSize: "14px",
  },
  fieldPop: {
    width: "250px",
    padding: "10px",
    marginTop: "10px",
    border: "1px solid #c14400",
    borderRadius: "4px",
  },
  closeButton: {
    padding: "10px 20px",
    backgroundColor: "#c14400",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    marginTop: "20px",
  }
};

export default SignIn;