import {
  FileText,
  Clock,
  CreditCard,
  Shield,
  Pill,
  AlertCircle,
  CheckCircle,
  Phone,
  Car,
  Coffee,
  Cigarette,
  Utensils,
  Snowflake,
  Droplets,
  BedDouble,
  Stethoscope,
  Lock,
  Users,
  Accessibility,
  AlertTriangle,
  Mail,
} from 'lucide-react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patient Resources | Southeast Oral & Maxillofacial Surgery | Charlotte NC',
  description: 'Pre-operative and post-operative instructions, insurance information, financing options, downloadable patient forms, and new patient information for oral surgery in Charlotte and Albemarle, NC.',
};

const preOpInstructions = [
  {
    icon: Coffee,
    title: 'Fasting Requirements',
    content:
      'Do not eat or drink anything (including water) for eight hours before your scheduled surgery time. This is critical for your safety during sedation.',
  },
  {
    icon: Pill,
    title: 'Medications',
    content:
      'Inform us of all medications you are taking, including over-the-counter drugs and supplements. You may be asked to temporarily discontinue blood thinners or certain medications before surgery.',
  },
  {
    icon: Cigarette,
    title: 'No Smoking',
    content:
      'Refrain from smoking for at least 12 hours before surgery (24 hours preferred). Smoking significantly interferes with healing and increases the risk of complications.',
  },
  {
    icon: Car,
    title: 'Transportation',
    content:
      'Arrange for a responsible adult to drive you home after the procedure if you receive IV sedation. You cannot drive yourself, take a taxi, or ride-share alone.',
  },
];

const postOpCareTabs = [
  {
    title: 'First 24 Hours',
    items: [
      { icon: Droplets, text: 'Bite firmly on gauze packs for 30 minutes to control bleeding. Change gauze as needed.' },
      { icon: Snowflake, text: 'Apply ice packs to your face (20 minutes on, 20 minutes off) to reduce swelling.' },
      { icon: BedDouble, text: 'Rest with your head elevated. Avoid strenuous activities.' },
      { icon: Utensils, text: 'Eat soft, cool foods. Avoid hot liquids and do not use straws.' },
      { icon: Pill, text: 'Take prescribed medications as directed for pain and infection prevention.' },
    ],
  },
  {
    title: '48-72 Hours',
    items: [
      { icon: Snowflake, text: 'Switch from cold to warm compresses to help reduce remaining swelling.' },
      { icon: Utensils, text: 'Gradually introduce soft solid foods. Continue to avoid hard or crunchy foods.' },
      { icon: Droplets, text: 'Begin gentle salt water rinses (1/2 teaspoon salt in 8oz warm water) after meals.' },
      { icon: Stethoscope, text: 'Monitor for signs of infection: fever, increased swelling, or persistent pain.' },
    ],
  },
  {
    title: 'First Week',
    items: [
      { icon: CheckCircle, text: 'Sutures typically dissolve within 5-7 days. Do not pull at them.' },
      { icon: Utensils, text: 'Continue soft diet until cleared by your surgeon.' },
      { icon: Droplets, text: 'Maintain gentle oral hygiene. Brush carefully around surgical sites.' },
      { icon: Phone, text: 'Call immediately if you experience excessive bleeding, severe pain, or fever.' },
    ],
  },
];

const downloadableForms = [
  {
    title: 'New Patient Registration',
    description: 'Basic patient information and contact details',
  },
  {
    title: 'Medical History Form',
    description: 'Comprehensive health and medication history',
  },
  {
    title: 'HIPAA Privacy Notice',
    description: 'Required privacy acknowledgment',
  },
  {
    title: 'Consent for Treatment',
    description: 'Informed consent documentation',
  },
];

