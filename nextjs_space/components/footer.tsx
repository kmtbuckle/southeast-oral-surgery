'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, MapPin } from 'lucide-react';
import { useCallback } from 'react';

const PATIENT_INFO_LINKS = [
  { name: 'Patient Resources', href: '/patient-resources' },
  { name: 'Patient Registration', href: '/patient-resources#patient-registration' },
  { name: 'Pre-Op Instructions', href: '/patient-resources#pre-op' },
  { name: 'Post-Op Care', href: '/patient-resources#post-op' },
  { name: 'Insurance', href: '/patient-resources#insurance' },
  { name: 'Financing', href: '/patient-resources#financing' },
];

const SERVICE_LINKS = [
  { name: 'Dental Implants', href: '/services#dental-implants' },
  { name: 'Wisdom Teeth', href: '/services#wisdom-teeth' },
  { name: 'Bone Grafting', href: '/services#bone-grafting' },
  { name: 'Sedation Options', href: '/services#sedation' },
  { name: 'View All Services', href: '/services' },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const goToConsultation = useCallback(() => {
    // If we're already on /contact, smooth scroll
    if (pathname === '/contact') {
      const el = document.getElementById('consultation-form');
      if (el) {
        window.history.replaceState(null, '', '#consultation-form');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Otherwise navigate to contact + hash
    router.push('/contact#consultation-form');
  }, [pathname, router]);

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
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

          {/* Patient Info */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Patient Info</p>
            <ul className="mt-4 space-y-3 text-sm">
              {PATIENT_INFO_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-600 hover:text-primary">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Services</p>
            <ul className="mt-4 space-y-3 text-sm">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-600 hover:text-primary">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Locations</p>

            <div className="mt-4 space-y-5 text-sm text-gray-600">
              {/* Phones */}
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

              {/* Addresses */}
              <div className="space-y-4">
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

              {/* CTA */}
              <button
                type="button"
                onClick={goToConsultation}
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 font-medium text-white hover:bg-primary/90"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Southeast Oral &amp; Maxillofacial Surgery. All rights
            reserved.
          </p>

          {/* Optional: enable if/when these pages exist */}
          <div className="flex gap-4">
            {/* <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/accessibility" className="hover:text-primary">Accessibility</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
