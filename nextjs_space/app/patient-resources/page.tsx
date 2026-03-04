'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FileText, ClipboardList, ExternalLink, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Resources | Southeast Oral Surgery',
  description:
    'Patient forms, registration, instructions, and resources for Southeast Oral Surgery in Charlotte and Albemarle, NC.',
};

type ResourceLink = {
  title: string;
  description?: string;
  href: string;
  external?: boolean;
  isPdf?: boolean;
};

const QUICK_ACTIONS: ResourceLink[] = [
  {
    title: 'Patient Registration',
    description: 'Complete registration paperwork before your appointment.',
    href: '/patient-resources/patient-registration',
  },
  {
    title: 'Request a Consultation',
    description: 'Send us your info and we’ll contact you within 1 business day.',
    href: '/contact#consultation-form',
  },
];

const FORMS: ResourceLink[] = [
  { title: 'New Patient Forms (PDF)', href: '/forms/new-patient.pdf', isPdf: true },
  { title: 'HIPAA Notice (PDF)', href: '/forms/hipaa.pdf', isPdf: true },
  { title: 'Financial Policy (PDF)', href: '/forms/financial-policy.pdf', isPdf: true },
];

const INSTRUCTIONS: ResourceLink[] = [
  { title: 'Wisdom Teeth Aftercare', href: '/patient-resources/wisdom-teeth-aftercare' },
  { title: 'Dental Implant Aftercare', href: '/patient-resources/implant-aftercare' },
  { title: 'Sedation Instructions', href: '/patient-resources/sedation-instructions' },
];

export default function PatientResourcesPage() {
  const router = useRouter();

  const goToConsultation = () => {
    router.push('/contact#consultation-form');
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">
              Patient Resources
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need, <span className="text-primary">in one place</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Forms, registration, and instructions—so your visit is smooth and stress-free.
            </p>

            {/* Quick actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href={QUICK_ACTIONS[0].href}>
                  <ClipboardList className="mr-2 h-4 w-4" />
                  {QUICK_ACTIONS[0].title}
                </Link>
              </Button>

              {/* Make consultation button bulletproof */}
              <Button variant="outline" onClick={goToConsultation}>
                {QUICK_ACTIONS[1].title}
              </Button>
            </div>

            {/* Call us block */}
            <div className="mt-8 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-5">
              <p className="text-sm text-gray-600">Prefer to call?</p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
                <a
                  href="tel:704-541-3603"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/15"
                >
                  <Phone className="h-4 w-4" />
                  Charlotte: (704) 541-3603
                </a>
                <a
                  href="tel:704-983-2502"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/15"
                >
                  <Phone className="h-4 w-4" />
                  Albemarle: (704) 983-2502
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Forms */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Forms & Documents</h2>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Download and complete forms ahead of time.
              </p>

              <ul className="mt-5 space-y-3">
                {FORMS.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      target={item.isPdf ? '_blank' : undefined}
                      rel={item.isPdf ? 'noopener noreferrer' : undefined}
                      className="group flex items-start justify-between rounded-lg border border-gray-100 px-4 py-3 hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-primary">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {item.isPdf ? 'Opens in a new tab (PDF)' : ''}
                        </p>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 text-gray-400 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Care Instructions</h2>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Clear prep and aftercare info for common procedures.
              </p>

              <ul className="mt-5 space-y-3">
                {INSTRUCTIONS.map((item) => (
                  <li key={item.title}>
                    <Button asChild variant="outline" className="w-full justify-between">
                      <Link href={item.href}>
                        <span>{item.title}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to expect */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-bold text-gray-900">What to bring</h2>
              <p className="mt-3 text-sm text-gray-600">
                A quick checklist for a smooth visit.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>Photo ID</li>
                <li>Insurance card (if applicable)</li>
                <li>Referral paperwork (if provided)</li>
                <li>A list of medications</li>
                <li>Questions you want answered</li>
              </ul>

              <div className="mt-6 rounded-xl bg-stone-50 p-4">
                <p className="text-sm font-medium text-gray-900">Need help finding something?</p>
                <p className="mt-1 text-sm text-gray-600">
                  Call our office and we’ll point you to the right form.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-500">
            Two convenient locations serving Charlotte and Albemarle, NC.
          </div>
        </div>
      </section>
    </div>
  );
}
