import React from "react";
import Footer from "./Footer";
import "./Footer.css";

const Locations = () => {
  return (
    <div>
      <div>
        <h1 style={style.header}>
          اماكن قريبه من الكليات
        </h1>
      </div>
      <div style={style.div}>
        <img src="/Screenshot 2024-12-10 183826.png" alt="Background" style={style.image} />
        <div style={style.container}>
          <a href="https://maps.app.goo.gl/fZsfbc5u9w23Y7Ve6" target="blank" style={style.divForLinks}>
            <h2 style={style.text}>كلية العلوم</h2>
            <p style={style.prag}>اتجه الي Break Out</p>
          </a>
          <a href="https://maps.app.goo.gl/fZsfbc5u9w23Y7Ve6" target="blank" style={style.divForLinks}>
            <h2 style={style.text}>كلية الحقوق</h2>
            <p style={style.prag}>اتجه الي Break Out</p>
          </a>
          <a href="https://www.google.com/maps/place/Royal+cafeteria" target="blank" style={style.divForLinks}>
            <h2 style={style.text}>كلية التجارة</h2>
            <p style={style.prag}>اتجه الي Royal Cafeteria</p>
          </a>
          <a href="https://www.google.com/maps/place/Faculty+of+Mass+Communication+Cairo+University" target="blank" style={style.divForLinks}>
            <h2 style={style.text}>كلية السياسة والاقتصاد</h2>
            <p style={style.prag}>اتجه الي Royal Cafeteria</p>
          </a>
          <a href="https://www.google.com/maps/place/Faculty+of+Mass+Communication+Cairo+University" target="blank" style={style.divForLinks}>
            <h2 style={style.text}>كلية الاعلام</h2>
            <p style={style.prag}>اتجه الي Time out</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const style = {
  header: {
    color: "rgb(0, 0, 0, 0.8)",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "right",
    margin: "0",
    padding: "20px", // إضافة مسافة حول العنوان
  },
  div: {
    position: "relative",
    width: "100%",
    height: "2000px",
    overflow: "hidden",
    padding: "0px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
  },
  container: {
    position: "absolute",
    top: "10%", // تحديد المسافة من الأعلى
    width: "100%", // جعل الحاوية تأخذ عرض الشاشة بالكامل
    display: "flex",
    flexDirection: "column", // جعل الاتجاه عموديًا دائمًا
    gap: "30px", // المسافة بين العناصر
    justifyContent: "center", // لتوسيط العناصر
    padding: "20px", // إضافة padding لضبط الحواف
    alignItems: "center", // لتوسيط العناصر في الاتجاه العمودي
    boxSizing: "border-box", // لضمان أن padding لا يؤثر على الحجم الإجمالي
  },
  divForLinks: {
    width: "100%", // البوكس سيأخذ عرض الحاوية بالكامل
    maxWidth: "700px", // تحديد الحد الأقصى للعرض
    backgroundColor: "rgba(255, 255, 255, 0.9)", // تعديل شفافية الخلفية لتكون أكثر وضوحًا
    padding: "40px", // زيادة padding للحصول على مساحة أكبر داخل البوكس
    borderRadius: "15px", // جعل الحواف أكثر نعومة
    textAlign: "right",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)", // تحسين الظل ليبدو أكثر وضوحًا
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    margin: "10px", // إضافة هامش بين العناصر
    boxSizing: "border-box", // لضمان أن padding لا يؤثر على الحجم الإجمالي
    flex: "1 1 auto", // يجعل العنصر مرنًا ويمكنه التكيف مع الحجم
  },
  text: {
    color: "black",
    fontSize: "1.8rem", // زيادة حجم الخط
    fontWeight: "bold",
    marginBottom: "15px", // زيادة المسافة أسفل النص
  },
  prag: {
    color: "black",
    fontSize: "1.2rem", // زيادة حجم الخط
    fontWeight: "normal",
  },
};



export default Locations;
