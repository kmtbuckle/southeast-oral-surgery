import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  ClipboardList,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Lock,
  Accessibility,
  Timer,
  Pill,
  CigaretteOff,
  Car,
  AlertTriangle,
  Phone,
  Droplets,
  Snowflake,
  Utensils,
  BedDouble,
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

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-base text-gray-700">
      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
      <span>{children}</span>
    </li>
  );
}

function IconTile({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-base text-gray-600">{body}</p>
        </div>
      </div>
    </div>
  );
}

function PostOpRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 ring-1 ring-green-100">
        {icon}
      </div>
      <p className="text-base text-gray-700">{text}</p>
    </div>
  );
}

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

            {/* (Removed “Prefer to call?” block per your note) */}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* NEW PATIENTS ANCHOR (but no separate section header) */}
          <div id="new-patients" className="scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to Our Practice
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              We appreciate you choosing Southeast Oral Surgery. Our team is dedicated to making your
              visit as comfortable and efficient as possible.
            </p>

            {/* 4 areas directly under Welcome */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Patient Registration */}
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                <h4 className="text-lg font-semibold text-gray-900">Patient Registration</h4>
                <p className="mt-3 text-base text-gray-600">
                  Please complete your registration paperwork before your appointment to save time.
                  Please make sure to press the Complete and Send buttons at the bottom.
                </p>

                <div className="mt-6">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={PATIENT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                      Complete Patient Registration
                    </a>
                  </Button>
                </div>
              </div>

              {/* Bring Required Documents + Bring a Companion */}
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Bring Required Documents</h4>
                    <ul className="mt-4 space-y-3">
                      <CheckItem>Photo ID</CheckItem>
                      <CheckItem>Insurance card</CheckItem>
                      <CheckItem>Referral paperwork</CheckItem>
                      <CheckItem>List of current medications</CheckItem>
                      <CheckItem>Any relevant imaging or X-rays</CheckItem>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-stone-50 p-5 ring-1 ring-stone-100">
                    <h4 className="text-lg font-semibold text-gray-900">Bring a Companion</h4>
                    <p className="mt-3 text-base text-gray-700">
                      If you&apos;re scheduled for a procedure involving sedation, please bring a
                      responsible adult who can drive you home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrive 15 Minutes Early */}
            <div className="mt-8 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
              <h4 className="text-lg font-semibold text-gray-900">Arrive 15 Minutes Early</h4>
              <p className="mt-3 text-base text-gray-600">
                Please arrive 15 minutes before your scheduled appointment to complete any remaining
                paperwork. These forms are completed in our office to ensure accuracy and compliance:
              </p>

              <ul className="mt-5 space-y-3">
                <CheckItem>Medical History Form</CheckItem>
                <CheckItem>Consent for Treatment</CheckItem>
                <CheckItem>HIPAA Privacy Notice</CheckItem>
              </ul>
            </div>
          </div>

          {/* INSURANCE */}
          <div id="insurance" className="mt-14 scroll-mt-24">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Insurance Accepted
                </h2>
              </div>

              <p className="mt-4 text-base text-gray-600">
                We’re in-network with most major dental insurance plans, including:
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INSURANCE_IN_NETWORK.map((name) => (
                  <li
                    key={name}
                    className="flex gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 text-base text-gray-700"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base text-gray-700">
                If your plan isn’t listed, we can still submit claims on your behalf — but we do not
                accept negotiated adjustments for out-of-network plans. Out-of-network benefits may be
                lower, and some managed care plans (DMO) may not cover services at all.
              </p>

              <div className="mt-6 rounded-xl bg-stone-50 p-5 text-base text-gray-700 ring-1 ring-stone-100">
                Not sure what your plan covers? Call the member services number on your insurance
                card, or call our office and we’ll help you understand what to expect.
              </div>
            </div>
          </div>

          {/* FINANCING */}
          <div id="financing" className="mt-14 scroll-mt-24">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Financing Options
                </h2>
              </div>

              <p className="mt-4 text-base text-gray-600">
                We believe financial concerns should never prevent you from receiving necessary care.
                We’ll work with you to review options and find a plan that fits your budget.
              </p>

              <ul className="mt-6 space-y-3">
                <CheckItem>Flexible payment options</CheckItem>
                <CheckItem>CareCredit healthcare financing</CheckItem>
                <CheckItem>Third-party financing available</CheckItem>
                <CheckItem>All major credit cards accepted</CheckItem>
                <CheckItem>FSA/HSA accounts accepted</CheckItem>
              </ul>

              {/* No phone numbers here (per your request) */}
            </div>
          </div>

          {/* PRE-OP */}
          <div id="pre-op" className="mt-14 scroll-mt-24">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Before Your Surgery
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Important steps to prepare for your procedure
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <IconTile
                icon={<Timer className="h-6 w-6" />}
                title="Fasting Requirements"
                body="Do not eat or drink anything (including water) for eight hours before your scheduled surgery time. This is critical for your safety during sedation."
              />
              <IconTile
                icon={<Pill className="h-6 w-6" />}
                title="Medications"
                body="Inform us of all medications you are taking, including over-the-counter drugs and supplements. You may be asked to temporarily discontinue blood thinners or certain medications before surgery."
              />
              <IconTile
                icon={<CigaretteOff className="h-6 w-6" />}
                title="No Smoking"
                body="Refrain from smoking for at least 12 hours before surgery (24 hours preferred). Smoking significantly interferes with healing and increases the risk of complications."
              />
              <IconTile
                icon={<Car className="h-6 w-6" />}
                title="Transportation"
                body="Arrange for a responsible adult to drive you home after the procedure if you receive IV sedation. You cannot drive yourself, take a taxi, or ride-share alone."
              />
            </div>

            {/* Yellow callout */}
            <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-yellow-700">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Questions About Your Procedure?
                  </h3>
                  <p className="mt-2 text-base text-gray-700">
                    Our team is here to help. Contact us with any concerns before your surgery:
                  </p>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-6">
                    <a
                      href="tel:704-541-3603"
                      className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-primary"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      Charlotte: (704) 541-3603
                    </a>
                    <a
                      href="tel:704-983-2502"
                      className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-primary"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      Albemarle: (704) 983-2502
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* POST-OP */}
          <div id="post-op" className="mt-14 scroll-mt-24">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                After Your Surgery
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Follow these guidelines for optimal healing and recovery
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {/* First 24 Hours */}
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">First 24 Hours</h3>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <PostOpRow
                    icon={<Droplets className="h-5 w-5" />}
                    text="Bite firmly on gauze packs for 30 minutes to control bleeding. Change gauze as needed."
                  />
                  <PostOpRow
                    icon={<Snowflake className="h-5 w-5" />}
                    text="Apply ice packs to your face (20 minutes on, 20 minutes off) to reduce swelling."
                  />
                  <PostOpRow
                    icon={<BedDouble className="h-5 w-5" />}
                    text="Rest with your head elevated. Avoid strenuous activities."
                  />
                  <PostOpRow
                    icon={<Utensils className="h-5 w-5" />}
                    text="Eat soft, cool foods. Avoid hot liquids and do not use straws."
                  />
                  <PostOpRow
                    icon={<Pill className="h-5 w-5" />}
                    text="Take prescribed medications as directed for pain and infection prevention."
                  />
                </div>
              </div>

              {/* 48–72 Hours */}
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">48–72 Hours</h3>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <PostOpRow
                    icon={<Snowflake className="h-5 w-5" />}
                    text="Switch from cold to warm compresses to help reduce remaining swelling."
                  />
                  <PostOpRow
                    icon={<Utensils className="h-5 w-5" />}
                    text="Gradually introduce soft solid foods. Continue to avoid hard or crunchy foods."
                  />
                  <PostOpRow
                    icon={<Droplets className="h-5 w-5" />}
                    text="Begin gentle salt water rinses (1/2 teaspoon salt in 8oz warm water) after meals."
                  />
                  <PostOpRow
                    icon={<AlertTriangle className="h-5 w-5" />}
                    text="Monitor for signs of infection: fever, increased swelling, or persistent pain."
                  />
                </div>
              </div>

              {/* First Week */}
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">First Week</h3>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <PostOpRow
                    icon={<CheckCircle className="h-5 w-5" />}
                    text="Sutures typically dissolve within 5–7 days. Do not pull at them."
                  />
                  <PostOpRow
                    icon={<Utensils className="h-5 w-5" />}
                    text="Continue soft diet until cleared by your surgeon."
                  />
                  <PostOpRow
                    icon={<CheckCircle className="h-5 w-5" />}
                    text="Maintain gentle oral hygiene. Brush carefully around surgical sites."
                  />
                  <PostOpRow
                    icon={<Phone className="h-5 w-5" />}
                    text="Call immediately if you experience excessive bleeding, severe pain, or fever."
                  />
                </div>
              </div>

              {/* Dark callout */}
              <div className="rounded-2xl bg-slate-900 p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-2xl font-semibold">When to Call Us Immediately</h3>

                    <ul className="mt-5 space-y-3 text-base text-white/90">
                      <li>• Excessive bleeding that doesn&apos;t stop with pressure</li>
                      <li>• Severe pain not relieved by medication</li>
                      <li>• Fever over 101°F</li>
                      <li>• Difficulty breathing or swallowing</li>
                      <li>• Allergic reaction to medication</li>
                    </ul>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
                      <a
                        href="tel:704-541-3603"
                        className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-white/90"
                      >
                        <Phone className="h-5 w-5" />
                        Charlotte: (704) 541-3603
                      </a>
                      <a
                        href="tel:704-983-2502"
                        className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-white/90"
                      >
                        <Phone className="h-5 w-5" />
                        Albemarle: (704) 983-2502
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRIVACY + ACCESSIBILITY */}
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Your Privacy Matters</h3>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                We are committed to protecting your personal health information in accordance with
                HIPAA regulations. Your records are kept confidential and secure.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <Accessibility className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Accessibility</h3>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Our offices are fully accessible. Please inform us of any special accommodations you
                may need and we will do our best to assist you.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center text-sm text-gray-500">
            Two convenient locations serving Charlotte and Albemarle, NC.
          </div>
        </div>
      </section>
    </div>
  );
}
