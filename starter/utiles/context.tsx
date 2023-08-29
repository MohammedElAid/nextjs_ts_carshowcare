'use client'
import React, { useState, useContext } from 'react';
import { fetchCars } from '.';

const AppContext = React.createContext();

const AppProvider = ({ children }:any) => {
  
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
 


  return (
    <AppContext.Provider
      value={{
        manufacturer,
        model,
        setManufacturer,
        setModel,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
