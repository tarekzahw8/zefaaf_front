/* eslint-disable react/prop-types */
// 1 - create store manage all data

import { createContext, useEffect, useState } from "react";
import FetchInstance from "../config/FetchInstance";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("PROFILE");
  const [isOpen, setIsOpen] = useState(true);

  const [token, setToken] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json(); // تحويل الاستجابة إلى JSON
        setData(jsonData); // تعيين البيانات المستلمة
        console.log(jsonData); // عرض البيانات في وحدة التحكم
      } catch (error) {
        console.error("Error fetching data:", error); // عرض الخطأ في وحدة التحكم
      }
    };

    fetchData(); // استدعاء دالة fetchData
  }, []); // يتم تنفيذ useEffect عند تحميل المكون فقط

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  const Logout = async (allDevices = false) => {
    try {
      if (allDevices) {
        const response = await FetchInstance.post(
          "/logout",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status !== 200) {
          throw new Error("Failed to log out from all devices");
        }
      }
      setUser(null);
      setToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      console.log(
        allDevices ? "Logged out from all devices" : "Logged out from this device"
      );
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };


  useEffect(() => {
    setData("data");
  }, []);
  return (
    <AppContext.Provider
      value={{
        data,
        user,
        setUser,
        Logout,
        token,
        setToken,
        setData,
        cart,
        setCart,
        isOpen,
        setIsOpen,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
