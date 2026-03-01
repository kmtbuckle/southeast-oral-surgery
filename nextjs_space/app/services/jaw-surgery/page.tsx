import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/cta-button';

export const metadata: Metadata = {
  title: 'Jaw Surgery (Orthognathic) in Charlotte, NC | Southeast Oral Surgery',
  description: 'Corrective jaw surgery by board-certified oral surgeons in Charlotte and Albemarle, NC. Treatment for bite problems, facial asymmetry, TMJ disorders, and sleep apnea.',
};

const conditions = [
  {
    title: 'Bite Misalignment',
    description: 'Overbite, underbite, crossbite, or open bite that cannot be corrected with braces alone.',
  },
  {
    title: 'Facial Asymmetry',
    description: 'Uneven facial proportions caused by jaw development issues.',
  },
  {
    title: 'Sleep Apnea',
    description: 'Obstructive sleep apnea caused by jaw positioning that restricts the airway.',
  },
  {
    title: 'Difficulty Chewing',
    description: 'Inability to properly chew food due to misaligned jaws.',
  },
  {
    title: 'TMJ Disorders',
    description: 'Chronic jaw pain and dysfunction related to jaw structure.',
  },
  {
    title: 'Birth Defects',
    description: 'Cleft palate and other congenital conditions affecting the jaw.',
  },
];

const benefits = [
  'Improved bite function and chewing ability',
  'Enhanced facial balance and aesthetics',
  'Better breathing and potential relief from sleep apnea',
  'Reduced TMJ pain and dysfunction',
  'Improved speech clarity',
  'Long-lasting, permanent results',
];

export default function JawSurgeryPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Orthognathic Surgery</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Corrective Jaw Surgery in Charlotte, NC
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Orthognathic surgery corrects irregularities of the jaw bones and realigns the jaws
              and teeth to improve function and appearance. Our board-certified oral surgeons use
              advanced 3D imaging and computer-aided planning for precise, predictable results.
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

      {/* Conditions Treated */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Conditions We Treat</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Jaw surgery may be recommended for a variety of functional and aesthetic concerns
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{condition.title}</h3>
                <p className="mt-2 text-gray-600">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">The Jaw Surgery Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Jaw surgery is typically a collaborative effort between your orthodontist and oral surgeon
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Consultation</h3>
              <p className="mt-2 text-sm text-gray-600">
                Comprehensive evaluation with 3D imaging and treatment planning.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Orthodontics</h3>
              <p className="mt-2 text-sm text-gray-600">
                Braces to align teeth in preparation for surgery (typically 12-18 months).
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Surgery</h3>
              <p className="mt-2 text-sm text-gray-600">
                Jaw repositioning performed under general anesthesia (typically 2-4 hours).
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Recovery</h3>
              <p className="mt-2 text-sm text-gray-600">
                Healing period followed by final orthodontic adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Benefits of Jaw Surgery</h2>
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

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Considering Jaw Surgery?</h2>
          <p className="mt-4 text-lg text-white/80">
            Schedule a consultation to discuss your options with our experienced surgeons.
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
