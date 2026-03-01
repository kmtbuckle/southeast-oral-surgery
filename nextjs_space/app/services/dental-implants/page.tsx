import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/cta-button';

export const metadata: Metadata = {
  title: 'Dental Implants in Charlotte, NC | Southeast Oral Surgery',
  description: 'Expert dental implant placement by board-certified oral surgeons in Charlotte and Albemarle, NC. 3D imaging, bone grafting, and full-arch solutions. Schedule your consultation today.',
};

const benefits = [
  'Permanent tooth replacement that looks and functions like natural teeth',
  'Preserves jawbone and prevents bone loss',
  'No impact on adjacent healthy teeth',
  'Improved chewing ability and speech',
  'Long-lasting results with proper care (often lifetime)',
  'Enhanced confidence in your smile',
];

const implantTypes = [
  {
    title: 'Single Tooth Implants',
    description: 'Replace one missing tooth with a natural-looking crown supported by a titanium implant root.',
  },
  {
    title: 'Multiple Tooth Implants',
    description: 'Restore several missing teeth with implant-supported bridges, eliminating the need for removable partial dentures.',
  },
  {
    title: 'Full-Arch Restoration',
    description: 'Replace an entire arch of teeth with as few as 4-6 implants using All-on-4® or similar techniques.',
  },
  {
    title: 'Implant-Supported Dentures',
    description: 'Secure loose dentures with implant attachments for improved stability and comfort.',
  },
];

export default function DentalImplantsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Tooth Replacement</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Dental Implants in Charlotte, NC
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Dental implants are the gold standard for replacing missing teeth. Our board-certified
                oral surgeons use advanced 3D imaging and precise surgical techniques to place implants
                that look, feel, and function like natural teeth.
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
                src="https://cdn.abacus.ai/images/ece6b1d7-96a5-4274-bb02-b703468ce275.png"
                alt="Dental implant illustration showing implant, abutment, and crown"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Are Dental Implants */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Are Dental Implants?</h2>
            <p className="mt-4 text-lg text-gray-600">
              A dental implant is a small titanium post that is surgically placed into the jawbone
              where a tooth is missing. Once healed, the implant acts as an artificial tooth root,
              providing a stable foundation for a custom-made crown, bridge, or denture.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-stone-50 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Implant Placement</h3>
              <p className="mt-2 text-gray-600">
                A titanium implant post is surgically placed into the jawbone during a minor procedure.
              </p>
            </div>
            <div className="rounded-xl bg-stone-50 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Healing Period</h3>
              <p className="mt-2 text-gray-600">
                Over 3-6 months, the implant fuses with the bone in a process called osseointegration.
              </p>
            </div>
            <div className="rounded-xl bg-stone-50 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Final Restoration</h3>
              <p className="mt-2 text-gray-600">
                A custom crown is attached to complete your new tooth with natural appearance and function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Benefits of Dental Implants</h2>
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

      {/* Implant Types */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Types of Implant Solutions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            We offer comprehensive implant solutions tailored to your specific needs
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {implantTypes.map((type, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                <p className="mt-2 text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Advanced Technology</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              We use the latest diagnostic and surgical technology for precise implant placement
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">3D Cone Beam CT</h3>
              <p className="mt-2 text-slate-400">
                Our CS 9300 imaging system provides detailed 3D views for precise treatment planning.
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">Computer-Guided Surgery</h3>
              <p className="mt-2 text-slate-400">
                Digital planning allows for predictable, minimally invasive implant placement.
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">IV Sedation Available</h3>
              <p className="mt-2 text-slate-400">
                Comfortable sedation options ensure a relaxed, anxiety-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Restore Your Smile?</h2>
          <p className="mt-4 text-lg text-white/80">
            Schedule a consultation to learn if dental implants are right for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton text="Schedule Consultation" size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <a 
              href="tel:704-541-3603" 
              className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span><span className="text-white/70">Charlotte:</span> (704) 541-3603</span>
            </a>
            <a 
              href="tel:704-983-2502" 
              className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span><span className="text-white/70">Albemarle:</span> (704) 983-2502</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
