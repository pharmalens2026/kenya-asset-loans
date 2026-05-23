import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import './custom.css'; // Import the new custom CSS
import { Navbar, Footer, WhatsAppButton } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services, Marketplace, FAQ } from './components/Services';
import { LoanApplication, ContactUs } from './components/Forms';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'about': return <About />;
      case 'services': return <Services setActivePage={setActivePage} />;
      case 'marketplace': return <Marketplace />;
      case 'apply': return <LoanApplication />;
      case 'faq': return <FAQ />;
      case 'contact': return <ContactUs />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Toaster position="top-center" richColors />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />
      <WhatsAppButton />
    </div>
  );
}

export default App;