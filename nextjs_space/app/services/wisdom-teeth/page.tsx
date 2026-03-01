import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/cta-button';

export const metadata: Metadata = {
  title: 'Wisdom Teeth Removal in Charlotte, NC | Southeast Oral Surgery',
  description: 'Expert wisdom teeth extraction by board-certified oral surgeons in Charlotte and Albemarle, NC. IV sedation available. Same-week appointments for impacted wisdom teeth.',
};

const symptoms = [
  'Pain or tenderness in the back of the mouth',
  'Swelling or redness in the gums',
  'Jaw stiffness or difficulty opening mouth',
  'Bad breath or unpleasant taste',
  'Headaches or earaches',
  'Crowding or shifting of other teeth',
];

const reasons = [
  {
    title: 'Impaction',
    description: 'Wisdom teeth that are trapped beneath the gum line or jawbone can cause pain, infection, and damage to adjacent teeth.',
  },
  {
    title: 'Partial Eruption',
    description: 'Partially emerged wisdom teeth create openings where bacteria can enter, leading to infection and gum disease.',
  },
  {
    title: 'Crowding',
    description: 'Emerging wisdom teeth can push against other teeth, causing misalignment and undoing years of orthodontic work.',
  },
  {
    title: 'Decay Risk',
    description: 'Wisdom teeth are difficult to clean properly, making them more susceptible to cavities and gum disease.',
  },
];

export default function WisdomTeethPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Third Molar Extraction</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Wisdom Teeth Removal in Charlotte, NC
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Wisdom teeth often need to be removed to prevent pain, infection, and damage to
                surrounding teeth. Our board-certified oral surgeons perform thousands of wisdom
                tooth extractions each year with comfortable IV sedation options.
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
                src="https://cdn.abacus.ai/images/c5540a3c-e1cd-43e6-9e97-7165c5f63cec.png"
                alt="Wisdom tooth extraction illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Remove Wisdom Teeth */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Remove Wisdom Teeth?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Most people don&apos;t have enough room in their mouth for wisdom teeth to fully emerge and function properly
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                <p className="mt-2 text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Signs You May Need Extraction</h2>
              <p className="mt-4 text-gray-600">
                If you&apos;re experiencing any of these symptoms, it may be time to have your wisdom teeth evaluated:
              </p>
              <div className="mt-8 space-y-4">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-amber-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Early Evaluation is Key</h3>
              <p className="mt-4 text-gray-700">
                The American Association of Oral and Maxillofacial Surgeons recommends that young adults
                have their wisdom teeth evaluated by age 17. Early removal often results in easier surgery,
                faster recovery, and fewer complications.
              </p>
              <p className="mt-4 text-gray-700">
                Even without symptoms, your dentist or our surgeons may recommend removal to prevent
                future problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What to Expect</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We make wisdom tooth removal as comfortable and stress-free as possible
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Consultation & Imaging</h3>
              <p className="mt-2 text-gray-600">
                3D imaging helps us assess your wisdom teeth and plan your treatment.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Comfortable Extraction</h3>
              <p className="mt-2 text-gray-600">
                Most patients choose IV sedation for a relaxed, anxiety-free experience.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Quick Recovery</h3>
              <p className="mt-2 text-gray-600">
                Most patients return to normal activities within 3-5 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Recovery Tips</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Following these guidelines will help ensure a smooth recovery
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-slate-300">Apply ice packs for the first 24-48 hours</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-slate-300">Take prescribed medications as directed</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-slate-300">Eat soft foods for the first few days</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-slate-300">Avoid straws, smoking, and vigorous rinsing</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-slate-300">Rest and avoid strenuous activity</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-slate-300">Gently rinse with salt water after 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Experiencing Wisdom Tooth Pain?</h2>
          <p className="mt-4 text-lg text-white/80">
            Don&apos;t wait until it gets worse. Schedule your evaluation today.
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
