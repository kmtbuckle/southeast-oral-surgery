import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

const LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Patient Resources', href: '/patient-resources' },
  { name: 'Referring Doctors', href: '/referring-doctors' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-lg font-bold text-primary">Southeast Oral Surgery</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-gray-600">
              Board-certified oral &amp; maxillofacial surgery with two convenient locations in
              Charlotte and Albemarle, NC.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Site</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-600 hover:text-primary"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
              {/* Add “Register” explicitly */}
              <li>
                <Link href="/patient-resources/patient-registration" className="text-gray-600 hover:text-primary">
                  Patient Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Contact</p>

            <div className="mt-4 space-y-4 text-sm text-gray-600">
              <div className="space-y-2">
                <a
                  href="tel:704-541-3603"
                  className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 hover:bg-primary/10"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span>
                    <span className="text-gray-500">Charlotte:</span> (704) 541-3603
                  </span>
                </a>
                <a
                  href="tel:704-983-2502"
                  className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 hover:bg-primary/10"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span>
                    <span className="text-gray-500">Albemarle:</span> (704) 983-2502
                  </span>
                </a>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Charlotte</p>
                    <p>3111 Springbank Ln Ste A</p>
                    <p>Charlotte, NC 28226</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Albemarle</p>
                    <p>1003 North Sixth Street</p>
                    <p>Albemarle, NC 28001</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact#consultation-form"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 font-medium text-white hover:bg-primary/90"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Southeast Oral &amp; Maxillofacial Surgery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
