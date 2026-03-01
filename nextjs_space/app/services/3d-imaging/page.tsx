import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/cta-button';

export const metadata: Metadata = {
  title: '3D Cone Beam CT Imaging in Charlotte, NC | Southeast Oral Surgery',
  description: 'Advanced 3D Cone Beam CT imaging for dental implants, wisdom teeth, and jaw surgery in Charlotte and Albemarle, NC. Precise diagnosis and treatment planning.',
};

const applications = [
  {
    title: 'Dental Implant Planning',
    description: 'Precise measurement of bone dimensions and quality to ensure optimal implant placement.',
  },
  {
    title: 'Wisdom Teeth Assessment',
    description: 'Clear visualization of tooth position relative to nerves and sinuses for safer extractions.',
  },
  {
    title: 'Jaw Surgery Planning',
    description: 'Detailed 3D models for computer-guided orthognathic surgery planning.',
  },
  {
    title: 'Pathology Evaluation',
    description: 'Identification and characterization of cysts, tumors, and other lesions.',
  },
  {
    title: 'TMJ Analysis',
    description: 'Assessment of temporomandibular joint structure and condition.',
  },
  {
    title: 'Airway Evaluation',
    description: 'Analysis of airway anatomy for sleep apnea treatment planning.',
  },
];

const benefits = [
  'Lower radiation dose than traditional CT scans',
  'Fast scan time (under 20 seconds)',
  'Immediate results available during your visit',
  'More precise diagnosis than 2D X-rays',
  'Better treatment planning and outcomes',
  'Comfortable, open scanning experience',
];

export default function ImagingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Advanced Diagnostics</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              3D Cone Beam CT Imaging in Charlotte, NC
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Our offices are equipped with the advanced CS 9300 3D imaging system, providing
              detailed three-dimensional views of your teeth, jawbone, and surrounding structures.
              This technology enables more precise diagnoses and better treatment planning.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <CTAButton text="Schedule Consultation" size="lg" />
              <div className="flex flex-col gap-2 sm:flex-row">
                <a href="tel:704-541-3603">
                  <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/5 sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" />
                    Charlotte: (704) 541-3603
                  </Button>
                </a>
                <a href="tel:704-983-2502">
                  <Button variant="outline" size="lg" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" />
                    Albemarle: (704) 983-2502
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CBCT */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">What is Cone Beam CT?</h2>
              <p className="mt-4 text-gray-600">
                Cone Beam Computed Tomography (CBCT) is a specialized type of X-ray technology
                that creates detailed 3D images of the teeth, soft tissues, nerve pathways, and
                bone in a single scan.
              </p>
              <p className="mt-4 text-gray-600">
                Unlike traditional dental X-rays that produce flat, 2D images, CBCT captures
                hundreds of images from different angles and combines them into a detailed 3D
                model that can be rotated and examined from any direction.
              </p>
              <p className="mt-4 text-gray-600">
                This allows our surgeons to see exactly what they&apos;re working with before
                your procedure begins, leading to more predictable outcomes and fewer surprises.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-xl bg-stone-50 p-12">
                <Scan className="mx-auto h-32 w-32 text-primary" />
                <p className="mt-4 text-center text-lg font-semibold text-gray-900">CS 9300 3D Imaging System</p>
                <p className="mt-2 text-center text-gray-600">Available at both Charlotte and Albemarle locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How We Use 3D Imaging</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              3D imaging enhances diagnosis and treatment planning across a wide range of procedures
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{app.title}</h3>
                <p className="mt-2 text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Benefits of 3D Imaging</h2>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">3D vs Traditional X-rays</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              See why 3D imaging provides superior diagnostic capabilities
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">Traditional 2D X-rays</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start space-x-2 text-slate-400">
                  <span className="text-slate-500">•</span>
                  <span>Flat, two-dimensional images</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-400">
                  <span className="text-slate-500">•</span>
                  <span>Limited depth perception</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-400">
                  <span className="text-slate-500">•</span>
                  <span>Overlapping structures obscure details</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-400">
                  <span className="text-slate-500">•</span>
                  <span>Multiple images needed for different angles</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-primary/20 p-6">
              <h3 className="text-lg font-semibold text-white">3D Cone Beam CT</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start space-x-2 text-slate-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span>Full 3D visualization from any angle</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span>Precise measurements in all dimensions</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span>Clear view of all structures without overlap</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span>Single scan captures everything needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready for Precise Diagnosis?</h2>
          <p className="mt-4 text-lg text-white/80">
            3D imaging is included in your consultation when clinically indicated.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
