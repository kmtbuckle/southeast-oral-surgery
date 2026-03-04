'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToConsultation = () => {
    // If we're on the homepage and the section exists, smooth scroll
    const el = document.getElementById('consultation-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Optional: update hash for shareability
      window.history.replaceState(null, '', '#consultation-form');
      return;
    }

    // Otherwise, navigate to the homepage section
    window.location.href = '/#consultation-form';
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-white">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary/80">
              Charlotte & Albemarle, NC
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Board-Certified
              <span className="mt-1 block text-primary">Oral Surgeons</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Advanced oral surgery with compassionate care. Our surgeons are Diplomates of the
              American Board of Oral &amp; Maxillofacial Surgery, serving the region for over 50
              years.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Button
                onClick={scrollToConsultation}
                size="lg"
                className="group bg-primary px-8 py-6 text-lg font-medium hover:bg-primary/90"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Optional small helper text (feels “medical professional”) */}
              <p className="mt-3 text-sm text-gray-500">
                We&apos;ll contact you within 1 business day.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
              <Image
                src="/images/hero/hero.jpg"
                alt="Modern oral surgery consultation room"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-6 py-4 shadow-lg ring-1 ring-gray-100 sm:-bottom-6 sm:-left-6">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Diplomates of the
              </p>
              <p className="text-sm font-semibold text-primary">
                American Board of Oral &amp;
              </p>
              <p className="text-sm font-semibold text-primary">
                Maxillofacial Surgery
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
