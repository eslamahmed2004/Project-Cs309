import React from "react";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className="container" style={styles.container}>
      <Link to="/restaurant" style={styles.Link}>
        <div style={styles.box}>
          <img src="/wallpaperflare.com_wallpaper(3).jpg" alt="icon" style={styles.icon} />
          <h1 style={styles.H1}>Order Food</h1>
          <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
          <p style={styles.Body}>
            توصيل مجاني وعروض حصرية وأكثر لدى شركائنا من المطاعم.
          </p>
        </div>
      </Link>

      <Link to="/drink" style={styles.Link}>
        <div style={styles.box}>
          <img src="/wallpaperflare.com_wallpaper(4).jpg" alt="icon" style={styles.icon} />
          <h1 style={styles.H1}>Order Snacks</h1>
          <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
          <p style={styles.Body}>
            لا تضيع وقتك في الانتظار . نوصلك لك الطعام في أسرع وقت.
          </p>
        </div>
      </Link>

      <Link to="/medicine" style={styles.Link}>
        <div style={styles.box}>
          <img src="/wallpaperflare.com_wallpaper(5).jpg" alt="icon" style={styles.icon} />
          <h1 style={styles.H1}>Order Medicin</h1>
          <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
          <p style={styles.Body}>
            نوصلك لك الدواء في أسرع وقت.
          </p>
        </div>
      </Link>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: "1800px", // الحد الأقصى للعرض
    width: "100%", // العرض يتناسب مع الشاشة
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "60px",
    margin: "20px auto",
    paddingLeft: "20px",
    paddingTop: "20px",
  },

  box: {
    position: "relative", // يضمن أن النصوص والصورة يمكن التحكم في وضعها داخل الصندوق
    height: "600px",
    width:"500px", // ارتفاع ثابت للمربع
    backgroundColor: "#ff7e5f",
    color: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  icon: {
    position: "absolute", // يسمح للصورة بشغل كامل مساحة المربع
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover", // يجعل الصورة تغطي المربع بشكل كامل دون تشويه
    zIndex: "0", // يجعل الصورة في الخلفية
  },
  H1: {
    position: "relative", // يبقي النص فوق الصورة
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
    margin: "20px",
    zIndex: "1", // يضمن بقاء النص فوق الصورة
  },
  Body: {
    position: "relative", // يبقي النص فوق الصورة
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: "10px",
    zIndex: "1", // يضمن بقاء النص فوق الصورة
  },
  orderIcon: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    width: "70px",
    height: "70px",
    zIndex: "2", // فوق الصورة لكن تحت النصوص الأخرى
  },
  Link: {
    textDecoration: "none",
  },
  // استجابة للشاشات الصغيرة
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column", // ترتيب المربعات عموديًا
      gap: "15px", // تقليل المسافة بين المربعات
    },
    box: {
      flex: "1 1 100%", // المربع يأخذ عرض الشاشة بالكامل
      maxWidth: "100%", // عرض كامل للشاشة
      minHeight: "400px", // نفس الحد الأدنى للارتفاع
    },
  },
};


export default Food;