import React from "react";
import { Link } from "react-router-dom"; 

const Food = () => {
  return (
    <div className="container" style={styles.container}>
      <Link to="/restaurant" style={styles.Link}>
        <div style={styles.box}>
          <h1 style={styles.H1}>اطلب الطعام</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 200 50">
            <rect x="0" y="0" width="200" height="50" rx="25" ry="25" fill="maroon" stroke="orange" strokeWidth="3"/>
            <text x="50%" y="50%" fontFamily="Arial" fontSize="20" fill="white" textAnchor="middle" alignmentBaseline="middle">Order now</text>
          </svg>
          <p style={styles.Body}>
            توصيل مجاني وعروض حصرية وأكثر لدى شركائنا من المطاعم.
          </p>
        </div>
      </Link>

      <Link style={styles.Link}>
        <div style={styles.box}>
          <h1 style={styles.H1}> اطلب التسالي </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 200 50">
            <rect x="0" y="0" width="200" height="50" rx="25" ry="25" fill="maroon" stroke="orange" strokeWidth="3"/>
            <text x="50%" y="50%" fontFamily="Arial" fontSize="20" fill="white" textAnchor="middle" alignmentBaseline="middle">Order now</text>
          </svg>
          <p style={styles.Body}>
            لا تضيع وقتك في الانتظار . نوصلك لك الطعام في أسرع وقت.
          </p>
        </div>
      </Link>

      <Link style={styles.Link}>
        <div style={styles.box}>
          <h1 style={styles.H1}> اطلب الدواء </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 200 50">
            <rect x="0" y="0" width="200" height="50" rx="25" ry="25" fill="maroon" stroke="orange" strokeWidth="3"/>
            <text x="50%" y="50%" fontFamily="Arial" fontSize="20" fill="white" textAnchor="middle" alignmentBaseline="middle">Order now</text>
          </svg>
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
    display: "flex", // لتوزيع العناصر أفقيًا جنبًا إلى جنب
    justifyContent: "space-between", // لضمان أن تكون المربعات موزعة بالتساوي
    alignItems: "flex-start", // لضبط العناصر رأسياً مع التباعد من الأعلى
    margin: "20px", // إضافة مساحة حول الـ container
    gap: "20px", // إضافة المسافة بين المربعات
    flexWrap: "wrap", // لتسمح للمربعات بالانتقال إلى السطر التالي عند الحاجة
  },
 Link: {
    textDecoration: "none", // لإزالة الخط السفلي من الروابط
  },
  box: {
    flex: 1, // لجعل المربعات مرنة بحيث تأخذ نفس العرض
    minWidth: "200px", // لضمان أن المربع لا يصبح ضيقًا جدًا
    height: "400px", // تحديد ارتفاع كل مربع
    backgroundColor: "#ff7e5f", // خلفية ملونة للمربعات
    color: "#fff", // لون النص داخل المربعات
    display: "flex", // استخدام flex داخل المربع
    flexDirection: "column", // ترتيب النصوص عموديًا
    justifyContent: "flex-start", // محاذاة المحتوى إلى أعلى المربع
    alignItems: "flex-start", // محاذاة النص إلى اليسار
    padding: "20px", // إضافة padding للمربع
    borderRadius: "10px", // لتنعيم الزوايا
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // إضافة ظل خفيف
    transition: "all 0.3s ease-in-out", // إضافة تأثير لتغيير الحجم
  },
  H1: {
    color: "rgb(0,0,0,0.8)", 
    fontSize: "30px", // حجم النص
    fontWeight: "bold", // جعل النص عريض
    textAlign: "left", // محاذاة النص إلى اليسار
    margin: "0", // إزالة الهوامش
  },

  Body: {
    color: "rgba(0, 0, 0, 0.8)",
    position: "relative",
    bottom: "-150px",
    left: "10px",
    fontSize: "20px",
    fontWeight: "normal",
    textAlign: "left",
    margin: "80px auto",
  },

  // إضافة استجابة للشاشات الصغيرة
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column", // تغيير اتجاه العناصر عند الشاشات الصغيرة
      gap: "10px", // تقليل المسافة بين المربعات
    },
    box: {
      flex: "none", // إعادة ضبط العرض ليكون مناسبًا للشاشات الصغيرة
      width: "100%", // المربعات تأخذ عرض 100% من الشاشة
      height: "auto", // تعديل الارتفاع ليكون تلقائي
    },
    H1: {
      fontSize: "24px", // تقليل حجم الخط للشاشات الصغيرة
    },
    H2: {
      fontSize: "14px", // تقليل حجم الخط للشاشات الصغيرة
    }
  },
};

export default Food;

