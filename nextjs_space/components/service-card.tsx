'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  image,
  href,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href ?? '#'}>
        <div className="group h-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <Image
              src={image ?? ''}
              alt={title ?? 'Service image'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-2 line-clamp-3 text-gray-600">{description}</p>
            <div className="mt-4 flex items-center text-primary transition-transform group-hover:translate-x-1">
              <span className="text-sm font-medium">Learn More</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
