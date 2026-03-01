'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const surgeons = [
  {
    name: 'R. Dennis Swann, D.M.D.',
    title: 'Oral & Maxillofacial Surgeon',
    credentials: 'Diplomate, American Board of Oral and Maxillofacial Surgery',
    image: '/images/team/dr-swann.jpg',
    bio: 'Dr. Swann graduated with high distinction from the University of Kentucky and completed his residency at Washington University in St. Louis. With over 35 years of experience, he practices the full scope of oral and maxillofacial surgery.',
    highlights: ['University of Kentucky', 'Washington University Residency', '35+ Years Experience'],
  },
  {
    name: 'Brian W. Tallent, D.D.S.',
    title: 'Oral & Maxillofacial Surgeon',
    credentials: 'Diplomate, American Board of Oral and Maxillofacial Surgery',
    image: '/images/team/dr-tallent.jpg',
    bio: 'Dr. Tallent earned his undergraduate degree from Western Washington University and D.D.S. from dental school. He completed additional hospital-based surgical and anesthesia training, specializing in IV sedation and advanced surgical techniques.',
    highlights: ['Western Washington University', 'Hospital-Based Training', 'IV Sedation Expert'],
  },
];

export default function MeetSurgeonsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Our Team</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Surgeons
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Board-certified specialists dedicated to exceptional surgical care
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {surgeons.map((surgeon, index) => (
            <motion.div
              key={surgeon.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden bg-stone-100 sm:h-auto sm:w-48 sm:flex-shrink-0">
                  <Image
                    src={surgeon.image}
                    alt={surgeon.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{surgeon.name}</h3>
                    <p className="mt-1 text-primary">{surgeon.title}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Award className="mr-2 h-4 w-4 text-primary" />
                      <span>{surgeon.credentials}</span>
                    </div>
                  </div>

                  <p className="mt-4 flex-1 text-gray-600">{surgeon.bio}</p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {surgeon.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/about">
            <Button
              variant="outline"
              className="group border-2 border-primary/20 font-medium text-primary hover:bg-primary/5"
            >
              View Full Bios
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
