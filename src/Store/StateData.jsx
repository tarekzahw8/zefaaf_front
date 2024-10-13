/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import FetchInstance from "../config/FetchInstance";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Restore user and token from localStorage when the page loads
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  // Store user and token in localStorage when they are updated
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [user, token]);

  // Sync cart with localStorage without reloading
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Listen to changes in localStorage (optional for syncing across tabs)
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        setCart(JSON.parse(event.newValue) || []);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Logout function to clear user and token from localStorage
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
            }
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
        allDevices
          ? "Logged out from all devices"
          : "Logged out from this device"
      );
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

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