export default function PatientResourcesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">For Our Patients</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Patient <span className="text-primary">Resources</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Everything you need to prepare for your procedure and ensure a smooth recovery
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-b border-gray-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#new-patients" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary">
              New Patients
            </a>
            <a href="#pre-op" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary">
              Pre-Op Instructions
            </a>
            <a href="#post-op" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary">
              Post-Op Care
            </a>
            <a href="#forms" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary">
              Patient Forms
            </a>
            <a href="#insurance" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary">
              Insurance & Financing
            </a>
          </div>
        </div>
      </section>

      {/* New Patient Information */}
      <section id="new-patients" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Welcome to Our Practice
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We appreciate you choosing Southeast Oral & Maxillofacial Surgery Associates
                for your surgical care. Our team is dedicated to making your experience as
                comfortable and efficient as possible.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Arrive 15 Minutes Early</h3>
                    <p className="mt-1 text-gray-600">
                      Please arrive 15 minutes before your scheduled appointment to complete
                      any remaining paperwork.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bring Required Documents</h3>
                    <p className="mt-1 text-gray-600">
                      Photo ID, insurance card, referral (if applicable), list of current
                      medications, and any relevant imaging or X-rays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bring a Companion</h3>
                    <p className="mt-1 text-gray-600">
                      If you&apos;re scheduled for a procedure involving sedation, please bring
                      a responsible adult who can drive you home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-stone-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Office Hours</h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Monday - Thursday</span>
                  <span className="font-medium text-gray-900">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Friday</span>
                  <span className="font-medium text-gray-900">8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Charlotte Office</p>
                    <p className="font-medium text-gray-900">3111 Springbank Lane, Suite A</p>
                    <a href="tel:704-541-3603" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                      <Phone className="h-3.5 w-3.5" />
                      (704) 541-3603
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Albemarle Office</p>
                    <p className="font-medium text-gray-900">1003 North Sixth Street</p>
                    <a href="tel:704-983-2502" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                      <Phone className="h-3.5 w-3.5" />
                      (704) 983-2502
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Operative Instructions */}
      <section id="pre-op" className="scroll-mt-24 bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Before Your Surgery
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Important steps to prepare for your procedure
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {preOpInstructions?.map?.((item, index) => {
              const Icon = item?.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item?.title}</h3>
                      <p className="mt-2 text-gray-600">{item?.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-xl bg-amber-50 border border-amber-200 p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Questions About Your Procedure?
                </h3>
                <p className="mt-2 text-gray-700">
                  Our team is here to help. Contact us with any concerns before your surgery:
                </p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-6">
                  <a href="tel:704-541-3603" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
                    <Phone className="h-4 w-4" />
                    Charlotte: (704) 541-3603
                  </a>
                  <a href="tel:704-983-2502" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
                    <Phone className="h-4 w-4" />
                    Albemarle: (704) 983-2502
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Operative Care */}
      <section id="post-op" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              After Your Surgery
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow these guidelines for optimal healing and recovery
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {postOpCareTabs.map((tab, tabIndex) => (
              <div key={tabIndex} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="mb-6 text-xl font-semibold text-gray-900">{tab.title}</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {tab.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Warning - Standardized Blue/Dark Style */}
          <div className="mt-10 rounded-xl bg-slate-900 p-6 text-white">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-900">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  When to Call Us Immediately
                </h3>
                <ul className="mt-3 space-y-1.5 text-slate-300">
                  <li>• Excessive bleeding that doesn&apos;t stop with pressure</li>
                  <li>• Severe pain not relieved by medication</li>
                  <li>• Fever over 101°F</li>
                  <li>• Difficulty breathing or swallowing</li>
                  <li>• Allergic reaction to medication</li>
                </ul>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <a href="tel:704-541-3603" className="inline-flex items-center gap-2 font-medium text-white hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    Charlotte: (704) 541-3603
                  </a>
                  <a href="tel:704-983-2502" className="inline-flex items-center gap-2 font-medium text-white hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    Albemarle: (704) 983-2502
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Forms - Improved Layout */}
      <section id="forms" className="scroll-mt-24 bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Patient Forms
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete these forms before your appointment to save time
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            {/* Forms Notice */}
            <div className="mb-8 rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">How to Get Your Forms</h3>
                  <p className="mt-2 text-gray-600">
                    Patient forms are completed in our office to ensure accuracy and compliance. 
                    Please arrive <strong>15 minutes early</strong> for your first appointment to complete paperwork.
                  </p>
                  <p className="mt-3 text-gray-600">
                    <strong>Prefer to complete forms in advance?</strong> Call us and we&apos;ll mail them to you:
                  </p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-6">
                    <a href="tel:704-541-3603" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
                      <Phone className="h-4 w-4" />
                      Charlotte: (704) 541-3603
                    </a>
                    <a href="tel:704-983-2502" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
                      <Phone className="h-4 w-4" />
                      Albemarle: (704) 983-2502
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form List */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {downloadableForms.map((form, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{form.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{form.description}</p>
                  </div>
                  <div className="flex-shrink-0 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-gray-600">
                    In-office
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Financing */}
      <section id="insurance" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Insurance & Financing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Making quality oral surgery accessible and affordable
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Insurance */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Insurance Accepted</h3>
              <p className="mt-4 text-gray-600">
                We are in-network with most major insurance providers including:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  Aetna Dental PPO
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  Ameritas Dental
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  Delta Dental
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  Cigna
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  MetLife
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  Many other major carriers
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                We recommend contacting your insurance provider to verify coverage and understand
                your benefits before your appointment.
              </p>
            </div>

            {/* Financing */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Financing Options</h3>
              <p className="mt-4 text-gray-600">
                We believe financial concerns should never prevent you from receiving necessary
                care. We offer several payment options:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  Flexible payment plans
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  CareCredit healthcare financing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  Third-party financing available
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  All major credit cards accepted
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                  FSA/HSA accounts accepted
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Contact our office to discuss financing options that work for your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Accessibility - With proper IDs for footer links */}
      <section id="privacy" className="scroll-mt-24 bg-stone-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Your Privacy Matters</h3>
                <p className="mt-2 text-gray-600">
                  We are committed to protecting your personal health information in accordance
                  with HIPAA regulations. Your records are kept confidential and secure.
                </p>
              </div>
            </div>

            <div id="accessibility" className="scroll-mt-24 flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Accessibility className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Accessibility</h3>
                <p className="mt-2 text-gray-600">
                  Our offices are fully accessible. Please inform us of any special
                  accommodations you may need and we will do our best to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact - Standardized Blue/Dark Style */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary">
              <Phone className="h-8 w-8" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Post-Surgery Emergency?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Call us immediately if you experience excessive bleeding, severe pain, or other
            concerning symptoms
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="tel:704-541-3603">
              <Button size="lg" variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100 sm:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                Charlotte: (704) 541-3603
              </Button>
            </a>
            <a href="tel:704-983-2502">
              <Button size="lg" variant="outline" className="w-full border-white bg-transparent text-white hover:bg-white hover:text-primary sm:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                Albemarle: (704) 983-2502
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
