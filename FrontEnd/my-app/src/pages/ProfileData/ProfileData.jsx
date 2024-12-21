import React, { useState, useEffect } from 'react';

const ProfileData = () => {
    const [user, setUser] = useState(null);  // حفظ بيانات المستخدم
    const [loading, setLoading] = useState(true);  // حالة التحميل

    useEffect(() => {
        const token = localStorage.getItem('token');  // جلب الـ token من localStorage
        const userId = localStorage.getItem('userId');  // جلب الـ userId من localStorage

        // إذا لم يكن هناك توكين أو معرف مستخدم، أوقف التحميل
        if (!token || !userId) {
            setLoading(false);
            return;
        }

        // جلب بيانات المستخدم من الـ API
        fetch(`http://localhost:5000/user/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            setUser(data);  // تخزين بيانات المستخدم
            setLoading(false);  // إيقاف حالة التحميل
        })
        .catch(err => {
            console.error('Error fetching user data:', err);
            setLoading(false);  // في حالة حدوث خطأ
        });
    }, []);  // سيتم تنفيذ الـ useEffect مرة واحدة فقط عند تحميل المكون

    // إذا كانت البيانات لم تُحمل بعد
    if (loading) {
        return <div>Loading...</div>;  // يمكنك هنا عرض مؤشر تحميل أو رسالة أخرى
    }

    // إذا كانت بيانات المستخدم غير موجودة
    if (!user) {
        return <div>User not found!</div>;  // رسالة إذا لم يتم العثور على المستخدم
    }

    // عرض بيانات المستخدم بعد تحميلها
    return (
        <div>
            <h1>{user.fullName}</h1>  {/* عرض اسم المستخدم */}
            <p>Email: {user.email}</p>  {/* عرض البريد الإلكتروني */}
            <p>Phone: {user.phoneNumber}</p>  {/* عرض رقم الهاتف */}
            <p>Address: {user.address}</p>  {/* عرض العنوان */}
            {/* يمكنك إضافة المزيد من البيانات هنا */}
        </div>
    );
};

export default ProfileData;
