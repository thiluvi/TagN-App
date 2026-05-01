import React, { createContext, useState, useContext } from 'react';

export type Product = {
  name: string;
  price: string;
  image: any;
  category: string;
  description: string;
};

export type CartItem = Product & {
  quantity: number;
};

type ShopContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
  favoriteItems: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productName: string) => boolean;
};

export const ShopContext = createContext<ShopContextType>({} as ShopContextType);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productName: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (product: Product) => {
    setFavoriteItems((prevItems) => {
      const isAlreadyFavorite = prevItems.some((item) => item.name === product.name);
      if (isAlreadyFavorite) {
        return prevItems.filter((item) => item.name !== product.name);
      }
      return [...prevItems, product];
    });
  };

  const isFavorite = (productName: string) => {
    return favoriteItems.some((item) => item.name === productName);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        favoriteItems,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
