import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  ClipboardList,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Lock,
  Accessibility as AccessibilityIcon,
  Clock,
  FileText,
  Users,
  AlertTriangle,
  Phone,
  Snowflake,
  Droplet,
  Bed,
  Pill,
  Utensils,
  Waves,
  Stethoscope,
  Wind,
  Thermometer,
  CigaretteOff,
  Car,
  Syringe,
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

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
      <span className="text-gray-700">{children}</span>
    </li>
  );
}

function IconRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
        {icon}
      </div>
      <div>
        <h4 className="text-base font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">{children}</p>
      </div>
    </div>
  );
}

function Tile({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{children}</p>
        </div>
      </div>
    </div>
  );
}

function AfterCard({
  title,
  itemsLeft,
  itemsRight,
}: {
  title: string;
  itemsLeft: { icon: React.ReactNode; text: string }[];
  itemsRight: { icon: React.ReactNode; text: string }[];
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ul className="space-y-4">
          {itemsLeft.map((i, idx) => (
            <li key={idx} className="flex gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
                {i.icon}
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{i.text}</p>
            </li>
          ))}
        </ul>

        <ul className="space-y-4">
          {itemsRight.map((i, idx) => (
            <li key={idx} className="flex gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
                {i.icon}
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{i.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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

      {/* NEW PATIENTS / WELCOME */}
      <section id="new-patients" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left: content */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to Our Practice
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                We appreciate you choosing Southeast Oral Surgery. Our team is dedicated to making
                your visit as comfortable and efficient as possible.
              </p>

              <div className="mt-8 space-y-7">
                <div>
                  <h4 className="text-base font-semibold text-gray-900">Patient Registration</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Please complete your registration paperwork before your appointment to save
                    time. Please make sure to press the Complete and Send buttons at the bottom.
                  </p>
                  <div className="mt-4">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href={PATIENT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                        Complete Patient Registration
                      </a>
                    </Button>
                  </div>
                </div>

                <IconRow icon={<FileText className="h-5 w-5" />} title="Bring Required Documents">
                  Photo ID, insurance card, referral paperwork, list of current medications, and any
                  relevant imaging or X-rays.
                </IconRow>

                <IconRow icon={<Users className="h-5 w-5" />} title="Bring a Companion">
                  If you&apos;re scheduled for a procedure involving sedation, please bring a
                  responsible adult who can drive you home.
                </IconRow>

                <IconRow icon={<Clock className="h-5 w-5" />} title="Arrive 15 Minutes Early">
                  Please arrive 15 minutes before your scheduled appointment to complete any
                  remaining paperwork. These forms are completed in our office to ensure accuracy
                  and compliance:
                  <ul className="mt-3 space-y-2">
                    <CheckRow>Medical History Form</CheckRow>
                    <CheckRow>Consent for Treatment</CheckRow>
                    <CheckRow>HIPAA Privacy Notice</CheckRow>
                  </ul>
                </IconRow>
              </div>
            </div>

            {/* Right: photo card */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/IMG_0225.jpeg"
                  alt="Southeast Oral Surgery building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE + FINANCING BAND */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Insurance &amp; Financing
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Making quality oral surgery accessible and affordable
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Insurance */}
            <div id="insurance" className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Insurance Accepted</h3>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                We’re in-network with most major dental insurance plans, including:
              </p>

              <ul className="mt-5 space-y-3">
                {INSURANCE_IN_NETWORK.map((name) => (
                  <li key={name} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <span className="text-sm text-gray-700">{name}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-gray-700">
                If your plan isn’t listed, we can still submit claims on your behalf — but we do not
                accept negotiated adjustments for out-of-network plans. Out-of-network benefits may
                be lower, and some managed care plans (DMO) may not cover services at all.
              </p>

              <div className="mt-6 rounded-xl bg-stone-50 p-4 text-sm text-gray-700">
                Not sure what your plan covers? Call the member services number on your insurance
                card, or call our office and we’ll help you understand what to expect.
              </div>
            </div>

            {/* Financing */}
            <div id="financing" className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Financing Options</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                We believe financial concerns should never prevent you from receiving necessary
                care. We’ll work with you to review options and find a plan that fits your budget.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-700">Flexible payment options</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-700">CareCredit healthcare financing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-700">Third-party financing available</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-700">All major credit cards accepted</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-700">FSA/HSA accounts accepted</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-OP (WHITE BAND) */}
      <section id="pre-op" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Before Your Surgery</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Important steps to prepare for your procedure
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Tile icon={<Syringe className="h-6 w-6" />} title="Fasting Requirements">
              Do not eat or drink anything (including water) for eight hours before your scheduled
              surgery time. This is critical for your safety during sedation.
            </Tile>

            <Tile icon={<Pill className="h-6 w-6" />} title="Medications">
              Inform us of all medications you are taking, including over-the-counter drugs and
              supplements. You may be asked to temporarily discontinue blood thinners or certain
              medications before surgery.
            </Tile>

            <Tile icon={<CigaretteOff className="h-6 w-6" />} title="No Smoking">
              Refrain from smoking for at least 12 hours before surgery (24 hours preferred).
              Smoking significantly interferes with healing and increases the risk of complications.
            </Tile>

            <Tile icon={<Car className="h-6 w-6" />} title="Transportation">
              Arrange for a responsible adult to drive you home after the procedure if you receive
              IV sedation. You cannot drive yourself, take a taxi, or ride-share alone.
            </Tile>
          </div>

          {/* Yellow callout */}
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-8">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-semibold text-gray-900">Questions About Your Procedure?</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Our team is here to help. Contact us with any concerns before your surgery:
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <a
                    href="tel:704-541-3603"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    Charlotte: (704) 541-3603
                  </a>
                  <a
                    href="tel:704-983-2502"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    Albemarle: (704) 983-2502
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POST-OP (STONE BAND) */}
      <section id="post-op" className="scroll-mt-24 bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">After Your Surgery</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Follow these guidelines for optimal healing and recovery
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <AfterCard
              title="First 24 Hours"
              itemsLeft={[
                { icon: <Droplet className="h-4 w-4" />, text: 'Bite firmly on gauze packs for 30 minutes to control bleeding. Change gauze as needed.' },
                { icon: <Bed className="h-4 w-4" />, text: 'Rest with your head elevated. Avoid strenuous activities.' },
                { icon: <Pill className="h-4 w-4" />, text: 'Take prescribed medications as directed for pain and infection prevention.' },
              ]}
              itemsRight={[
                { icon: <Snowflake className="h-4 w-4" />, text: 'Apply ice packs to your face (20 minutes on, 20 minutes off) to reduce swelling.' },
                { icon: <Utensils className="h-4 w-4" />, text: 'Eat soft, cool foods. Avoid hot liquids and do not use straws.' },
              ]}
            />

            <AfterCard
              title="48–72 Hours"
              itemsLeft={[
                { icon: <Snowflake className="h-4 w-4" />, text: 'Switch from cold to warm compresses to help reduce remaining swelling.' },
                { icon: <Waves className="h-4 w-4" />, text: 'Begin gentle salt water rinses (1/2 teaspoon salt in 8oz warm water) after meals.' },
              ]}
              itemsRight={[
                { icon: <Utensils className="h-4 w-4" />, text: 'Gradually introduce soft solid foods. Continue to avoid hard or crunchy foods.' },
                { icon: <Stethoscope className="h-4 w-4" />, text: 'Monitor for signs of infection: fever, increased swelling, or persistent pain.' },
              ]}
            />

            <AfterCard
              title="First Week"
              itemsLeft={[
                { icon: <CheckCircle className="h-4 w-4" />, text: 'Sutures typically dissolve within 5–7 days. Do not pull at them.' },
                { icon: <CheckCircle className="h-4 w-4" />, text: 'Maintain gentle oral hygiene. Brush carefully around surgical sites.' },
              ]}
              itemsRight={[
                { icon: <Utensils className="h-4 w-4" />, text: 'Continue soft diet until cleared by your surgeon.' },
                { icon: <Phone className="h-4 w-4" />, text: 'Call immediately if you experience excessive bleeding, severe pain, or fever.' },
              ]}
            />

            {/* Dark callout */}
            <div className="rounded-2xl bg-slate-900 p-10 text-white shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                  <AlertTriangle className="h-6 w-6" />
                </div>

                <div className="w-full">
                  <h3 className="text-2xl font-semibold">When to Call Us Immediately</h3>

                  <ul className="mt-6 space-y-3 text-white/85">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                      Excessive bleeding that doesn&apos;t stop with pressure
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                      Severe pain not relieved by medication
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                      Fever over 101°F
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                      Difficulty breathing or swallowing
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                      Allergic reaction to medication
                    </li>
                  </ul>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8 text-white/90">
                    <a href="tel:704-541-3603" className="inline-flex items-center gap-2 hover:text-white">
                      <Phone className="h-4 w-4" />
                      Charlotte: (704) 541-3603
                    </a>
                    <a href="tel:704-983-2502" className="inline-flex items-center gap-2 hover:text-white">
                      <Phone className="h-4 w-4" />
                      Albemarle: (704) 983-2502
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRIVACY + ACCESSIBILITY (white cards on stone band) */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Your Privacy Matters</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                We are committed to protecting your personal health information in accordance with
                HIPAA regulations. Your records are kept confidential and secure.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <AccessibilityIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Accessibility</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Our offices are fully accessible. Please inform us of any special accommodations you
                may need and we will do our best to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
