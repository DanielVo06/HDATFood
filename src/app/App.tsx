import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from '@/app/context/CartContext';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { MenuPage } from '@/app/pages/MenuPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { LoginPage } from '@/app/pages/LoginPage';
import { CheckoutPage } from '@/app/pages/CheckoutPage';
import { NotFoundPage } from '@/app/pages/NotFoundPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
          
          {/* Toast Notifications */}
          <Toaster
            position="bottom-center"
            richColors
            toastOptions={{
              style: {
                background: '#fff',
                color: '#000',
                border: '1px solid #e5e7eb',
                padding: '16px',
                borderRadius: '12px',
              },
              duration: 3000,
            }}
          />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;