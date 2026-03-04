import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  ClipboardList,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Clock,
  FileText,
  Users,
  Timer,
  Pill,
  CigaretteOff,
  Car,
  AlertTriangle,
  Droplet,
  Snowflake,
  Bed,
  Utensils,
  Stethoscope,
  Lock,
  Accessibility,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Resources | Southeast Oral Surgery',
  description:
    'Patient registration, insurance & financing information, and pre- and post-operative instructions for Southeast Oral Surgery in Charlotte and Albemarle, NC.',
};

const PATIENT_REGISTRATION_URL =
  'https://mysecurepractice.com/Truform/588916e4-f60d-4967-ad8e-490f84f81445/Submission/Create';

const ANCHORS = [
  { label: 'New Patients', href: '#new-patients' },
  { label: 'Insurance & Financing', href: '#insurance-financing' },
  { label: 'Pre-Op Instructions', href: '#pre-op' },
  { label: 'Post-Op Care', href: '#post-op' },
];

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

export default function PatientResourcesPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
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
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* WELCOME / NEW PATIENTS */}
          <div id="new-patients" className="scroll-mt-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              {/* Left */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Welcome to Our Practice
                </h2>
                <p className="mt-4 max-w-2xl text-base text-gray-600">
                  We appreciate you choosing Southeast Oral Surgery. Our team is dedicated to making
                  your visit as comfortable and efficient as possible.
                </p>

                {/* Patient Registration card */}
                <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                  <h4 className="text-base font-semibold text-gray-900">Patient Registration</h4>
                  <p className="mt-2 text-base text-gray-600">
                    Please complete your registration paperwork before your appointment to save time.
                    Please make sure to press the Complete and Send buttons at the bottom.
                  </p>

                  <div className="mt-5">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <a href={PATIENT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                        Complete Patient Registration
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Icon rows (NO duplicate boxes) */}
                <div className="mt-7 space-y-7">
                  {/* Arrive early */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="text-base font-semibold text-gray-900">Arrive 15 Minutes Early</h4>
                      <p className="mt-1 text-base text-gray-600">
                        Please arrive 15 minutes before your scheduled appointment to complete any
                        remaining paperwork. These forms are completed in our office to ensure accuracy
                        and compliance:
                      </p>
                      <ul className="mt-3 space-y-2 text-base text-gray-700">
                        {['Medical History Form', 'Consent for Treatment', 'HIPAA Privacy Notice'].map(
                          (item) => (
                            <li key={item} className="flex gap-2">
                              <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                              <span>{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Required documents */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="text-base font-semibold text-gray-900">Bring Required Documents</h4>
                      <ul className="mt-3 space-y-2 text-base text-gray-700">
                        {[
                          'Photo ID',
                          'Insurance card',
                          'Referral paperwork',
                          'List of current medications',
                          'Any relevant imaging or X-rays',
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Companion */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="text-base font-semibold text-gray-900">Bring a Companion</h4>
                      <p className="mt-1 text-base text-gray-600">
                        If you’re scheduled for a procedure involving sedation, please bring a responsible
                        adult who can drive you home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: PHOTO */}
              <div className="rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-100">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[360px] lg:h-[520px]">
                  <Image
                    src="/images/IMG_0225.jpeg"
                    alt="Southeast Oral Surgery building"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* INSURANCE + FINANCING (treatment: header + 2 cards side-by-side) */}
          <div id="insurance-financing" className="mt-16 scroll-mt-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Insurance &amp; Financing
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
                Making quality oral surgery accessible and affordable
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Insurance */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Insurance Accepted</h3>

                <p className="mt-4 text-base text-gray-600">
                  We’re in-network with most major dental insurance plans, including:
                </p>

                <ul className="mt-5 space-y-3 text-base text-gray-700">
                  {INSURANCE_IN_NETWORK.map((name) => (
                    <li key={name} className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-base text-gray-700">
                  If your plan isn’t listed, we can still submit claims on your behalf — but we do not
                  accept negotiated adjustments for out-of-network plans. Out-of-network benefits may
                  be lower, and some managed care plans (DMO) may not cover services at all.
                </p>

                <div className="mt-6 rounded-xl bg-stone-50 p-4 text-base text-gray-700">
                  Not sure what your plan covers? Call the member services number on your insurance card,
                  or call our office and we’ll help you understand what to expect.
                </div>
              </div>

              {/* Financing */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Financing Options</h3>

                <p className="mt-4 text-base text-gray-600">
                  We believe financial concerns should never prevent you from receiving necessary care.
                  We’ll work with you to review options and find a plan that fits your budget.
                </p>

                <ul className="mt-6 space-y-3 text-base text-gray-700">
                  {[
                    'Flexible payment options',
                    'CareCredit healthcare financing',
                    'Third-party financing available',
                    'All major credit cards accepted',
                    'FSA/HSA accounts accepted',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {/* No phone numbers here (per your direction) */}
              </div>
            </div>
          </div>

          {/* PRE-OP */}
          <div id="pre-op" className="mt-20 scroll-mt-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Before Your Surgery
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
                Important steps to prepare for your procedure
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {[
                {
                  title: 'Fasting Requirements',
                  icon: <Timer className="h-6 w-6" />,
                  body:
                    'Do not eat or drink anything (including water) for eight hours before your scheduled surgery time. This is critical for your safety during sedation.',
                },
                {
                  title: 'Medications',
                  icon: <Pill className="h-6 w-6" />,
                  body:
                    'Inform us of all medications you are taking, including over-the-counter drugs and supplements. You may be asked to temporarily discontinue blood thinners or certain medications before surgery.',
                },
                {
                  title: 'No Smoking',
                  icon: <CigaretteOff className="h-6 w-6" />,
                  body:
                    'Refrain from smoking for at least 12 hours before surgery (24 hours preferred). Smoking significantly interferes with healing and increases the risk of complications.',
                },
                {
                  title: 'Transportation',
                  icon: <Car className="h-6 w-6" />,
                  body:
                    'Arrange for a responsible adult to drive you home after the procedure if you receive IV sedation. You cannot drive yourself, take a taxi, or ride-share alone.',
                },
              ].map((tile) => (
                <div key={tile.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      {tile.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tile.title}</h3>
                      <p className="mt-2 text-base text-gray-600">{tile.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-700 ring-1 ring-amber-200">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-bold text-gray-900">Questions About Your Procedure?</h3>
                  <p className="mt-1 text-base text-gray-700">
                    Our team is here to help. Contact us with any concerns before your surgery:
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
                    <a
                      href="tel:704-541-3603"
                      className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-primary"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      Charlotte: (704) 541-3603
                    </a>
                    <a
                      href="tel:704-983-2502"
                      className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-primary"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      Albemarle: (704) 983-2502
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* POST-OP */}
          <div id="post-op" className="mt-20 scroll-mt-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                After Your Surgery
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
                Follow these guidelines for optimal healing and recovery
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {/* First 24 Hours */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-xl font-bold text-gray-900">First 24 Hours</h3>
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {[
                    { icon: <Droplet className="h-5 w-5" />, text: 'Bite firmly on gauze packs for 30 minutes to control bleeding. Change gauze as needed.' },
                    { icon: <Snowflake className="h-5 w-5" />, text: 'Apply ice packs to your face (20 minutes on, 20 minutes off) to reduce swelling.' },
                    { icon: <Bed className="h-5 w-5" />, text: 'Rest with your head elevated. Avoid strenuous activities.' },
                    { icon: <Utensils className="h-5 w-5" />, text: 'Eat soft, cool foods. Avoid hot liquids and do not use straws.' },
                    { icon: <Pill className="h-5 w-5" />, text: 'Take prescribed medications as directed for pain and infection prevention.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                        {item.icon}
                      </div>
                      <p className="text-base text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 48–72 Hours */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-xl font-bold text-gray-900">48–72 Hours</h3>
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {[
                    { icon: <Snowflake className="h-5 w-5" />, text: 'Switch from cold to warm compresses to help reduce remaining swelling.' },
                    { icon: <Utensils className="h-5 w-5" />, text: 'Gradually introduce soft solid foods. Continue to avoid hard or crunchy foods.' },
                    { icon: <Droplet className="h-5 w-5" />, text: 'Begin gentle salt water rinses (1/2 teaspoon salt in 8oz warm water) after meals.' },
                    { icon: <Stethoscope className="h-5 w-5" />, text: 'Monitor for signs of infection: fever, increased swelling, or persistent pain.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                        {item.icon}
                      </div>
                      <p className="text-base text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* First Week */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-xl font-bold text-gray-900">First Week</h3>
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {[
                    { icon: <CheckCircle className="h-5 w-5" />, text: 'Sutures typically dissolve within 5–7 days. Do not pull at them.' },
                    { icon: <Utensils className="h-5 w-5" />, text: 'Continue soft diet until cleared by your surgeon.' },
                    { icon: <Droplet className="h-5 w-5" />, text: 'Maintain gentle oral hygiene. Brush carefully around surgical sites.' },
                    { icon: <Phone className="h-5 w-5" />, text: 'Call immediately if you experience excessive bleeding, severe pain, or fever.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                        {item.icon}
                      </div>
                      <p className="text-base text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark callout */}
              <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold">When to Call Us Immediately</h3>
                    <ul className="mt-4 space-y-2 text-base text-white/90">
                      {[
                        "Excessive bleeding that doesn’t stop with pressure",
                        'Severe pain not relieved by medication',
                        'Fever over 101°F',
                        'Difficulty breathing or swallowing',
                        'Allergic reaction to medication',
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
                      <a
                        href="tel:704-541-3603"
                        className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-white/90"
                      >
                        <Phone className="h-4 w-4 text-white/90" />
                        Charlotte: (704) 541-3603
                      </a>
                      <a
                        href="tel:704-983-2502"
                        className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-white/90"
                      >
                        <Phone className="h-4 w-4 text-white/90" />
                        Albemarle: (704) 983-2502
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRIVACY + ACCESSIBILITY */}
          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Your Privacy Matters</h3>
                  <p className="mt-2 text-base text-gray-600">
                    We are committed to protecting your personal health information in accordance with HIPAA
                    regulations. Your records are kept confidential and secure.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Accessibility className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Accessibility</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Our offices are fully accessible. Please inform us of any special accommodations you may
                    need and we will do our best to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Removed the extra “Two convenient locations…” line (per your markup) */}
        </div>
      </section>
    </div>
  );
}
