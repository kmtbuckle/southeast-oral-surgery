import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  ClipboardList,
  Phone,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Lock,
  Accessibility,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Resources | Southeast Oral Surgery',
  description:
    'Patient registration, insurance & financing information, and pre- and post-operative instructions for Southeast Oral Surgery in Charlotte and Albemarle, NC.',
};

const PATIENT_REGISTRATION_URL =
  'https://mysecurepractice.com/Truform/588916e4-f60d-4967-ad8e-490f84f81445/Submission/Create';

const INSURANCE_IN_NETWORK = [
  'Aetna Dental PPO (except Medicare dental plans)',
  'Ameritas Dental (Connection Dental)',
  'Assurant Dental PPO',
  'Blue Cross Blue Shield of NC Dental',
  'Cigna Dental',
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

const ANCHORS = [
  { label: 'New Patients', href: '#new-patients' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'Financing', href: '#financing' },
  { label: 'Pre-Op Instructions', href: '#pre-op' },
  { label: 'Post-Op Care', href: '#post-op' },
];

export default function PatientResourcesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">
              For Our Patients
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Patient <span className="text-primary">Resources</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Everything you need to prepare for your visit and ensure a smooth recovery.
            </p>

            {/* Anchor chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {ANCHORS.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  {a.label}
                </a>
              ))}
            </div>

            {/* Quick actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href={PATIENT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  Patient Registration
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact#consultation-form">Request a Consultation</Link>
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

      {/* Content */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* NEW PATIENTS */}
          <div id="new-patients" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Welcome to Our Practice
            </h2>
            <p className="mt-3 max-w-3xl text-gray-600">
              We appreciate you choosing Southeast Oral Surgery. Our team is dedicated to making your
              visit as comfortable and efficient as possible.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Registration */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">New Patient Registration</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Please complete your registration paperwork before your appointment to save time.
                </p>

                <div className="mt-5">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={PATIENT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                      Complete Patient Registration
                    </a>
                  </Button>
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  If you have questions while completing registration, call our office and we’ll help.
                </p>
              </div>

              {/* Bring required documents + companion */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bring Required Documents</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        Photo ID
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        Insurance card
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        Referral paperwork
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        List of current medications
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        Any relevant imaging or X-rays
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-stone-50 p-4">
                    <h3 className="text-lg font-semibold text-gray-900">Bring a Companion</h3>
                    <p className="mt-2 text-sm text-gray-700">
                      If you&apos;re scheduled for a procedure involving sedation, please bring a responsible adult who can drive you home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrive 15 + in-office forms */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Arrive 15 Minutes Early</h3>
              <p className="mt-2 text-sm text-gray-600">
                Please arrive 15 minutes before your scheduled appointment to complete any remaining paperwork.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  'Medical History Form',
                  'Consent for Treatment',
                  'HIPAA Privacy Notice',
                ].map((title) => (
                  <div
                    key={title}
                    className="rounded-xl border border-gray-100 bg-white px-4 py-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-medium text-gray-900">{title}</p>
                      <span className="inline-flex items-center rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-700">
                        In-office
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-600">
                These forms are completed in our office to ensure accuracy and compliance.
              </p>
            </div>
          </div>

          {/* INSURANCE */}
          <div id="insurance" className="mt-14 scroll-mt-24">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Insurance Accepted</h2>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                We’re in-network with most major dental insurance plans, including:
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {INSURANCE_IN_NETWORK.map((name) => (
                  <div key={name} className="flex gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-gray-700">
                If your plan isn’t listed, we can still submit claims on your behalf — but we do not accept negotiated adjustments for out-of-network plans. Out-of-network benefits may be lower, and some managed care plans (DMO) may not cover services at all.
              </p>

              <div className="mt-5 rounded-xl bg-stone-50 p-4 text-sm text-gray-700">
                Not sure what your plan covers? Call the member services number on your insurance card, or call our office and we’ll help you understand what to expect.
              </div>
            </div>
          </div>

          {/* FINANCING */}
          <div id="financing" className="mt-14 scroll-mt-24">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Financing Options</h2>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                We believe financial concerns should never prevent you from receiving necessary care. We’ll work with you to review options and find a plan that fits your budget.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li><span className="font-semibold text-gray-900">Flexible payment options</span></li>
                <li><span className="font-semibold text-gray-900">CareCredit healthcare financing</span></li>
                <li><span className="font-semibold text-gray-900">Third-party financing available</span></li>
                <li><span className="font-semibold text-gray-900">All major credit cards accepted</span></li>
                <li><span className="font-semibold text-gray-900">FSA/HSA accounts accepted</span></li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="tel:704-541-3603" className="w-full">
                  <Button variant="outline" className="w-full justify-center">
                    Charlotte: (704) 541-3603
                  </Button>
                </a>
                <a href="tel:704-983-2502" className="w-full">
                  <Button variant="outline" className="w-full justify-center">
                    Albemarle: (704) 983-2502
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* PRE-OP */}
          <div id="pre-op" className="mt-14 scroll-mt-24">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Before Your Surgery</h2>
              <p className="mt-3 text-sm text-gray-600">
                Important steps to prepare for your procedure. Always follow the specific instructions provided by your surgeon.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="font-semibold text-gray-900">Fasting Requirements</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Do not eat or drink anything (including water) for eight hours before your scheduled surgery time.
                  </p>
                </div>
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="font-semibold text-gray-900">Medications</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Inform us of all medications you are taking, including over-the-counter drugs and supplements.
                  </p>
                </div>
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="font-semibold text-gray-900">No Smoking</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Refrain from smoking for at least 12 hours before surgery (24 hours preferred).
                  </p>
                </div>
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="font-semibold text-gray-900">Transportation</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Arrange for a responsible adult to drive you home after your procedure if you receive IV sedation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* POST-OP */}
          <div id="post-op" className="mt-14 scroll-mt-24">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">After Your Surgery</h2>
              <p className="mt-3 text-sm text-gray-600">
                Follow these guidelines for optimal healing and recovery. If you have concerns, call our office.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="font-semibold text-gray-900">When to Call Us Immediately</p>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      Excessive bleeding that doesn’t stop with pressure
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      Severe pain not relieved by medication
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      Fever over 101°F
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      Difficulty breathing or swallowing
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      Allergic reaction to medication
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
                    <a href="tel:704-541-3603" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary ring-1 ring-gray-200 hover:bg-primary/5">
                      Charlotte: (704) 541-3603
                    </a>
                    <a href="tel:704-983-2502" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary ring-1 ring-gray-200 hover:bg-primary/5">
                      Albemarle: (704) 983-2502
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRIVACY + ACCESSIBILITY */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Your Privacy Matters</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                We are committed to protecting your personal health information in accordance with HIPAA regulations. Your records are kept confidential and secure.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Accessibility className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Accessibility</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                Our offices are fully accessible. Please inform us of any special accommodations you may need and we will do our best to assist you.
              </p>
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
