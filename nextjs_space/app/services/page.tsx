import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/cta-button';

export const metadata: Metadata = {
  title: 'Oral Surgery Services in Charlotte, NC | Southeast Oral Surgery',
  description: 'Board-certified oral surgery services in Charlotte and Albemarle, NC. Dental implants, wisdom teeth removal, jaw surgery, bone grafting, facial trauma, and IV sedation. 50+ years of experience.',
};

const services = [
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    href: '/services/dental-implants',
    image: 'https://cdn.abacus.ai/images/ece6b1d7-96a5-4274-bb02-b703468ce275.png',
    description:
      'Permanent tooth replacement solutions that look, feel, and function like natural teeth.',
    details: [
      'Single tooth implants and full arch restoration',
      'Implant-supported dentures for superior stability',
      'Advanced 3D treatment planning',
      'High success rates with proper care',
      'Bone grafting available when needed',
    ],
  },
  {
    id: 'wisdom-teeth',
    title: 'Wisdom Teeth Removal',
    href: '/services/wisdom-teeth',
    image: 'https://cdn.abacus.ai/images/c5540a3c-e1cd-43e6-9e97-7165c5f63cec.png',
    description:
      'Expert removal of impacted or problematic wisdom teeth with advanced sedation options for maximum comfort.',
    details: [
      'Comprehensive evaluation using 3D imaging',
      'IV sedation administered by board-certified surgeons',
      'Same-day emergency appointments when needed',
      'Detailed post-operative care instructions',
      'Most procedures completed in under an hour',
    ],
  },
  {
    id: 'bone-grafting',
    title: 'Bone Grafting',
    href: '/services/bone-grafting',
    image: 'https://cdn.abacus.ai/images/1e05c77c-290d-461e-9fcc-313e3eb53185.png',
    description:
      'Procedures to rebuild and strengthen jawbone for implants or improved oral health.',
    details: [
      'Socket preservation after tooth extraction',
      'Ridge augmentation for implant placement',
      'Sinus lift procedures',
      'Various grafting materials available',
      'Minimizes bone loss and maintains facial structure',
    ],
  },
  {
    id: 'jaw-surgery',
    title: 'Corrective Jaw Surgery',
    href: '/services/jaw-surgery',
    image: 'https://cdn.abacus.ai/images/36989a4b-3a20-44ff-9989-b1c69beb04b3.png',
    description:
      'Orthognathic surgery to correct jaw alignment, improve bite function, and restore facial balance.',
    details: [
      'Treatment for misaligned jaws and bite problems',
      'Relief from TMJ disorders and chronic pain',
      'Improved breathing and sleep apnea treatment',
      'Enhanced facial symmetry and aesthetics',
      'Coordinated care with orthodontists',
    ],
  },
  {
    id: 'facial-trauma',
    title: 'Facial Trauma Care',
    href: '/services/facial-trauma',
    image: 'https://cdn.abacus.ai/images/9bc6e77f-fb97-4c3e-9dc4-9d4593fec996.png',
    description:
      'Expert treatment for facial injuries with focus on functional and aesthetic restoration.',
    details: [
      'Emergency trauma care available',
      'Treatment of facial fractures and lacerations',
      'Reconstruction after injury or trauma',
      'Hospital privileges at Novant Health & Atrium Health',
      'Minimally invasive techniques when possible',
    ],
  },
  {
    id: 'sedation',
    title: 'IV Sedation & Anesthesia',
    href: '/services/sedation',
    image: 'https://cdn.abacus.ai/images/ba58715a-797b-4899-9c6d-aadaec44aadc.png',
    description:
      'Safe, comfortable sedation options administered by board-certified oral surgeons for anxiety-free procedures.',
    details: [
      'IV sedation for deep relaxation',
      'Local anesthesia and nitrous oxide options',
      'Board-certified in anesthesia administration',
      'Continuous monitoring throughout procedure',
      'Quick recovery and same-day discharge',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Board-Certified Expertise</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our <span className="text-primary">Surgical Services</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Comprehensive oral and maxillofacial surgery delivered with precision, 
              expertise, and compassionate care by Diplomates of the American Board of Oral & Maxillofacial Surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services?.map?.((service, index) => (
              <div
                key={service?.id ?? index}
                id={service?.id}
                className="scroll-mt-24 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-50 to-white shadow-lg ring-1 ring-gray-100"
              >
                <div
                  className={`grid grid-cols-1 gap-0 lg:grid-cols-2 ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] bg-gray-100 lg:aspect-auto lg:min-h-[400px] ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}
                  >
                    <Image
                      src={service?.image ?? ''}
                      alt={service?.title ?? 'Service image'}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-gray-900">{service?.title}</h2>
                    <p className="mt-4 text-lg text-gray-600">{service?.description}</p>

                    <ul className="mt-8 space-y-4">
                      {service?.details?.map?.((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {service?.href && (
                      <div className="mt-10">
                        <Link href={service.href}>
                          <Button 
                            variant="outline" 
                            className="group border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">State-of-the-Art Equipment</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              Advanced Technology for Precise Care
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We utilize cutting-edge equipment to ensure accurate diagnosis and optimal outcomes
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">3D Cone Beam CT Imaging</h3>
              <p className="mt-4 text-gray-600">
                Our advanced CS 9300 3D imaging technology provides detailed views of bone structure,
                nerve pathways, and anatomical features. This enables precise surgical planning and
                safer procedures with greater accuracy.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">In-Office IV Sedation</h3>
              <p className="mt-4 text-gray-600">
                IV sedation, administered by our board-certified oral surgeons, ensures patient comfort 
                during procedures. Patients remain conscious but deeply relaxed, with little to no memory 
                of the surgery and quick recovery times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Dual Phone Numbers */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready to Schedule Your Consultation?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Our team is here to answer your questions and provide expert care
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <CTAButton
              text="Request Consultation"
              variant="secondary"
              size="lg"
              className="px-8 bg-white text-primary hover:bg-gray-100"
            />
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
