import React from 'react';
import { Routes } from './src/routes';
import { ShopProvider } from './src/context/ShopContext';

export default function App() {
  return (
    <ShopProvider>
      <Routes />
    </ShopProvider>
  );
}