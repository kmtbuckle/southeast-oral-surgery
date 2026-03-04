import Link from 'next/link';
import {
  Award,
  Building2,
  Clock,
  ArrowRight,
  Scan,
  Syringe,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationForm from '@/components/consultation-form';
import HeroSection from '@/components/hero-section';
import ServiceCard from '@/components/service-card';
import TrustSignals from '@/components/trust-signals';
import TestimonialsSection from '@/components/testimonials-section';
import MeetSurgeonsSection from '@/components/meet-surgeons-section';

const services = [
  {
    title: 'Dental Implants',
    description:
      'Permanent tooth replacement with natural-looking, durable results that last a lifetime.',
    icon: 'implant',
    image: 'https://cdn.abacus.ai/images/ece6b1d7-96a5-4274-bb02-b703468ce275.png',
    href: '/services#dental-implants',
  },
  {
    title: 'Wisdom Teeth',
    description:
      'Expert removal of impacted or problematic wisdom teeth with comfortable sedation options.',
    icon: 'tooth',
    image: 'https://cdn.abacus.ai/images/c5540a3c-e1cd-43e6-9e97-7165c5f63cec.png',
    href: '/services#wisdom-teeth',
  },
  {
    title: 'Bone Grafting',
    description:
      'Foundation procedures that restore bone volume for successful implant placement.',
    icon: 'bone',
    image: 'https://cdn.abacus.ai/images/1e05c77c-290d-461e-9fcc-313e3eb53185.png',
    href: '/services#bone-grafting',
  },
  {
    title: 'Sedation Options',
    description: 'IV sedation and anesthesia for a comfortable, anxiety-free surgical experience.',
    icon: 'sedation',
    image: 'https://cdn.abacus.ai/images/ba58715a-797b-4899-9c6d-aadaec44aadc.png',
    href: '/services#sedation',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Signals (add context + tighten spacing) */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">
              What sets us apart
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expertise you can trust
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Board-certified surgeons, advanced technology, and patient-first care—delivered across
              our Charlotte and Albemarle offices.
            </p>
          </div>

          <div className="mt-10">
            <TrustSignals />
          </div>
        </div>
      </section>

      {/* Services Section (tighten spacing) */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">
              Our Expertise
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Surgical Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Advanced surgical care delivered with precision and compassion
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title ?? index} {...service} index={index} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-primary/20 font-medium text-primary hover:bg-primary/5"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Surgeons */}
      <MeetSurgeonsSection />

      {/* Why Patients Trust Us */}
      <section className="border-y border-stone-100 bg-slate-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">
              The Difference
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Patients Trust Us
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
              Specific credentials that set Southeast Oral Surgery apart
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl bg-slate-800/50 p-6 transition-all hover:bg-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">Diplomates, ABOMS</h3>
              <p className="mt-2 text-slate-400">
                Board-certified by the American Board of Oral and Maxillofacial Surgery—the highest
                credential in our specialty.
              </p>
            </div>

            <div className="group rounded-xl bg-slate-800/50 p-6 transition-all hover:bg-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">Hospital Privileges</h3>
              <p className="mt-2 text-slate-400">
                Full operating privileges at Novant Health and Atrium Health for complex cases
                requiring hospitalization.
              </p>
            </div>

            <div className="group rounded-xl bg-slate-800/50 p-6 transition-all hover:bg-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">50+ Years Serving Charlotte</h3>
              <p className="mt-2 text-slate-400">
                One of the oldest oral surgery practices in the region. Founded 1970. Trusted for
                generations.
              </p>
            </div>

            <div className="group rounded-xl bg-slate-800/50 p-6 transition-all hover:bg-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Scan className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">3D Cone Beam CT Imaging</h3>
              <p className="mt-2 text-slate-400">
                Advanced imaging for precise diagnostics and treatment planning in both offices.
              </p>
            </div>

            <div className="group rounded-xl bg-slate-800/50 p-6 transition-all hover:bg-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Syringe className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">In-Office IV Sedation</h3>
              <p className="mt-2 text-slate-400">
                IV sedation and anesthesia administered by trained surgeons for comfortable,
                anxiety-free procedures.
              </p>
            </div>

            <div className="group rounded-xl bg-slate-800/50 p-6 transition-all hover:bg-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">Emergency Surgical Care</h3>
              <p className="mt-2 text-slate-400">
                Same-day emergency consultations for facial trauma, severe infections, and urgent
                surgical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Consultation Form (tighten spacing) */}
      <section
        id="consultation-form"
        className="bg-gradient-to-b from-stone-50 to-white py-12 sm:py-16 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>

      {/* Contact CTA (keep, but tighten) */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to Schedule Your Consultation?
              </h2>
              <p className="mt-2 text-white/80">Call us directly or request a consultation online</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:704-541-3603">
                <Button
                  size="lg"
                  variant="secondary"
                  className="min-w-[200px] bg-white font-medium text-primary hover:bg-gray-50"
                >
                  Charlotte: (704) 541-3603
                </Button>
              </a>
              <a href="tel:704-983-2502">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[200px] border-2 border-white/50 bg-transparent font-medium text-white hover:border-white hover:bg-white hover:text-primary"
                >
                  Albemarle: (704) 983-2502
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
