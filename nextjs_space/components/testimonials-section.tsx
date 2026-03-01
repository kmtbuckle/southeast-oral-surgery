'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const featuredTestimonial = {
  name: 'Sarah M.',
  location: 'Charlotte, NC',
  rating: 5,
  text: 'Dr. Swann and his team made my wisdom teeth removal completely painless and stress-free. The sedation options they offered meant I had no anxiety at all. From the initial consultation to post-op follow-up, every step was handled with professionalism and genuine care. I highly recommend this practice to anyone needing oral surgery.',
};

const testimonials = [
  {
    name: 'Michael R.',
    location: 'Albemarle, NC',
    rating: 5,
    text: 'After years of dental issues, getting implants was the best decision I made. The team here is professional, caring, and truly experts in their field. My smile has never been better.',
  },
  {
    name: 'Jennifer L.',
    location: 'Charlotte, NC',
    rating: 5,
    text: 'The 3D imaging technology gave me complete confidence in my treatment plan. Dr. Tallent explained everything clearly and the results exceeded my expectations.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Patient Stories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 shadow-md ring-1 ring-gray-100">
            <div className="text-right">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-1 text-sm font-medium text-gray-600">4.9 out of 5 stars</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-gray-900">Google</p>
              <p className="text-xs text-gray-500">Verified Reviews</p>
            </div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-12 rounded-2xl bg-primary/5 p-8 sm:p-12"
        >
          <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10 sm:h-24 sm:w-24" />
          <div className="relative">
            <div className="flex space-x-1">
              {Array.from({ length: featuredTestimonial?.rating ?? 5 })?.map?.((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-6 text-xl leading-relaxed text-gray-700 sm:text-2xl sm:leading-relaxed">
              &ldquo;{featuredTestimonial?.text}&rdquo;
            </p>
            <div className="mt-8">
              <p className="text-lg font-semibold text-gray-900">{featuredTestimonial?.name}</p>
              <p className="text-gray-600">{featuredTestimonial?.location}</p>
            </div>
          </div>
        </motion.div>

        {/* Other Testimonials */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials?.map?.((testimonial, index) => (
            <motion.div
              key={testimonial?.name ?? index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
            >
              <div className="flex space-x-1">
                {Array.from({ length: testimonial?.rating ?? 5 })?.map?.((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                &ldquo;{testimonial?.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className="font-semibold text-gray-900">{testimonial?.name}</p>
                <p className="text-sm text-gray-600">{testimonial?.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
