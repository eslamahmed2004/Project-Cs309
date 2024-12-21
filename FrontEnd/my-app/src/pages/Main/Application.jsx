import React from "react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div style={style.backgroundStyle}>
      <h1 style={style.headingStyle}>حمل تطبيق طلبات</h1>
      <p style={style.paragraphStyle}>احصل على ما تريد، عندما تريد.</p>
      <div style={style.iconContainer}>
        {/* وضع صورة الهاتف في أقصى اليسار */}
        <img src="web2app.webp" alt="icon" style={style.icons} />
      </div>
      
      {/* الأيقونات الأخرى تحت النص */}
      <div style={style.iconWrapperContainer}>
        <div style={style.iconWrapper}>
          <Link to="https://appstoreconnect.apple.com/login" target="blank" style={style.linkStyle}>
            <img src="logo_appstore.svg" alt="App Store" style={style.icon} />
            <p style={style.iconText}>App Store</p>
          </Link>
        </div>
        <div style={style.iconWrapper}>
          <Link to="https://play.google.com/store/games?hl=en&pli=1" target="blank" style={style.linkStyle}>
            <img src="logo_playstore.svg" alt="Play Store" style={style.icon} />
            <p style={style.iconText}>Play Store</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const style = {
  backgroundStyle: {
    backgroundColor: '#f5e0d3', // اللون البيج الفاتح للخلفية
    color: '#6a3d32', // اللون البني الداكن للنص
    padding: '80px 20px', // padding حول النص
    textAlign: 'center', // محاذاة النص إلى المنتصف
    fontFamily: "'Cairo', sans-serif", // الخط
    borderRadius: '10px', // حواف دائرية للمربع
    margin: '20px auto', // المسافة حول المربع
    maxWidth: '1500px', // تحديد أقصى عرض للمربع
    width: '100%', // لضمان أن العرض سيكون مرنًا ويأخذ المساحة المتاحة
    boxSizing: 'border-box',
  },
  headingStyle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraphStyle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center', // محاذاة الأيقونات في المنتصف
    marginTop: '30px', // إضافة مسافة فوق الأيقونة
    flexWrap: 'wrap', // لضمان أن الأيقونات تتوزع بشكل مرن في الأسطر
    gap: '20px',
    justifyContent: 'center', // محاذاة الأيقونات في الوسط
  },
  iconWrapperContainer: {
    display: 'flex',
    justifyContent: 'center', // محاذاة الأيقونات في الوسط
    gap: '30px', // المسافة بين الأيقونات
    marginTop: '20px', // تعديل المسافة بين الأيقونات
    flexWrap: 'wrap', // يجعل الأيقونات تتحرك وتتكيف مع الشاشات الصغيرة
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column', // ترتيب الأيقونات والنصوص بشكل عمودي
    alignItems: 'center', // محاذاة العناصر في الوسط
    textAlign: 'center', // محاذاة النصوص إلى الوسط
    width: '100%', // التأكد من أن كل الأيقونات تأخذ عرض 100% في المساحة المتاحة
    maxWidth: '200px', // الحد الأقصى للعرض لكل أيقونة
  },
  icon: {
    width: '100%', // تحديد الأيقونة لتأخذ العرض الكامل للمربع
    maxWidth: '150px', // الحد الأقصى لعرض الأيقونة
    height: 'auto',
    marginBottom: '10px', // المسافة بين الصورة والنص
    borderRadius: '10px', // إضافة حواف دائرية للأيقونات
  },
  iconText: {
    marginTop: '10px', // المسافة بين الصورة والنص
    fontSize: '20px', // حجم النص
    fontWeight: 'bold', // جعل النص عريض
  },
  icons: {
    width: '100%', // تحديد الأيقونة لتأخذ العرض الكامل للمربع
    maxWidth: '150px', // الحد الأقصى لعرض الأيقونة
    height: 'auto',
    borderRadius: '10px',
  },
  linkStyle: {
    textDecoration: 'none',
  },

  // استجابة للشاشات الصغيرة
  '@media (max-width: 768px)': {
    backgroundStyle: {
      padding: '50px 20px', // تقليل padding للشاشات الصغيرة
    },
    headingStyle: {
      fontSize: '28px', // تقليل حجم النص في العنوان
    },
    paragraphStyle: {
      fontSize: '16px', // تقليل حجم النص
    },
    iconContainer: {
      justifyContent: 'center', // محاذاة الأيقونات في المنتصف للشاشات الصغيرة
      marginTop: '20px',
    },
    iconWrapperContainer: {
      gap: '20px', // تقليل المسافة بين الأيقونات
      marginTop: '-40px', // تقليل المسافة بين الأيقونات
    },
    iconWrapper: {
      maxWidth: '150px', // تقليل عرض الأيقونة في الشاشات الصغيرة
    },
    icon: {
      maxWidth: '120px', // تقليل عرض الأيقونة في الشاشات الصغيرة
    },
    iconText: {
      fontSize: '16px', // تقليل حجم النص في الشاشات الصغيرة
    },
  },

  '@media (max-width: 480px)': {
    backgroundStyle: {
      padding: '30px 10px', // تقليل padding بشكل أكبر للشاشات الصغيرة جدًا
    },
    headingStyle: {
      fontSize: '24px', // تقليل حجم النص بشكل أكبر
    },
    paragraphStyle: {
      fontSize: '14px', // تقليل حجم النص
    },
    iconContainer: {
      flexDirection: 'column', // ترتيب الأيقونات عموديًا
      justifyContent: 'center', // محاذاة الأيقونات في المنتصف
      gap: '15px',
    },
    iconWrapperContainer: {
      flexDirection: 'column', // جعل الأيقونات في عمود
      gap: '15px',
      marginTop: '-20px', // تعديل المسافة
    },
    icon: {
      maxWidth: '100px', // تقليل عرض الأيقونة
    },
    iconText: {
      fontSize: '14px', // تقليل حجم النص في الشاشات الصغيرة جدًا
    },
  },
};

export default Application;
