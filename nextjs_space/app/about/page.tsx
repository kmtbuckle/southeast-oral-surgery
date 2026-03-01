import Image from 'next/image';
import { Award, GraduationCap, Heart, Users, Building2, MapPin, Calendar } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Surgeons | Southeast Oral & Maxillofacial Surgery | Charlotte NC',
  description: 'Meet our board-certified oral surgeons Dr. R. Dennis Swann and Dr. Brian W. Tallent. Diplomates of the American Board of Oral & Maxillofacial Surgery serving Charlotte and Albemarle, NC for over 50 years.',
};

const teamMembers = [
  {
    name: 'R. Dennis Swann, D.M.D.',
    title: 'Oral & Maxillofacial Surgeon',
    credentials: 'Diplomate, American Board of Oral and Maxillofacial Surgery',
    image: '/images/team/dr-swann.jpg',
    bio: 'Dr. Swann practices the full scope of oral and maxillofacial surgery with particular expertise in dental implants, wisdom teeth removal, jaw surgery, and facial trauma. His commitment to continuing education and advanced technology ensures patients receive the highest quality care.',
    education: [
      {
        institution: 'University of Kentucky',
        degree: 'Undergraduate Studies',
        note: 'Graduated with high distinction',
      },
      {
        institution: 'University of Kentucky School of Dentistry',
        degree: 'Doctor of Dental Medicine (D.M.D.)',
        note: 'Graduated top of class, 1985',
      },
      {
        institution: 'Washington University, St. Louis',
        degree: 'Oral & Maxillofacial Surgery Residency',
        note: 'Hospital-based surgical training',
      },
    ],
    certifications: [
      'Diplomate, American Board of Oral and Maxillofacial Surgery',
      'Fellow, American Association of Oral and Maxillofacial Surgeons',
    ],
    hospitalAffiliations: [
      'Novant Health Huntersville Medical Center',
      'Atrium Health System',
    ],
    specialties: [
      'Dental Implants',
      'Orthognathic (Jaw) Surgery',
      'Wisdom Teeth Removal',
      'Facial Trauma',
      'Bone Grafting',
      'IV Sedation',
    ],
    yearsExperience: '35+',
  },
  {
    name: 'Brian W. Tallent, D.D.S.',
    title: 'Oral & Maxillofacial Surgeon',
    credentials: 'Diplomate, American Board of Oral and Maxillofacial Surgery',
    image: '/images/team/dr-tallent.jpg',
    bio: 'Dr. Tallent brings extensive experience in all aspects of oral and maxillofacial surgery. His patient-centered approach and dedication to precision surgery have earned the trust of patients and referring dentists throughout the Charlotte region.',
    education: [
      {
        institution: 'Western Washington University',
        degree: 'Bachelor\'s Degree',
        note: 'Undergraduate studies',
      },
      {
        institution: 'Dental School',
        degree: 'Doctor of Dental Surgery (D.D.S.)',
        note: null,
      },
      {
        institution: 'Hospital-Based Residency Program',
        degree: 'Oral & Maxillofacial Surgery Residency',
        note: 'Surgical and anesthesia training',
      },
    ],
    certifications: [
      'Diplomate, American Board of Oral and Maxillofacial Surgery',
      'Board Certified in IV Sedation Administration',
    ],
    hospitalAffiliations: [
      'Novant Health System',
      'Atrium Health System',
    ],
    specialties: [
      'Dental Implants',
      'Wisdom Teeth Removal',
      'Bone Grafting',
      '3D Imaging & Treatment Planning',
      'Reconstructive Surgery',
      'IV Sedation',
    ],
    yearsExperience: '20+',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary/70">Our Surgeons</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Board-Certified <span className="text-primary">Surgical Excellence</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Diplomates of the American Board of Oral and Maxillofacial Surgery,
              committed to delivering exceptional care with compassion and integrity
            </p>
          </div>
        </div>
      </section>

      {/* Practice History */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center space-x-2 text-primary">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Since 1970</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Over 50 Years Serving the Charlotte Region
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Southeast Oral & Maxillofacial Surgery Associates was founded over 50 years
                ago by Dr. Edward Austin, making it one of the oldest and most trusted oral
                surgery practices in the Charlotte Metro Area.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, we continue that legacy of excellence, combining decades of experience
                with cutting-edge technology including 3D Cone Beam CT imaging. Our board-certified
                surgeons are dedicated to treating each patient with the compassion and expertise
                they deserve.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-stone-200 bg-stone-50/50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">Board Certified</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Diplomates of the American Board of Oral and Maxillofacial Surgery
                  </p>
                </div>

                <div className="rounded-xl border border-stone-200 bg-stone-50/50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">Hospital Privileges</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Full surgical privileges at Novant Health & Atrium Health
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/charlotte/botanical_gardens.webp"
                alt="Charlotte Botanical Gardens near our Providence Road location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members - Full Bios */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Meet Our Surgeons
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive training and decades of experience in oral and maxillofacial surgery
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {teamMembers?.map?.((member, index) => (
              <div
                key={member?.name ?? index}
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4">
                  {/* Photo and Quick Info */}
                  <div className="bg-stone-100 p-8 lg:col-span-1">
                    <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={member?.image ?? '/images/team/placeholder.jpg'}
                        alt={member?.name ?? 'Doctor'}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">{member?.name}</h3>
                      <p className="mt-1 text-primary">{member?.title}</p>
                      <div className="mt-3 flex items-center justify-center text-sm text-gray-600">
                        <Award className="mr-2 h-4 w-4 text-primary" />
                        {member?.yearsExperience} Years Experience
                      </div>
                    </div>
                  </div>

                  {/* Detailed Info */}
                  <div className="p-8 lg:col-span-3">
                    {/* Credentials Badge */}
                    <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      {member?.credentials}
                    </div>

                    <p className="text-lg text-gray-700">{member?.bio}</p>

                    {/* Education */}
                    <div className="mt-8">
                      <h4 className="flex items-center text-lg font-semibold text-gray-900">
                        <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                        Education & Training
                      </h4>
                      <div className="mt-4 space-y-4">
                        {member?.education?.map?.((edu, i) => (
                          <div key={i} className="flex items-start">
                            <div className="mr-4 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                            <div>
                              <p className="font-medium text-gray-900">{edu?.institution}</p>
                              <p className="text-gray-600">{edu?.degree}</p>
                              {edu?.note && <p className="text-sm text-gray-500">{edu?.note}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                      {/* Certifications */}
                      <div>
                        <h4 className="flex items-center font-semibold text-gray-900">
                          <Award className="mr-2 h-5 w-5 text-primary" />
                          Certifications
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {member?.certifications?.map?.((cert, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="mr-2 text-primary">•</span>
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Hospital Affiliations */}
                      <div>
                        <h4 className="flex items-center font-semibold text-gray-900">
                          <Building2 className="mr-2 h-5 w-5 text-primary" />
                          Hospital Privileges
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {member?.hospitalAffiliations?.map?.((hospital, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="mr-2 text-primary">•</span>
                              {hospital}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-900">Areas of Expertise</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {member?.specialties?.map?.((specialty, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-gray-700"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Philosophy */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Commitment to You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Guided by principles of compassion, excellence, and collaboration
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-stone-200 p-8 text-center transition-all hover:border-primary/30 hover:shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Patient-Centered Care</h3>
              <p className="mt-3 text-gray-600">
                We treat every patient with empathy, respect, and understanding. Your comfort
                and well-being are our highest priorities throughout your surgical journey.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 p-8 text-center transition-all hover:border-primary/30 hover:shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Surgical Excellence</h3>
              <p className="mt-3 text-gray-600">
                Board certification, continuing education, and investment in advanced technology
                ensure we deliver the highest standard of surgical care available.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 p-8 text-center transition-all hover:border-primary/30 hover:shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Collaborative Approach</h3>
              <p className="mt-3 text-gray-600">
                We work closely with referring dentists and specialists to ensure comprehensive,
                coordinated care. Patients are always returned to their general dentist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-stone-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-gray-900">Two Convenient Locations</p>
                <p className="text-gray-600">Charlotte (Providence Road) & Albemarle, NC</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:704-541-3603"
                className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Charlotte: (704) 541-3603
              </a>
              <a
                href="tel:704-983-2502"
                className="rounded-lg border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/5"
              >
                Albemarle: (704) 983-2502
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
