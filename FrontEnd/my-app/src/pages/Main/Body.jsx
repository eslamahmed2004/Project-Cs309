import React from "react";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className="container" style={styles.container}>
      <Link to="/restaurant" style={styles.Link}>
        <div style={styles.box}>
          <img src="/wallpaperflare.com_wallpaper(3).jpg" alt="icon" style={styles.icon} />
          <div style={styles.overlay}>
            <h1 style={styles.H1}>Order Food</h1>
            <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
            <p style={styles.Body}>
              توصيل مجاني وعروض حصرية وأكثر لدى شركائنا من المطاعم.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/drink" style={styles.Link}>
        <div style={styles.box}>
          <img src="/download.jpeg" alt="icon" style={styles.icon} />
          <div style={styles.overlay}>
            <h1 style={styles.H1}>Order Drinks</h1>
            <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
            <p style={styles.Body}>
              لا تضيع وقتك في الانتظار. نوصلك لك الطعام في أسرع وقت.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/medicine" style={styles.Link}>
        <div style={styles.box}>
          <img src="/wallpaperflare.com_wallpaper(5).jpg" alt="icon" style={styles.icon} />
          <div style={styles.overlay}>
            <h1 style={styles.H1}>Order Medicine</h1>
            <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
            <p style={styles.Body}>
              نوصلك لك الدواء في أسرع وقت.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    width:"900px",
    flexWrap: "nowrap",
    alignItems: "stretch", // نفس الارتفاع
    gap: "20px", // المسافة بين المربعات
    margin: "60px auto",
    padding: "0 10px",
    whiteSpace: "nowrap", // عدم الانتقال لسطر جديد
    scrollSnapType: "x mandatory", // تحسين التمرير السلس
  },
  box: {
    // flex: "0 0 300px", // عرض ثابت لكل مربع
    maxWidth: "300px",
    minHeight: "400px", // ارتفاع ثابت
    backgroundColor: "#ff7e5f",
    color: "#fff",
    // display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    scrollSnapAlign: "start", // تحسين محاذاة المربعات عند التمرير
  
  },
  icon: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "0",
  },
  orderIcon: {
    position: "absolute",
    bottom: "30px",
    right: "20px",
    width: "100px",
    height: "80px",
    zIndex: "1",
  },
  H1: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "rgba(0,0,0,0.8)",
    margin: "0",
    zIndex: "0",
  },
  Body: {
    fontSize: "40px",
    color: "rgba(255,255,255,0.8)",
    zIndex: "0",
    marginTop: "10px",
  },
  Link: {
    textDecoration: "none",
  },
  // استجابة للشاشات الصغيرة
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column", // ترتيب العناصر عموديًا في الشاشات الصغيرة
      gap: "15px", // تقليل المسافة بين المربعات
    },
    box: {
      width: "100%", // جعل المربعات تأخذ عرض كامل الشاشة في الشاشات الصغيرة
      height: "500px", // تقليل ارتفاع المربعات في الشاشات الصغيرة
    },
    overlay: {
      padding: "15px", // تقليل الحشو في الشاشات الصغيرة
    },
    H1: {
      fontSize: "1.8rem", // تقليل حجم الخط في الشاشات الصغيرة
    },
    Body: {
      fontSize: "1.1rem", // تقليل حجم الخط في الشاشات الصغيرة
    },
    orderIcon: {
      width: "60px", // تقليل حجم الأيقونة في الشاشات الصغيرة
      height: "60px",
    },
  },
};

export default Food;
