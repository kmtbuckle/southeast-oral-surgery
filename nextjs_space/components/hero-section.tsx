'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToConsultation = () => {
    const element = document?.getElementById('consultation-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-white">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="https://static.vecteezy.com/system/resources/previews/025/453/858/non_2x/seamless-cross-pattern-endless-black-and-white-texture-abstract-geometric-ornament-background-vector.jpg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
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
              Advanced oral surgery with compassionate care. Our surgeons are Diplomates 
              of the American Board of Oral & Maxillofacial Surgery, serving the region 
              for over 50 years.
            </p>

            {/* CTAs */}
            <div className="mt-10">
              <Button
                onClick={scrollToConsultation}
                size="lg"
                className="group bg-primary px-8 py-6 text-lg font-medium hover:bg-primary/90"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
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
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-6 py-4 shadow-lg ring-1 ring-gray-100 sm:-bottom-6 sm:-left-6">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Diplomates of the</p>
              <p className="text-sm font-semibold text-primary">American Board of Oral &</p>
              <p className="text-sm font-semibold text-primary">Maxillofacial Surgery</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
