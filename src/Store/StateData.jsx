// 1 - create store manage all data

import  { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data , setData]= useState("")
useEffect(()=>{
  setData("data")
},[])
  return (
    <AppContext.Provider value={{ data }}>
      {children}
    </AppContext.Provider>
  );
};
