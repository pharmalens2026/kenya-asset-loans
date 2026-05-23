import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MessageCircle, MapPin, Mail, 
  Instagram, Facebook, Twitter, 
  Clock, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { CONTACT_INFO } from '../lib/constants';

export const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Marketplace', id: 'marketplace' },
    { name: 'About', id: 'about' },
    { name: 'Apply for Loan', id: 'apply' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => { setActivePage('home'); window.scrollTo(0,0); }}
        >
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-bold text-xl shadow-lg">F</div>
          <div>
            <span className="text-xl font-bold tracking-tighter block leading-none">THE FREDY'S</span>
            <span className="text-[10px] text-primary tracking-[0.2em] uppercase">Premium Pawn Shop</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActivePage(link.id); window.scrollTo(0,0); }}
              className={`text-sm font-medium transition-colors hover:text-primary ${activePage === link.id ? 'text-primary border-b-2 border-primary' : 'text-foreground/80'}`}
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => setActivePage('apply')} className="gold-gradient text-black font-semibold border-none hover:opacity-90">
            Get Cash Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setActivePage(link.id); setMobileMenuOpen(false); window.scrollTo(0,0); }}
                  className={`text-left py-2 text-lg font-medium ${activePage === link.id ? 'text-primary' : 'text-foreground/80'}`}
                >
                  {link.name}
                </button>
              ))}
              <Button onClick={() => { setActivePage('apply'); setMobileMenuOpen(false); }} className="gold-gradient text-black font-semibold w-full">
                Apply for Loan
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <footer className="bg-muted pt-16 pb-8 border-t border-primary/10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-black font-bold text-lg">F</div>
            <span className="text-xl font-bold tracking-tighter">THE FREDY'S</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Instant asset financing and premium pawn services in Nairobi. 
            Quick cash, professional valuation, and absolute security for your valuables.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
              <Instagram size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
              <Twitter size={18} />
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            {['Home', 'Services', 'Marketplace', 'About', 'Apply', 'FAQ'].map(item => (
              <li key={item}>
                <button 
                  onClick={() => { setActivePage(item.toLowerCase()); window.scrollTo(0,0); }}
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <ChevronRight size={14} /> {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>Gold & Jewelry Pawn</li>
            <li>Electronics Financing</li>
            <li>Car Logbook Loans</li>
            <li>Luxury Watch Loans</li>
            <li>Asset Purchases</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Visit Us</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>{CONTACT_INFO.location}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+254 {CONTACT_INFO.phone.slice(1)}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="text-primary shrink-0" />
              <span>Mon - Sat: {CONTACT_INFO.hours.mon_fri}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <Separator className="my-12 opacity-10" />
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© 2024 THE FREDY'S Pawn & Asset Financing. All rights reserved.</p>
        <div className="flex gap-6">
          <button className="hover:text-primary">Privacy Policy</button>
          <button className="hover:text-primary">Terms of Service</button>
          <button className="hover:text-primary">Admin Login</button>
        </div>
      </div>
    </div>
  </footer>
);

export const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-500 transition-all hover:scale-110 active:scale-95 group"
  >
    <MessageCircle size={30} fill="currentColor" />
    <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
      Chat with us
    </span>
  </a>
);