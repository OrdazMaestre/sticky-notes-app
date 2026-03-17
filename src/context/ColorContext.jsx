import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [defaultColor, setDefaultColor] = useState('#fffb99'); // amarillo suave por defecto

  const value = {
    defaultColor,
    setDefaultColor,
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
}

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor debe usarse dentro de ColorProvider');
  }
  return context;
};