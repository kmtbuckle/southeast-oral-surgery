import Link from 'next/link';
import Image from 'next/image';
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
import ServiceCard from '@/components/service-card';
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
      {/* HERO (Charlotte skyline) */}
      <section className="relative overflow-hidden">
        <div className="relative h-[540px] w-full sm:h-[620px]">
          <Image
            src="/images/IMG_0229.jpeg"
            alt="Charlotte skyline"
            fill
            priority
            className="object-cover object-[50%_80%]"
          />

          {/* Subtle global overlay for consistency */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/10 to-transparent" />

          {/* Stronger left scrim for readability behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/15 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl rounded-xl bg-white/10 backdrop-blur-md p-8 border border-white/20">
              <p className="text-sm font-medium uppercase tracking-widest text-white/80">
                Board-certified oral &amp; maxillofacial surgery
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Expert surgical care in <br className="hidden sm:block" />
                Charlotte &amp; Albemarle
              </h1>

              <p className="mt-4 max-w-xl text-lg text-white/85">
                Compassionate, advanced oral surgery—from dental implants to wisdom teeth—with
                sedation options for comfort and peace of mind.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact#consultation-form">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Request a Consultation
                  </Button>
                </Link>

                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/60 bg-white/0 text-white hover:bg-white hover:text-slate-900"
                  >
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="mt-6 text-sm text-white/80">
                Two convenient locations • Trusted for generations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
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

      {/* MEET SURGEONS */}
      <MeetSurgeonsSection />

      {/* WHY PATIENTS TRUST US */}
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

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CONSULTATION FORM */}
      <section
        id="consultation-form"
        className="bg-gradient-to-b from-stone-50 to-white py-12 sm:py-16 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>

      {/* CONTACT CTA */}
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
