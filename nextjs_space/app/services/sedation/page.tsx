import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/cta-button';

export const metadata: Metadata = {
  title: 'IV Sedation & Anesthesia in Charlotte, NC | Southeast Oral Surgery',
  description: 'Safe, comfortable IV sedation and anesthesia for oral surgery in Charlotte and Albemarle, NC. Board-certified oral surgeons trained in sedation administration.',
};

const sedationOptions = [
  {
    title: 'Local Anesthesia',
    description: 'Numbing medication injected at the surgical site. You remain fully awake but feel no pain during the procedure.',
    bestFor: 'Simple extractions, minor procedures',
  },
  {
    title: 'Nitrous Oxide',
    description: 'Inhaled sedation ("laughing gas") that helps you relax while remaining conscious. Effects wear off quickly.',
    bestFor: 'Mild anxiety, shorter procedures',
  },
  {
    title: 'IV Sedation',
    description: 'Medication administered through an IV creates a deeply relaxed, drowsy state. Most patients have little to no memory of the procedure.',
    bestFor: 'Wisdom teeth, implants, dental anxiety',
  },
  {
    title: 'General Anesthesia',
    description: 'Complete unconsciousness for complex procedures. Administered and monitored by trained surgical specialists.',
    bestFor: 'Complex surgeries, special needs patients',
  },
];

const safetyFeatures = [
  'Board-certified surgeons trained in anesthesia administration',
  'Continuous monitoring of vital signs throughout procedure',
  'State-of-the-art monitoring equipment in every operatory',
  'Emergency protocols and equipment always available',
  'Dedicated recovery area with attentive staff',
  'Thorough pre-operative health evaluation',
];

export default function SedationPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Patient Comfort</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                IV Sedation & Anesthesia in Charlotte, NC
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                We believe no one should avoid necessary oral surgery due to anxiety or fear.
                Our board-certified oral surgeons are specially trained in the administration
                of IV sedation and anesthesia, ensuring a safe, comfortable experience for
                every patient.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
              <Image
                src="https://cdn.abacus.ai/images/ba58715a-797b-4899-9c6d-aadaec44aadc.png"
                alt="Comfortable sedation dental office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sedation Options */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Sedation Options</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We offer multiple levels of sedation to match your needs and comfort level
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {sedationOptions.map((option, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                <p className="mt-2 text-gray-600">{option.description}</p>
                <p className="mt-4 text-sm text-primary">
                  <strong>Best for:</strong> {option.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IV Sedation Focus */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Why Most Patients Choose IV Sedation</h2>
              <p className="mt-4 text-gray-600">
                IV sedation is the most popular choice for oral surgery procedures like wisdom
                teeth removal and dental implant placement. Here&apos;s why:
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Deep Relaxation</p>
                    <p className="text-sm text-gray-600">You&apos;ll feel drowsy and relaxed, with little awareness of the procedure.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Amnesia Effect</p>
                    <p className="text-sm text-gray-600">Most patients remember nothing about the surgery afterward.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Precise Control</p>
                    <p className="text-sm text-gray-600">Sedation level can be adjusted throughout the procedure.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Quick Recovery</p>
                    <p className="text-sm text-gray-600">Effects wear off within hours. Most patients go home the same day.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">What to Expect</h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Before</p>
                    <p className="text-sm text-gray-600">Fast for 8 hours. Arrange a ride home. Wear comfortable clothing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">During</p>
                    <p className="text-sm text-gray-600">IV is placed, medication is administered, and you&apos;ll drift into relaxation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">After</p>
                    <p className="text-sm text-gray-600">You&apos;ll rest in recovery until alert enough to go home with your companion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold text-white">Your Safety Is Our Priority</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Our surgeons complete additional years of hospital-based training specifically
              in anesthesia administration
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready for a Comfortable Experience?</h2>
          <p className="mt-4 text-lg text-white/80">
            Don&apos;t let anxiety stop you from getting the care you need.
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
