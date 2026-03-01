import Link from 'next/link';
import { MapPin, Phone, Clock, Award, Shield, Accessibility } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Credibility Bar */}
      <div className="border-b border-slate-800 bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8 sm:text-left">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-slate-300">Diplomates, American Board of Oral & Maxillofacial Surgery</span>
            </div>
            <span className="hidden text-slate-600 sm:inline">|</span>
            <span className="text-sm text-slate-400">Serving the Charlotte Region Since 1970</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Practice Info */}
          <div>
            <Link href="/" className="inline-block">
              <h3 className="mb-4 text-lg font-semibold text-white hover:text-primary transition-colors">Southeast Oral Surgery</h3>
            </Link>
            <p className="text-sm leading-relaxed">
              Southeast Oral & Maxillofacial Surgery Associates provides expert surgical care 
              with a patient-first approach. Our board-certified surgeons combine decades of 
              experience with advanced technology.
            </p>
            
            {/* Phone Numbers */}
            <div className="mt-6 space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Call Us</p>
              <div className="space-y-1.5 text-sm">
                <a href="tel:704-541-3603" className="flex items-center space-x-2 transition-colors hover:text-white">
                  <Phone className="h-3.5 w-3.5 text-slate-500" />
                  <span><span className="text-slate-500">Charlotte:</span> (704) 541-3603</span>
                </a>
                <a href="tel:704-983-2502" className="flex items-center space-x-2 transition-colors hover:text-white">
                  <Phone className="h-3.5 w-3.5 text-slate-500" />
                  <span><span className="text-slate-500">Albemarle:</span> (704) 983-2502</span>
                </a>
              </div>
            </div>
          </div>

          {/* Charlotte Location */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Charlotte Office</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="https://maps.google.com/?q=3111+Springbank+Ln+Ste+A,+Charlotte,+NC+28226" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" />
                <span>3111 Springbank Ln Ste A<br />Charlotte, NC 28226</span>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-500" />
                <a href="tel:704-541-3603" className="transition-colors hover:text-white">
                  (704) 541-3603
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" />
                <span>Mon-Thu: 8:30 AM - 4:30 PM<br />Fri: 7:30 AM - 12:30 PM</span>
              </div>
            </div>
          </div>

          {/* Albemarle Location */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Albemarle Office</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="https://maps.google.com/?q=1003+North+Sixth+Street,+Albemarle,+NC+28001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" />
                <span>1003 North Sixth Street<br />Albemarle, NC 28001</span>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-500" />
                <a href="tel:704-983-2502" className="transition-colors hover:text-white">
                  (704) 983-2502
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  Meet Our Surgeons
                </Link>
              </li>
              <li>
                <Link href="/patient-resources" className="transition-colors hover:text-white">
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link href="/referring-doctors" className="transition-colors hover:text-white">
                  Referring Doctors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Southeast Oral & Maxillofacial Surgery Associates. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/patient-resources#privacy" className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-white">
                <Shield className="h-3.5 w-3.5" />
                Privacy Policy
              </Link>
              <Link href="/patient-resources#accessibility" className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-white">
                <Accessibility className="h-3.5 w-3.5" />
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
