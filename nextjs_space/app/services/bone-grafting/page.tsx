import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/cta-button';

export const metadata: Metadata = {
  title: 'Bone Grafting in Charlotte, NC | Southeast Oral Surgery',
  description: 'Bone grafting procedures for dental implants by board-certified oral surgeons in Charlotte and Albemarle, NC. Socket preservation, ridge augmentation, and sinus lifts.',
};

const graftTypes = [
  {
    title: 'Socket Preservation',
    description: 'Placed immediately after tooth extraction to prevent bone loss and prepare the site for future implants.',
  },
  {
    title: 'Ridge Augmentation',
    description: 'Rebuilds the width and height of the jawbone ridge when significant bone loss has occurred.',
  },
  {
    title: 'Sinus Lift',
    description: 'Adds bone to the upper jaw in the molar area when the sinus floor is too close to the jaw for implants.',
  },
  {
    title: 'Block Bone Grafts',
    description: 'Uses a larger piece of bone to rebuild severely deficient areas of the jaw.',
  },
];

const benefits = [
  'Enables dental implant placement where bone is insufficient',
  'Preserves facial structure and prevents collapse',
  'Uses safe, well-researched grafting materials',
  'High success rates with predictable outcomes',
  'Often performed alongside other procedures',
  'Minimally invasive techniques available',
];

export default function BoneGraftingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Foundation for Implants</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Bone Grafting in Charlotte, NC
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Bone grafting restores lost jawbone to create a solid foundation for dental implants.
                Our board-certified oral surgeons use advanced techniques and materials to rebuild
                bone where it&apos;s needed, making implant treatment possible for more patients.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton text="Schedule Consultation" size="lg" />
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a href="tel:704-541-3603">
                    <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/5 sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      Charlotte: (704) 541-3603
                    </Button>
                  </a>
                  <a href="tel:704-983-2502">
                    <Button variant="outline" size="lg" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      Albemarle: (704) 983-2502
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
              <Image
                src="https://cdn.abacus.ai/images/1e05c77c-290d-461e-9fcc-313e3eb53185.png"
                alt="Bone grafting procedure illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Bone Grafting */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Is Bone Grafting Needed?</h2>
            <p className="mt-4 text-lg text-gray-600">
              When a tooth is lost, the surrounding bone begins to resorb or shrink. Over time,
              this bone loss can make it difficult or impossible to place dental implants. Bone
              grafting rebuilds this lost bone, creating a solid foundation for implant success.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-center text-xl font-semibold text-gray-900">Common Causes of Bone Loss</h3>
            <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-3 rounded-lg bg-stone-50 p-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-gray-700">Tooth extraction without socket preservation</span>
              </div>
              <div className="flex items-center space-x-3 rounded-lg bg-stone-50 p-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-gray-700">Long-term missing teeth</span>
              </div>
              <div className="flex items-center space-x-3 rounded-lg bg-stone-50 p-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-gray-700">Gum (periodontal) disease</span>
              </div>
              <div className="flex items-center space-x-3 rounded-lg bg-stone-50 p-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-gray-700">Trauma or injury to the jaw</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Grafts */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Types of Bone Grafts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            We offer several bone grafting procedures tailored to your specific needs
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {graftTypes.map((type, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                <p className="mt-2 text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Benefits of Bone Grafting</h2>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Need Bone Grafting for Implants?</h2>
          <p className="mt-4 text-lg text-white/80">
            Schedule a consultation to find out if bone grafting can help you become a candidate for dental implants.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
