import { Metadata } from 'next';
import {
  FileText,
  Phone,
  Printer,
  AlertTriangle,
  Upload,
  Award,
  Handshake,
  Clock,
  Building2,
  Download,
  Scan,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Referring Doctors | Southeast Oral & Maxillofacial Surgery | Charlotte NC',
  description:
    'Referral information for dental professionals. Download our referral slip, send referrals by fax, or call our team. Serving Charlotte and Albemarle, NC.',
};

const referralMethods = [
  {
    icon: Download,
    title: 'Referral Slip (PDF)',
    description:
      'Download and complete our referral slip. Send it with your patient, fax it to our office, or send it via email to imaging@omsnc.com.',
    cta: {
      label: 'Download PDF',
      href: '/referral-slip.pdf',
    },
  },
  {
    icon: Printer,
    title: 'Fax Referral',
    description:
      'Charlotte: (704) 541-3604 | Albemarle: (704) 983-2503. Secure fax available 24/7.',
  },
  {
    icon: Phone,
    title: 'Phone Referral',
    description:
      'Charlotte: (704) 541-3603 | Albemarle: (704) 983-2502. Our team is ready to assist.',
  },
];

const commitments = [
  {
    icon: Clock,
    title: 'Timely Communication',
    description:
      'We provide detailed consultation reports and post-operative summaries within 24-48 hours.',
  },
  {
    icon: Handshake,
    title: 'Patient Return',
    description:
      'All patients are returned to your care following treatment. We support continuity of care.',
  },
  {
    icon: Award,
    title: 'Board-Certified Care',
    description:
      'Your patients receive care from Diplomates of the American Board of Oral & Maxillofacial Surgery.',
  },
  {
    icon: Building2,
    title: 'Hospital Privileges',
    description:
      'Full operating privileges at Novant Health and Atrium Health for complex cases requiring hospitalization.',
  },
];

export default function ReferringDoctorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">
              For Dental Professionals
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Referral Information
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Partner with our board-certified oral surgeons for comprehensive surgical care. We are
              committed to timely communication and returning patients to your practice.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Methods */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            How to Refer a Patient
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {referralMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{method.title}</h3>
                  <p className="mt-2 text-gray-600">{method.description}</p>

                  {method.cta ? (
                    <div className="mt-4">
                      <a href={method.cta.href} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          <Download className="mr-2 h-4 w-4" />
                          {method.cta.label}
                        </Button>
                      </a>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Referrals */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-slate-900 p-6 text-white sm:p-8">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-900">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Emergency Referrals</h3>
                <p className="mt-2 text-slate-300">
                  For urgent surgical cases including facial trauma, severe infections, or post-operative
                  complications, please call our office directly. We prioritize emergency cases and can
                  often accommodate same-day consultations.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="tel:704-541-3603">
                    <Button variant="secondary" className="bg-white text-slate-900 hover:bg-gray-100">
                      <Phone className="mr-2 h-4 w-4" />
                      Charlotte: (704) 541-3603
                    </Button>
                  </a>
                  <a href="tel:704-983-2502">
                    <Button
                      variant="outline"
                      className="border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-900"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Albemarle: (704) 983-2502
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imaging Submission */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Upload className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Imaging Submission</h3>
                  <p className="mt-2 text-gray-600">
                    Radiographic images can be submitted electronically or brought by the patient. We accept
                    digital images via secure email or USB drive.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Panoramic and periapical radiographs
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      CBCT/3D imaging (DICOM format preferred)
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Email: imaging@omsnc.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Scan className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">3D Cone Beam CT Imaging</h3>
                  <p className="mt-2 text-gray-600">
                    Our offices are equipped with advanced CS 9300 3D imaging systems. If specialized imaging is
                    needed, we can acquire CBCT scans during the patient&apos;s consultation.
                  </p>
                  <p className="mt-3 text-gray-600">
                    3D imaging enables precise treatment planning for implants, impactions, pathology, and
                    orthognathic surgery cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our Commitment to Referring Practices
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We view our relationship with referring doctors as a partnership built on trust, communication,
              and shared commitment to patient care.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{commitment.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{commitment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-white/90">Questions about a referral? Our team is here to help.</p>
            <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <a href="tel:704-541-3603" className="text-lg font-semibold text-white hover:text-white/80">
                Charlotte: (704) 541-3603
              </a>
              <span className="hidden text-white/50 sm:inline">|</span>
              <a href="tel:704-983-2502" className="text-lg font-semibold text-white hover:text-white/80">
                Albemarle: (704) 983-2502
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
