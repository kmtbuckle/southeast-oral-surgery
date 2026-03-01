import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/cta-button';

export const metadata: Metadata = {
  title: 'Facial Trauma Treatment in Charlotte, NC | Southeast Oral Surgery',
  description: 'Emergency facial trauma treatment by board-certified oral surgeons in Charlotte, NC. Jaw fractures, facial lacerations, dental injuries. Hospital privileges at Novant & Atrium Health.',
};

const injuryTypes = [
  {
    title: 'Jaw Fractures',
    description: 'Fractures of the mandible (lower jaw) or maxilla (upper jaw) requiring surgical repair.',
  },
  {
    title: 'Facial Bone Fractures',
    description: 'Cheekbone, eye socket (orbital), and nasal fractures from accidents or sports injuries.',
  },
  {
    title: 'Dental Injuries',
    description: 'Knocked-out teeth, broken teeth, and tooth displacement requiring emergency care.',
  },
  {
    title: 'Soft Tissue Injuries',
    description: 'Lacerations and wounds to the face, lips, and mouth requiring repair.',
  },
];

const treatmentCapabilities = [
  'Emergency and same-day consultations available',
  'Full hospital privileges at Novant Health and Atrium Health',
  'Advanced 3D imaging for precise diagnosis',
  'Minimally invasive surgical techniques when possible',
  'Coordination with other specialists as needed',
  'Focus on both function and aesthetics',
];

export default function FacialTraumaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Emergency Care</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Facial Trauma Treatment in Charlotte, NC
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Facial injuries require prompt, expert care to ensure proper healing and minimize
              long-term complications. Our board-certified oral and maxillofacial surgeons are
              specially trained to treat injuries to the face, jaws, and mouth.
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

      {/* Emergency Notice - Standardized Dark Style */}
      <section className="bg-slate-900 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-900">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Emergency Facial Trauma?</h2>
              <p className="mt-2 text-slate-300">
                For severe facial injuries, go directly to the nearest emergency room. Our surgeons
                have full operating privileges at Novant Health and Atrium Health and can meet you there
                for urgent surgical care. For non-emergency injuries, call our office for same-day consultation.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="tel:704-541-3603">
                  <Button variant="secondary" className="bg-white text-slate-900 hover:bg-gray-100">
                    <Phone className="mr-2 h-4 w-4" />
                    Charlotte: (704) 541-3603
                  </Button>
                </a>
                <a href="tel:704-983-2502">
                  <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-900">
                    <Phone className="mr-2 h-4 w-4" />
                    Albemarle: (704) 983-2502
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Injuries */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Injuries We Treat</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Comprehensive care for all types of facial and dental trauma
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {injuryTypes.map((injury, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{injury.title}</h3>
                <p className="mt-2 text-gray-600">{injury.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Our Capabilities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Fully equipped to handle complex facial trauma cases
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {treatmentCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Why Choose an Oral Surgeon for Facial Trauma?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-400">
              Oral and maxillofacial surgeons complete 4-6 years of hospital-based surgical residency
              training after dental school. This specialized training includes extensive experience in
              treating facial injuries, making us uniquely qualified for this type of care.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">Specialized Training</h3>
              <p className="mt-2 text-slate-400">
                Years of residency training in facial surgery, anesthesia, and emergency care.
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">Hospital Privileges</h3>
              <p className="mt-2 text-slate-400">
                Full operating privileges at major hospitals for cases requiring hospitalization.
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">Comprehensive Approach</h3>
              <p className="mt-2 text-slate-400">
                Expert in both the function and aesthetics of facial reconstruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Need Facial Trauma Care?</h2>
          <p className="mt-4 text-lg text-white/80">
            Contact us immediately for emergency consultations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
