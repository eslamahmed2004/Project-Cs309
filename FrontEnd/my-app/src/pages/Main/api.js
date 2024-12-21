import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // عنوان الـ Backend الخاص بك

// تسجيل الدخول
export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, { email, password });
    return response.data; // البيانات المستلمة من الـ Backend
  } catch (error) {
    console.error("Error signing in:", error.response?.data || error.message);
    throw error;
  }
};

// تسجيل الخروج
export const signOut = async () => {
  try {
    await axios.post(`${API_BASE_URL}/signout`);
  } catch (error) {
    console.error("Error signing out:", error.response?.data || error.message);
    throw error;
  }
};

// جلب بيانات المستخدم
export const getProfileData = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile data:", error.response?.data || error.message);
    throw error;
  }
};
