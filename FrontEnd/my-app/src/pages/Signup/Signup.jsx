import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);  // إدارة حالة التحميل

  const password = watch("password");

  const onSubmit = async (formData) => {
    setLoading(true);  // تفعيل التحميل عند تقديم النموذج
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Sign Up Failed');
      }

      const data = await response.json();
      setMessage('Sign Up Successful!');
      console.log('Response:', data);
    } catch (error) {
      setMessage(error.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);  // إيقاف حالة التحميل بعد إتمام العملية
    }
  };

  return (
    <div>
      <div style={styles.background}>
        <img src="/wallpaper.jpg" alt="Background" style={styles.responsiveImage} />
      </div>

      <div style={styles.background}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Sign Up</h2>
          
          {message && <div style={styles.message}>{message}</div>}  {/* عرض رسالة النجاح أو الخطأ */}

          <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div style={styles.field}>
              <label style={styles.label}>First Name</label>
              <input
                type="text"
                style={styles.input}
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && (
                <p style={styles.error}>{errors.firstName.message}</p>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Last Name</label>
              <input
                type="text"
                style={styles.input}
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p style={styles.error}>{errors.lastName.message}</p>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                style={styles.input}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p style={styles.error}>{errors.email.message}</p>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Phone Number</label>
              <input
                type="tel"
                style={styles.input}
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Phone number must be exactly 11 digits",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p style={styles.error}>{errors.phoneNumber.message}</p>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                style={styles.input}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              {errors.password && (
                <p style={styles.error}>{errors.password.message}</p>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                style={styles.input}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p style={styles.error}>{errors.confirmPassword.message}</p>
              )}
            </div>

            <div style={styles.field}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setShowPassword(e.target.checked)}
                />{" "}
                Show Password
              </label>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Country</label>
              <select
                style={styles.input}
                {...register("country", { required: "Country is required" })}
              >
                <option value=""></option>
                <option value="Egypt">Egypt</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
              </select>
              {errors.country && (
                <p style={styles.error}>{errors.country.message}</p>
              )}
            </div>

            <button style={styles.button} type="submit" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <div style={styles.SignUpText}>
            Already have an account?{" "}
            <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
              Signin
            </Link>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 My Website. All rights reserved.</p>
        <p style={styles.footerText}>
          <a href="/privacy-policy" style={styles.link}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" style={styles.link}>
            Terms of Service
          </a>
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
    maxWidth: "840px",
    margin: "100px auto 100px auto",
    marginLeft: "1200px",
    padding: "20px",
    border: "1px solid #c14400",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 250, 240, 0.6)", // Slightly transparent background
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginBottom: "20px",
    color: "#c14400",
    fontSize: "30px",
    fontWeight: "bold",
  },
  form: {
    width: "790px",
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
    width: "770px",
    padding: "10px",
    border: "1px solid #c14400",
    borderRadius: "4px",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.6)", // شفاف مع خلفية بيضاء
    fontSize: "16px", // تكبير الخط

  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  button: {
    backgroundColor: "#c14400",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    marginTop: "30px",
    marginBottom: "0px",
  },
  
 
 
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 152, 0, 0)", // خلفية برتقالية شفافة
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    margin: "0 10px",
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
  responsiveImage: {
    width: "100%", // اجعل العرض 100% من العنصر الحاوي
    height: "auto", // اجعل الارتفاع يتكيف تلقائيًا مع العرض للحفاظ على النسب
    maxHeight: "100vh", // حد أقصى للارتفاع ليكون داخل الشاشة
    objectFit: "cover", // الحفاظ على ملء الصورة مع قطع الحواف إذا لزم الأمر
    display: "block",
  },
  SignUpText: {
    color: "#c14400",
    fontWeight: "bold",
    marginTop: "20px",
    textDecoration: "none"
  },
};

export default SignUp;
