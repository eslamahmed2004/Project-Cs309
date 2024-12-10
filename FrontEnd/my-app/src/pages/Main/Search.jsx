import React from "react";

 const Search = () =>{
    return(

        <div style={StyledSearch.container}>
        
        <h1 style={StyledSearch.H1}>أكلك وشربك في اسرع وقت  (علي معلول)</h1>
         <input style={StyledSearch.Searchbar} type="text" placeholder="ابحث عن الطعام الذي تريده" className="search-input"/>
        </div>
           
    );
}
const StyledSearch = {
    container: {
        textAlign: "center", // لتوسيط المحتوى داخل الـ div
        padding: "50px 0", // إضافة padding أعلى وأسفل
        background: "rgb(255,255,255)", // تدرج لوني من اللون البرتقالي إلى الوردي
        minHeight: "100%", // لضمان أن المحتوى يملأ الشاشة بالكامل
      },
    Searchbar :{
    display: "flex",
    width: "40%",
    height: "40px", 
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    padding: "10px",
    margin: "80px auto", 
    fontSize: "16px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
    border: "1px solid #ccc",
    outline: "none",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
},
H1:{
    display: "left",
    fontSize: "36px",
    color: "#000000",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    margin: "80px auto",
}
}
export default Search;

