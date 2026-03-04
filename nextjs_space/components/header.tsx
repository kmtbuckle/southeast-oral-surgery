'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Patient Resources', href: '/patient-resources' },
  { name: 'Referring Doctors', href: '/referring-doctors' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window?.scrollY > 10);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }
}, []);

useEffect(() => {
  if (typeof window === 'undefined') return;

  if (window.location.hash === '#consultation-form') {
    setTimeout(() => {
      const el = document.getElementById('consultation-form');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}, [pathname]);

const scrollToConsultation = () => {
  setMobileMenuOpen(false);

  // If we're already on the contact page, scroll smoothly
  if (pathname === '/contact') {
    const element = document.getElementById('consultation-form');
    element?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // If we're on any other page, go to the contact page + jump to the form
  window.location.href = '/contact#consultation-form';
};

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          {/* Logo - Clickable with larger hit area */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group flex items-center space-x-2 rounded-lg px-2 py-1.5 -ml-2 transition-colors hover:bg-primary/5"
              aria-label="Southeast Oral Surgery - Home"
            >
              <div className="text-xl font-bold text-primary transition-colors group-hover:text-primary/80 sm:text-2xl">
                Southeast Oral Surgery
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation?.map?.((item) => {
              const isActive = pathname === item?.href;
              return (
                <Link
                  key={item?.name}
                  href={item?.href ?? '/'}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item?.name}
                </Link>
              );
            })}
          </nav>

         {/* CTA Button */}
<div className="hidden lg:flex lg:items-center">
  <Button onClick={scrollToConsultation} className="bg-primary hover:bg-primary/90">
    Request Consultation
  </Button>
</div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="space-y-1 border-t border-gray-200 bg-white px-4 pb-4 pt-2 shadow-lg">
              {navigation?.map?.((item) => {
                const isActive = pathname === item?.href;
                return (
                  <Link
                    key={item?.name}
                    href={item?.href ?? '/'}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item?.name}
                  </Link>
                );
              })}
              
              {/* Mobile Phone Numbers */}
              <div className="space-y-2 border-t border-gray-100 pt-4 mt-3">
                <p className="px-3 text-xs font-medium uppercase tracking-wider text-gray-500">Call Us</p>
                <a
                  href="tel:704-541-3603"
                  className="flex items-center space-x-3 rounded-md px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-primary/10 hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span><span className="text-gray-500">Charlotte:</span> (704) 541-3603</span>
                </a>
                <a
                  href="tel:704-983-2502"
                  className="flex items-center space-x-3 rounded-md px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-primary/10 hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span><span className="text-gray-500">Albemarle:</span> (704) 983-2502</span>
                </a>
              </div>
              
              <div className="pt-3">
                <Button
                  onClick={scrollToConsultation}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Request Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
