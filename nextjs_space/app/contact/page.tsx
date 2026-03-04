import { MapPin, Phone, Clock } from 'lucide-react';
import { Metadata } from 'next';
import ConsultationForm from '@/components/consultation-form';
import { Button } from '@/components/ui/button';
import ScrollToHash from './scroll-to-hash';

export const metadata: Metadata = {
  title: 'Contact Us | Southeast Oral & Maxillofacial Surgery',
  description:
    'Contact our Charlotte and Albemarle offices for consultations, appointments, and inquiries. Two convenient locations to serve you.',
};

const locations = [
  {
    name: 'Charlotte Office',
    address: {
      street: '3111 Springbank Ln Ste A',
      city: 'Charlotte',
      state: 'NC',
      zip: '28226',
    },
    phone: '(704) 541-3603',
    phoneRaw: '704-541-3603',
    hours: [
      { days: 'Monday - Thursday', time: '8:30 AM - 4:30 PM' },
      { days: 'Friday', time: '7:30 AM - 12:30 PM' },
      { days: 'Saturday - Sunday', time: 'Closed' },
    ],
  },
  {
    name: 'Albemarle Office',
    address: {
      street: '1003 North Sixth Street',
      city: 'Albemarle',
      state: 'NC',
      zip: '28001',
    },
    phone: '(704) 983-2502',
    phoneRaw: '704-983-2502',
    hours: [
      { days: 'Monday - Friday', time: 'By Appointment' },
      { days: 'Saturday - Sunday', time: 'Closed' },
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* This is the magic that makes /contact#consultation-form scroll reliably */}
      <ScrollToHash />

      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">
              Two Locations
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              We&apos;re here to answer your questions and schedule your consultation
            </p>

            {/* Quick Contact */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:704-541-3603"
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <Phone className="h-4 w-4" />
                Charlotte: (704) 541-3603
              </a>
              <a
                href="tel:704-983-2502"
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <Phone className="h-4 w-4" />
                Albemarle: (704) 983-2502
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {locations.map((location, index) => (
              <div
                key={location.name ?? index}
                className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100"
              >
                {/* Map Embed */}
                <div className="aspect-video w-full bg-gray-100">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-80.8!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(
                      `${location.address.street}, ${location.address.city}, ${location.address.state}`
                    )}!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name}`}
                  />
                </div>

                {/* Location Details */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">{location.name}</h2>

                  {/* Address */}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-start space-x-3 group"
                  >
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div className="transition-colors group-hover:text-primary">
                      <p className="text-gray-700 group-hover:text-primary">{location.address.street}</p>
                      <p className="text-gray-700 group-hover:text-primary">
                        {location.address.city}, {location.address.state} {location.address.zip}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <div className="mt-4 flex items-center space-x-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a
                      href={`tel:${location.phoneRaw}`}
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="mt-6">
                    <div className="flex items-center space-x-2 text-gray-900">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Office Hours</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {location.hours.map((hour, i) => (
                        <div key={i} className="flex justify-between text-sm text-gray-600">
                          <span>{hour.days}</span>
                          <span className="font-medium">{hour.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Directions Button */}
                  <div className="mt-6">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        `${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-primary hover:bg-primary/90">
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section
        id="consultation-form"
        className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>

      {/* Phone CTA */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary">
              <Phone className="h-8 w-8" />
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            Prefer to Speak With Us Directly?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Our friendly staff is ready to assist you with scheduling, insurance questions, and general inquiries.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="tel:704-541-3603">
              <Button size="lg" variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100 sm:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                Charlotte: (704) 541-3603
              </Button>
            </a>
            <a href="tel:704-983-2502">
              <Button size="lg" variant="outline" className="w-full border-white bg-transparent text-white hover:bg-white hover:text-primary sm:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                Albemarle: (704) 983-2502
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
