'use client';

import { motion } from 'framer-motion';
import { Award, Building2, Scan, Syringe } from 'lucide-react';

const credentials = [
  {
    icon: Award,
    title: 'Board Certified',
    description: 'Diplomates of the American Board of Oral & Maxillofacial Surgery',
  },
  {
    icon: Building2,
    title: 'Hospital Privileges',
    description: 'Novant Health & Atrium Health medical centers',
  },
  {
    icon: Scan,
    title: '3D Cone Beam Imaging',
    description: 'Advanced diagnostic technology for precise treatment planning',
  },
  {
    icon: Syringe,
    title: 'IV Sedation',
    description: 'In-office sedation options for patient comfort',
  },
];

export default function TrustSignals() {
  return (
    <section className="border-y border-stone-200 bg-stone-50/50 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {credentials?.map?.((credential, index) => {
            const Icon = credential?.icon;
            return (
              <motion.div
                key={credential?.title ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{credential?.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{credential?.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
