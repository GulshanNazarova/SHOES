import React from "react";
import AppRouter from "./router/AppRouter";
import { CartProvider } from "react-use-cart";
import { ThemeProvider } from "./context/ThemeContext";
import { WishlistProvider } from "react-use-wishlist";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <WishlistProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </WishlistProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
