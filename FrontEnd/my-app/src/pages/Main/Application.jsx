import React from "react";
 

const Application = () => {
    return (
        <div style={style.backgroundStyle}>
      <h1 style={style.headingStyle}>حمل تطبيق طلبات</h1>
      <p style={style.paragraphStyle}>احصل على ما تريد، عندما تريد.</p>
      <p style={style.soon}>SOOOON</p>
      <div>

        </div>
    </div>
    );
}
const style ={
 backgroundStyle : {
    backgroundColor: '#f5e0d3', // اللون البيج الفاتح للخلفية
    color: '#6a3d32',  // اللون البني الداكن للنص
    padding: '80px 20px',  // padding حول النص
    textAlign: 'center',  // محاذاة النص إلى المنتصف
    fontFamily: "'Cairo', sans-serif",  // الخط
    borderRadius: '10px',  // حواف دائرية للمربع
    margin: '20px auto',  // المسافة حول المربع
    maxWidth: '1000px',  // تحديد أقصى عرض للمربع
  },
   headingStyle : {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
   paragraphStyle : {
    fontSize: '18px',
    marginBottom: '30px',
  },
 soon:{
    fontWeight :"bold",
    fontSize : "50px"
 }
}

export default Application;