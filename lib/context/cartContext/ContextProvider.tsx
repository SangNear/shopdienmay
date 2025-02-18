"use client"
import React, { createContext, useReducer, ReactNode } from 'react';
import CartReducer from './CartReducer';

// Define the CartContext type
interface CartContextType {
  products: CartTypes[];
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
}

// Default context value (empty cart and a dummy dispatch function)
export const CartContext = createContext<CartContextType>({
  products: [],
  dispatch: () => {}
});

// Define props type for ContextProvider (specifically children)
interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [products, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ products, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
