import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { FileText, ClipboardList, ExternalLink, Phone, ShieldCheck, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Resources | Southeast Oral Surgery',
  description:
    'Patient registration, insurance & financing information, and resources for Southeast Oral Surgery in Charlotte and Albemarle, NC.',
};

type ResourceLink = {
  title: string;
  description?: string;
  href: string;
  external?: boolean;
  badge?: string;
};

const PATIENT_REGISTRATION_URL =
  'https://mysecurepractice.com/Truform/588916e4-f60d-4967-ad8e-490f84f81445/Submission/Create';

const QUICK_ACTIONS: ResourceLink[] = [
  {
    title: 'Patient Registration',
    description: 'Complete registration paperwork before your appointment.',
    href: PATIENT_REGISTRATION_URL,
    external: true,
  },
  {
    title: 'Request a Consultation',
    description: 'Send us your info and we’ll contact you within 1 business day.',
    href: '/contact#consultation-form',
  },
];

const FORMS: ResourceLink[] = [
  {
    title: 'Medical History Form',
    description: 'Completed in-office to ensure accuracy and compliance.',
    href: '#',
    badge: 'In-office',
  },
  {
    title: 'Consent for Treatment',
    description: 'Completed in-office at your appointment.',
    href: '#',
    badge: 'In-office',
  },
  {
    title: 'HIPAA Privacy Notice',
    description: 'Reviewed and acknowledged in-office.',
    href: '#',
    badge: 'In-office',
  },
];

const INSTRUCTIONS: ResourceLink[] = [
  { title: 'Wisdom Teeth Aftercare', href: '/patient-resources/wisdom-teeth-aftercare' },
  { title: 'Dental Implant Aftercare', href: '/patient-resources/implant-aftercare' },
  { title: 'Sedation Instructions', href: '/patient-resources/sedation-instructions' },
];

const INSURANCE_IN_NETWORK = [
  'Aetna Dental PPO (except Medicare dental plans)',
  'Ameritas Dental (Connection Dental)',
  'Assurant Dental PPO',
  'Blue Cross Blue Shield of NC Dental',
  'Cigna Dental (not in-network with all plans — call for details)',
  'Connection Dental Plans',
  'Coventry Dental',
  'Delta Dental PPO',
  'Denex',
  'GEHA Dental (through Connection Dental)',
  'Guardian Dental',
  'Lincoln Financial',
  'MetLife',
  'UnitedHealthcare Dental',
];

export default function PatientResourcesPage() {
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
              Registration, insurance &amp; financing, and instructions—so your visit is smooth and stress-free.
            </p>

            {/* Quick actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href={QUICK_ACTIONS[0].href} target="_blank" rel="noopener noreferrer">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  {QUICK_ACTIONS[0].title}
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href={QUICK_ACTIONS[1].href}>{QUICK_ACTIONS[1].title}</Link>
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
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top row: Forms / Instructions / What to bring */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Forms */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Forms &amp; Documents</h2>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Patient registration is online. Remaining forms are completed in-office.
              </p>

              <ul className="mt-5 space-y-3">
                {FORMS.map((item) => (
                  <li key={item.title}>
                    <div className="flex items-start justify-between rounded-lg border border-gray-100 px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-900">{item.title}</p>
                        {item.description && (
                          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                        )}
                      </div>
                      {item.badge ? (
                        <span className="mt-1 inline-flex items-center rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-700">
                          {item.badge}
                        </span>
                      ) : (
                        <ExternalLink className="mt-1 h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl bg-stone-50 p-4">
                <p className="text-sm font-medium text-gray-900">Patient Registration</p>
                <p className="mt-1 text-sm text-gray-600">
                  Complete registration paperwork before your appointment.
                </p>
                <div className="mt-3">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={PATIENT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                      Start Registration
                    </a>
                  </Button>
                </div>
              </div>
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
              <p className="mt-3 text-sm text-gray-600">A quick checklist for a smooth visit.</p>
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
                  Call our office and we’ll point you to the right info.
                </p>
              </div>
            </div>
          </div>

          {/* Insurance + Financing (the missing chunk) */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Insurance */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Insurance Accepted</h2>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                We are in-network dental providers for the plans below. If your plan isn’t listed, we can still submit
                claims as a courtesy. Out-of-network benefits may differ.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {INSURANCE_IN_NETWORK.map((name) => (
                  <div
                    key={name}
                    className="rounded-lg border border-gray-100 bg-white px-3 py-2 text-sm text-gray-700"
                  >
                    {name}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-stone-50 p-4 text-sm text-gray-700">
                Questions about eligibility or benefits? You can call the member services number on your insurance card
                or contact our office.
              </div>
            </div>

            {/* Financing */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Financial Policy</h2>
              </div>

              <div className="mt-4 space-y-4 text-sm text-gray-700">
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="font-medium text-gray-900">Payment options</p>
                  <p className="mt-1">
                    For your convenience, we accept major credit cards (Visa, Mastercard, American Express) and
                    CareCredit.
                  </p>
                </div>

                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="font-medium text-gray-900">Estimating your portion</p>
                  <p className="mt-1">
                    If you have insurance, we’ll obtain an estimate of benefits prior to scheduled procedures. The
                    estimate is based on information provided by your insurance and is not a guarantee of coverage or
                    payment. We collect the estimated patient portion on the date of service.
                  </p>
                </div>

                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="font-medium text-gray-900">After insurance processes</p>
                  <p className="mt-1">
                    We file services to insurance as a courtesy. Any remaining balance after processing becomes patient
                    responsibility. Deductibles and co-insurance may apply, and allowed amounts may differ from office
                    fees.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="tel:704-541-3603" className="w-full">
                  <Button variant="outline" className="w-full justify-center">
                    Charlotte Billing: (704) 541-3603
                  </Button>
                </a>
                <a href="tel:704-983-2502" className="w-full">
                  <Button variant="outline" className="w-full justify-center">
                    Albemarle Billing: (704) 983-2502
                  </Button>
                </a>
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
